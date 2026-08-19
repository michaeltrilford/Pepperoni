import StyleDictionary from "style-dictionary";
import { readFileSync } from "node:fs";

const figmaTheme = process.env.FIGMA_THEME || "light";
const runtimeTokenSource = readFileSync(new URL("./src/tokens/tokens.css", import.meta.url), "utf8");

function parseOklchToColor(val) {
  if (typeof val !== "string") return val;
  const match = val.match(
    /^oklch\(\s*([+-]?(?:\d*\.)?\d+)(%)?\s+([+-]?(?:\d*\.)?\d+)\s+([+-]?(?:\d*\.)?\d+)(?:deg)?(?:\s*\/\s*([+-]?(?:\d*\.)?\d+)(%)?)?\s*\)$/i
  );
  if (!match) return val;

  const lightness = Number(match[1]) / (match[2] ? 100 : 1);
  const chroma = Number(match[3]);
  const hue = Number(match[4]) * Math.PI / 180;
  const alpha = match[5] === undefined
    ? 1
    : Number(match[5]) / (match[6] ? 100 : 1);

  const a = chroma * Math.cos(hue);
  const b = chroma * Math.sin(hue);
  const l = lightness + 0.3963377774 * a + 0.2158037573 * b;
  const m = lightness - 0.1055613458 * a - 0.0638541728 * b;
  const s = lightness - 0.0894841775 * a - 1.2914855480 * b;
  const linear = [
    4.0767416621 * l ** 3 - 3.3077115913 * m ** 3 + 0.2309699292 * s ** 3,
    -1.2684380046 * l ** 3 + 2.6097574011 * m ** 3 - 0.3413193965 * s ** 3,
    -0.0041960863 * l ** 3 - 0.7034186147 * m ** 3 + 1.7076147010 * s ** 3
  ];
  const components = linear.map((component) => {
    const srgb = component <= 0.0031308
      ? 12.92 * component
      : 1.055 * component ** (1 / 2.4) - 0.055;
    return Math.min(1, Math.max(0, srgb));
  });
  const hex = `#${components
    .map((component) => Math.round(component * 255).toString(16).padStart(2, "0"))
    .join("")}`;

  return {
    colorSpace: "srgb",
    components,
    alpha: Math.min(1, Math.max(0, alpha)),
    hex
  };
}

const linePxMap = {
  "100": 14,
  "200": 16,
  "300": 18,
  "400": 21,
  "500": 24,
  "600": 36,
  "700": 48,
  "800": 60,
  "900": 72,
  "1000": 84,
  "1100": 96,
  "1200": 112
};

function parseDimensionToNumber(val, path = []) {
  if (typeof val === "number") return val;
  if (typeof val !== "string") return val;

  if (path.includes("line-height")) {
    const key = path[path.length - 1];
    if (linePxMap[key]) {
      return linePxMap[key];
    }
  }

  if (val.endsWith("rem")) {
    return parseFloat(val) * 10;
  }
  if (val.endsWith("px")) {
    return parseFloat(val);
  }
  if (val.endsWith("s")) {
    return parseFloat(val);
  }
  const parsed = parseFloat(val);
  return isNaN(parsed) ? val : parsed;
}

function toKebabCase(path) {
  return path.join("-").toLowerCase();
}

function toCamelCase(path) {
  const words = path.join("-").split("-");
  return words[0].toLowerCase() + words.slice(1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function toPortableTokenPath(path) {
  return path;
}

function parseRuntimeTokenGroups(css) {
  const groups = { shared: {}, light: {}, dark: {} };
  const blockPattern = /(:where\([^)]*\))\s*\{([\s\S]*?)\}/g;
  const declarationPattern = /(--[\w-]+)\s*:\s*([^;]+);/g;

  for (const match of css.matchAll(blockPattern)) {
    const [, selector, body] = match;
    const group = selector.includes('data-theme="light"')
      ? "light"
      : selector.includes('data-theme="dark"')
        ? "dark"
        : "shared";

    for (const declaration of body.matchAll(declarationPattern)) {
      groups[group][declaration[1]] = declaration[2].trim();
    }
  }

  return groups;
}

function runtimeTokenEntries(dictionary, format) {
  const groups = parseRuntimeTokenGroups(runtimeTokenSource);
  const selectedGroups = figmaTheme === "both" ? ["light", "dark"] : [figmaTheme];
  const typeByCssName = new Map(
    dictionary.allTokens.map((token) => [
      `--${toKebabCase(token.path)}`,
      token.$type || token.type || "string"
    ])
  );
  const result = {};

  for (const theme of selectedGroups) {
    const prefix = figmaTheme === "both" ? `--${theme}-` : "--";
    const values = { ...groups.shared, ...groups[theme] };

    for (const [name, value] of Object.entries(values)) {
      const outputName = `${prefix}${name.slice(2)}`;
      const reference = value.match(/^var\((--[^)]+)\)$/)?.[1];
      const type = reference
        ? typeByCssName.get(reference) || "color"
        : value.startsWith("oklch(")
          ? "color"
          : "string";
      const referenceName = reference
        ? format === "css"
          ? `{${reference}}`
          : `{${toCamelCase(reference.slice(2).split("-"))}}`
        : value;

      result[outputName] = {
        $value: referenceName,
        $type: type,
        $description: `Runtime mapping from tokens.css (${theme} theme).`
      };
    }
  }

  return result;
}

function toFigmaToken(token, formatReference) {
  const rawType = token.$type || token.type || "color";
  const rawValue = token.$value ?? token.value;
  const originalValue = token.original?.$value ?? token.original?.value ?? rawValue;
  let type = rawType;
  let value = rawValue;

  if (typeof originalValue === "string" && /^\{[^}]+\}$/.test(originalValue)) {
    const referencePath = originalValue.slice(1, -1).split(".");
    value = `{${formatReference(referencePath)}}`;
  } else if (rawType === "color") {
    value = parseOklchToColor(rawValue);
  } else if (rawType === "fontFamily" || rawType === "string") {
    type = "string";
  } else if (rawType === "dimension") {
    type = "dimension";
    value = { value: parseDimensionToNumber(rawValue, token.path), unit: "px" };
  } else if (rawType === "duration") {
    type = "duration";
    value = { value: parseFloat(rawValue), unit: "s" };
  } else {
    value = parseDimensionToNumber(rawValue, token.path);
    type = typeof value === "number" ? "number" : "string";
  }

  const result = { $value: value, $type: type };
  const description = token.$description || token.description;
  if (description) result.$description = description;
  return result;
}

StyleDictionary.registerFormat({
  name: "figma/css-json",
  format: function({ dictionary }) {
    const result = {};
    for (const token of dictionary.allTokens) {
      result[`--${toKebabCase(toPortableTokenPath(token.path))}`] = toFigmaToken(
        token,
        (path) => `--${toKebabCase(toPortableTokenPath(path))}`
      );
    }
    Object.assign(result, runtimeTokenEntries(dictionary, "css"));
    return JSON.stringify(result, null, 2);
  }
});

StyleDictionary.registerFormat({
  name: "figma/ios-json",
  format: function({ dictionary }) {
    const result = {};
    for (const token of dictionary.allTokens) {
      result[toCamelCase(toPortableTokenPath(token.path))] = toFigmaToken(
        token,
        (path) => toCamelCase(toPortableTokenPath(path))
      );
    }
    Object.assign(result, runtimeTokenEntries(dictionary, "ios"));
    return JSON.stringify(result, null, 2);
  }
});

StyleDictionary.registerFormat({
  name: "css/surface-primitives",
  format: function({ dictionary }) {
    const lines = dictionary.allTokens.map((token) => {
      const [, level] = token.path;
      const value = token.value ?? token.$value ?? token.original?.$value;
      return `  --surface-tone-${level}: ${value};`;
    });

    return [
      "/**",
      " * Do not edit directly, this file was auto-generated.",
      " */",
      "",
      ":root {",
      ...lines,
      "}",
      ""
    ].join("\n");
  }
});

export default {
  source: ["tokens/base.json", "generated/tokens/surface.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/tokens/",
      files: [
        {
          destination: "brand.css",
          format: "css/variables",
          filter: (token) => token.filePath.endsWith("tokens/base.json"),
          options: { outputReferences: true }
        },
        {
          destination: "surfaces.css",
          format: "css/surface-primitives",
          filter: (token) => token.path[0] === "surface-tone"
        }
      ]
    },
    iosSwift: {
      transformGroup: "ios-swift",
      buildPath: "generated/tokens/ios/",
      files: [
        {
          destination: "Tokens.swift",
          format: "ios-swift/class.swift",
          options: {
            className: "PepperoniTokens"
          }
        }
      ]
    },
    androidXml: {
      transformGroup: "android",
      buildPath: "generated/tokens/android/values/",
      files: [
        {
          destination: "colors.xml",
          format: "android/resources"
        }
      ]
    },
    figmaCssJson: {
      transformGroup: "js",
      buildPath: "generated/tokens/figma/",
      files: [
        {
          destination: "figma-css.json",
          format: "figma/css-json"
        }
      ]
    },
    figmaIosJson: {
      transformGroup: "js",
      buildPath: "generated/tokens/figma/",
      files: [
        {
          destination: "figma-ios.json",
          format: "figma/ios-json"
        }
      ]
    },
    publicFigmaCssJson: {
      transformGroup: "js",
      buildPath: "public/tokens/",
      files: [
        {
          destination: "figma-css.json",
          format: "figma/css-json"
        }
      ]
    },
    publicFigmaIosJson: {
      transformGroup: "js",
      buildPath: "public/tokens/",
      files: [
        {
          destination: "figma-ios.json",
          format: "figma/ios-json"
        }
      ]
    },
    publicCss: {
      transformGroup: "css",
      buildPath: "public/tokens/",
      files: [
        {
          destination: "brand.css",
          format: "css/variables",
          filter: (token) => token.filePath.endsWith("tokens/base.json"),
          options: { outputReferences: true }
        },
        {
          destination: "surfaces.css",
          format: "css/surface-primitives",
          filter: (token) => token.path[0] === "surface-tone"
        }
      ]
    },
    publicIosSwift: {
      transformGroup: "ios-swift",
      buildPath: "public/tokens/",
      files: [
        {
          destination: "Tokens.swift",
          format: "ios-swift/class.swift",
          options: {
            className: "PepperoniTokens"
          }
        }
      ]
    },
    publicAndroidXml: {
      transformGroup: "android",
      buildPath: "public/tokens/",
      files: [
        {
          destination: "colors.xml",
          format: "android/resources"
        }
      ]
    }
  }
};
