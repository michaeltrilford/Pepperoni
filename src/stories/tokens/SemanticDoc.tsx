import React, { useEffect, useState } from "react";
import * as sx from "@stylexjs/stylex";
import tokensCss from "../../tokens/tokens.css?raw";
import { SurfaceRing } from "./components/SurfaceRing";
import { surfaceVisuals } from "./surfaceVisuals";
import { Table } from "../../components/Table";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Card } from "@/components/Card";
import { styles } from "./SemanticDoc.styles";

const runtimeTokenValues = new Map<string, string[]>();
const declarationPattern = /(--[\w-]+)\s*:\s*([^;]+);/g;

for (const match of tokensCss.matchAll(declarationPattern)) {
  const [, name, value] = match;
  const values = runtimeTokenValues.get(name) ?? [];
  if (!values.includes(value.trim())) values.push(value.trim());
  runtimeTokenValues.set(name, values);
}

const componentPrefixes = [
  "--form-",
  "--button-",
  "--icon-",
  "--badge-",
  "--table-",
  "--card-",
];
const humanizeTokenName = (name: string) =>
  name
    .replace(/^--/, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const describeToken = (name: string) => {
  const label = humanizeTokenName(name);
  if (name.startsWith("--form-"))
    return `${label.replace("Form ", "")} used by form controls.`;
  if (name.startsWith("--button-"))
    return `${label.replace("Button ", "")} used by Button.`;
  if (name.startsWith("--icon-"))
    return `${label.replace("Icon ", "")} used by Icon.`;
  if (name.startsWith("--badge-"))
    return `${label.replace("Badge ", "")} used by Badge.`;
  if (name.startsWith("--table-"))
    return `${label.replace("Table ", "")} used by Table.`;
  if (name.startsWith("--card-"))
    return `${label.replace("Card ", "")} used by Card.`;
  return `${label} semantic token.`;
};

const tokens = Array.from(runtimeTokenValues, ([name, values]) => ({
  name,
  $value: values.join(" / "),
  $type: /color|background|border|surface/.test(name) ? "color" : undefined,
  $description: describeToken(name),
}));

interface SemanticDocProps {
  kind?: "semantic" | "component";
}

export const SemanticDoc: React.FC<SemanticDocProps> = ({
  kind = "semantic",
}) => {
  const [resolvedValues, setResolvedValues] = useState<Record<string, string>>(
    {},
  );
  const [valueMode, setValueMode] = useState<"mapping" | "resolved">("mapping");
  const displayedTokens = tokens.filter(({ name }) =>
    kind === "component"
      ? componentPrefixes.some((prefix) => name.startsWith(prefix))
      : !componentPrefixes.some((prefix) => name.startsWith(prefix)),
  );
  const title = kind === "component" ? "Component" : "Semantic";
  const description =
    kind === "component"
      ? "Component-level mappings built from shared semantic and brand tokens."
      : "Theme-aware mappings authored in tokens.css. Values update with the Storybook Light and Dark theme.";

  useEffect(() => {
    const root = document.documentElement;
    const resolveValues = () => {
      const computedStyles = getComputedStyle(root);
      setResolvedValues(
        Object.fromEntries(
          tokens.map(({ name }) => [
            name,
            computedStyles.getPropertyValue(name).trim(),
          ]),
        ),
      );
    };

    resolveValues();
    const observer = new MutationObserver(resolveValues);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div {...sx.props(styles.root)}>
      <header {...sx.props(styles.header)}>
        <div {...sx.props(styles.headerStack)}>
          <div>
            <Heading size="h2" level="h1" weight={700}>
              {title}
            </Heading>
            <Text size="l" variant="secondary">
              {description}
            </Text>
          </div>

          <Button
            href="./tokens/tokens.css"
            download="tokens.css"
            onClick={() => {}}
            rel="noreferrer"
            target="_blank"
            variant="secondary"
            size="s"
          >
            tokens.css
          </Button>
        </div>
      </header>

      <Card size="m" surface="100" surfaceDirection="lift" padding={false}>
        <Table
          variant="rows"
          usage="card"
          size="m"
          aria-label={`${title} token mappings`}
          layout="fixed"
          minWidth="70rem"
          overflow="auto"
          columns={[{ width: "30rem" }, { ratio: 1 }, { ratio: 1 }]}
        >
          <thead>
            <tr>
              <Table.HeaderCell>Token</Table.HeaderCell>
              <Table.HeaderCell
                onAction={() =>
                  setValueMode(valueMode === "mapping" ? "resolved" : "mapping")
                }
                actionLabel={
                  valueMode === "mapping"
                    ? "Show computed values"
                    : "Show token names"
                }
              >
                {valueMode === "mapping" ? "Token Name" : "Computed Value"}
                <Icon name="counter-clockwise-triangle-circle" />
              </Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </tr>
          </thead>
          <tbody>
            {displayedTokens.map((token) => (
              <tr key={token.name}>
                <Table.Cell ellipsis title={token.name}>
                  <Text size="s" weight={600} {...sx.props(styles.tokenName)}>
                    {token.name}
                  </Text>
                </Table.Cell>
                {valueMode === "mapping" ? (
                  <Table.Cell ellipsis title={String(token.$value)}>
                    <Text
                      size="s"
                      variant="secondary"
                      {...sx.props(styles.secondaryCell)}
                    >
                      {String(token.$value)}
                    </Text>
                  </Table.Cell>
                ) : (
                  <Table.Cell
                    ellipsis
                    title={resolvedValues[token.name]}
                    {...sx.props(styles.resolvedCell)}
                  >
                    <Text size="s" {...sx.props(styles.resolvedValue)}>
                      {token.$type === "color" && (
                        <span
                          aria-hidden="true"
                          {...sx.props(styles.colorSwatch)}
                          style={{ backgroundColor: `var(${token.name})` }}
                        />
                      )}
                      <span {...sx.props(styles.truncatedValue)}>
                        {resolvedValues[token.name]}
                      </span>
                    </Text>
                  </Table.Cell>
                )}
                <Table.Cell clamp={2}>
                  <Text
                    size="s"
                    variant="secondary"
                    {...sx.props(styles.secondaryCell)}
                  >
                    {token.$description}
                  </Text>
                </Table.Cell>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {kind === "semantic" && (
        <section
          {...sx.props(styles.surface)}
          aria-labelledby="surface-effects-title"
        >
          <Heading
            id="surface-effects-title"
            size="h4"
            level="h2"
            weight={700}
            {...sx.props(styles.surfaceTitle)}
          >
            Surface Effects
          </Heading>

          <div {...sx.props(styles.visualGrid)}>
            {surfaceVisuals.map((visual) => (
              <article key={visual.mode} {...sx.props(styles.visualCard)}>
                <SurfaceRing
                  visual={visual}
                  showEffects={visual.mode !== "FLAT"}
                />
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
