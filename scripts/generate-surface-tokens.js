import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";

const sourcePath = new URL("../tokens/surface.json", import.meta.url);
const outputPath = new URL("../generated/tokens/surface.json", import.meta.url);
const recipe = JSON.parse(await readFile(sourcePath, "utf8"));

function formatOklch({ l, c, h }) {
  return `oklch(${Number(l)}% ${Number(c)} ${Number(h)})`;
}

const output = {
  "surface-tone": Object.fromEntries(recipe.scale.map(({ name, ...color }) => [
    name,
    { $value: formatOklch(color), $type: "color" }
  ]))
};

await mkdir(new URL("../generated/tokens/", import.meta.url), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`);
console.log(`✓ Surface tokens generated: ${outputPath.pathname}`);

// Sync canonical src/tokens/tokens.css to public/tokens/tokens.css
const srcTokensCss = new URL("../src/tokens/tokens.css", import.meta.url);
const publicTokensDir = new URL("../public/tokens/", import.meta.url);
const publicTokensCss = new URL("../public/tokens/tokens.css", import.meta.url);

await mkdir(publicTokensDir, { recursive: true });
await copyFile(srcTokensCss, publicTokensCss);
console.log(`✓ Synced tokens.css -> ${publicTokensCss.pathname}`);
