import React, { useState } from "react";
import * as sx from "@stylexjs/stylex";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Heading } from "../../components/Heading";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import baseTokens from "../../../tokens/base.json";
import { brandSnippets } from "./content/brandSnippets";
import { styles } from "./BrandDoc.styles";
import { Box } from "@/components/Box";

export const BrandDoc: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<
    "css" | "ios" | "android" | "figma-css" | "figma-ios"
  >("css");

  const colorGroups = [
    { title: "Grey", key: "grey", prefix: "--grey" },
    { title: "Turquoise", key: "turquoise", prefix: "--turquoise" },
    { title: "Green", key: "green", prefix: "--green" },
    { title: "Orange", key: "orange", prefix: "--orange" },
    { title: "Red", key: "red", prefix: "--red" },
  ];

  const spaces = baseTokens.space || {};
  const radii = baseTokens.radius || {};
  const strokes = baseTokens.stroke || {};
  const fontSizes = baseTokens["font-size"] || {};
  const lineHeights = baseTokens["line-height"] || {};
  const fontWeights = baseTokens["font-weight"] || {};
  const letterSpacings = baseTokens["letter-spacing"] || {};
  const speeds = baseTokens.speed || {};

  const platformFiles = {
    css: { file: "brand.css", label: "brand.css" },
    ios: { file: "Tokens.swift", label: "Tokens.swift" },
    android: { file: "colors.xml", label: "colors.xml" },
    "figma-css": { file: "figma-css.json", label: "figma-css.json" },
    "figma-ios": { file: "figma-ios.json", label: "figma-ios.json" },
  };

  const currentFile = platformFiles[activePlatform];

  const downloadCurrentFile = () => {
    const link = document.createElement("a");
    link.href = `./tokens/${currentFile.file}`;
    link.download = currentFile.file;
    link.click();
  };

  return (
    <div {...sx.props(styles.root)}>
      <style>{`
        @keyframes motionPulse {
          0% { transform: scale(0.75); opacity: 0.4; }
          100% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>

      <Box flex direction="column" gap="600">
        <header>
          <Box>
            <Heading size="h2" level="h1" weight={700}>
              Brand
            </Heading>
            <Text size="l" variant="secondary">
              Auto-generated multi-platform brand tokens defined in W3C format
              (OKLCH colours, spacing, radius, typography, stroke, speed).
            </Text>
          </Box>
        </header>

        {/* --- MULTI-PLATFORM EXPORT CODE INSPECTOR & DOWNLOAD LINKS --- */}
        <Card size="m" surface="100" surfaceDirection="lift">
          <Box flex direction="column" gap="400">
            <Box flex direction="column" gap="100">
              <Heading size="h4" level="h2" weight={600}>
                Multi-Platform Token Artifacts
              </Heading>
              <Text size="s" variant="secondary">
                Style Dictionary compiles Web, iOS, and Android artifacts plus
                dedicated DTCG imports for the Figma web and mobile workspaces.
              </Text>
            </Box>
            {/* Platform selector and artifact download */}
            <Box flex direction="row" gap="100">
              <select
                aria-label="Token artifact platform"
                value={activePlatform}
                onChange={(event) =>
                  setActivePlatform(event.target.value as typeof activePlatform)
                }
                {...sx.props(styles.platformSelect)}
              >
                <option value="css">Web (CSS)</option>
                <option value="ios">iOS (Swift)</option>
                <option value="android">Android (XML)</option>
                <option value="figma-css">Figma Web (JSON)</option>
                <option value="figma-ios">Figma iOS (JSON)</option>
              </select>
              <Button
                size="s"
                variant="secondary"
                onClick={downloadCurrentFile}
                className={sx.props(styles.downloadButton).className}
              >
                Download selected
              </Button>
            </Box>

            {/* Code Snippet Box */}
            <pre {...sx.props(styles.code)}>
              {activePlatform === "css" && brandSnippets.css}
              {activePlatform === "ios" && brandSnippets.ios}
              {activePlatform === "android" && brandSnippets.android}
              {activePlatform === "figma-css" && brandSnippets.figmaCss}
              {activePlatform === "figma-ios" && brandSnippets.figmaIos}
            </pre>
          </Box>
        </Card>

        {/* --- COLOUR PALETTES --- */}
        <section>
          <Box flex direction="column" gap="500">
            <Heading size="h4" level="h2" weight={600}>
              Colour Scales
            </Heading>

            {/* Black & White */}
            <Box flex direction="column" gap="400">
              <Heading size="h5" level="h3" weight={600}>
                Black & White
              </Heading>
              <div {...sx.props(styles.baseGrid)}>
                <div {...sx.props(styles.tokenCard)}>
                  <div
                    {...sx.props(styles.swatch)}
                    style={{ backgroundColor: baseTokens.black.$value }}
                  />
                  <div {...sx.props(styles.tokenMeta)}>
                    <Text size="s" weight={600} {...sx.props(styles.tokenName)}>
                      --black
                    </Text>
                    <Text
                      size="s"
                      variant="secondary"
                      {...sx.props(styles.smallMeta)}
                    >
                      {baseTokens.black.$value}
                    </Text>
                  </div>
                </div>
                <div {...sx.props(styles.tokenCard)}>
                  <div
                    {...sx.props(styles.whiteSwatch)}
                    style={{ backgroundColor: baseTokens.white.$value }}
                  />
                  <div {...sx.props(styles.tokenMeta)}>
                    <Text size="s" weight={600} {...sx.props(styles.tokenName)}>
                      --white
                    </Text>
                    <Text
                      size="s"
                      variant="secondary"
                      {...sx.props(styles.smallMeta)}
                    >
                      {baseTokens.white.$value}
                    </Text>
                  </div>
                </div>
              </div>
            </Box>

            {/* Colour Scale Grids */}
            {colorGroups.map((group) => {
              const groupObj = (baseTokens as any)[group.key] || {};
              return (
                <Box flex direction="column" gap="400" key={group.key}>
                  <Heading size="h5" level="h3" weight={600}>
                    {group.title}
                  </Heading>
                  <div {...sx.props(styles.colorGrid)}>
                    {Object.entries(groupObj).map(
                      ([step, item]: [string, any]) => (
                        <div key={step} {...sx.props(styles.tokenCard)}>
                          <div
                            {...sx.props(styles.colorSwatch)}
                            style={{ backgroundColor: item.$value }}
                          />
                          <div {...sx.props(styles.compactTokenMeta)}>
                            <Text
                              size="s"
                              weight={600}
                              {...sx.props(styles.tokenName)}
                            >
                              {group.prefix}-{step}
                            </Text>
                            <Text
                              size="s"
                              variant="secondary"
                              {...sx.props(styles.smallMeta)}
                            >
                              {item.$value}
                            </Text>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </Box>
              );
            })}
          </Box>
        </section>

        {/* --- SPACING TOKENS --- */}
        <section>
          <Box flex direction="column" gap="500">
            <Heading size="h4" level="h2" weight={600}>
              Space
            </Heading>
            <Card surface="100" surfaceDirection="lift" padding={false}>
              <Table
                variant="rows"
                usage="card"
                size="m"
                aria-label="Space tokens"
                layout="fixed"
                minWidth="40rem"
                overflow="auto"
                columns={[{ width: "20rem" }, { ratio: 1 }, { ratio: 1 }]}
              >
                <thead>
                  <tr>
                    <Table.HeaderCell>Token</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                    <Table.HeaderCell align="end">Preview</Table.HeaderCell>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(spaces).map(([key, item]: [string, any]) => {
                    return (
                      <tr key={key}>
                        <Table.Cell>
                          <Text size="s" weight={600}>
                            --space-{key}
                          </Text>
                        </Table.Cell>
                        <Table.Cell>
                          <Text size="s" variant="secondary">
                            {item.$value}
                          </Text>
                        </Table.Cell>
                        <Table.Cell align="end" style={{ height: item.$value }}>
                          <div
                            {...sx.props(styles.spacingBar)}
                            style={{
                              width: item.$value === "0" ? "2px" : item.$value,
                            }}
                          />
                        </Table.Cell>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card>

            <div {...sx.props(styles.typographyDetailsStack)}>
              <Box flex direction="column" gap="300">
                <Heading size="h6" level="h3" weight={600}>
                  Font Weight
                </Heading>
                <Card surface="100" surfaceDirection="lift" padding={false}>
                  <Table usage="card" size="m" aria-label="Brand font weights">
                    <thead>
                      <tr>
                        <Table.HeaderCell>Token</Table.HeaderCell>
                        <Table.HeaderCell align="end">Preview</Table.HeaderCell>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(fontWeights).map(
                        ([key, item]: [string, any]) => (
                          <tr key={key}>
                            <Table.Cell>
                              <Text size="s">
                                --font-weight-{key} ({item.$value})
                              </Text>
                            </Table.Cell>
                            <Table.Cell
                              align="end"
                              style={{ fontWeight: item.$value }}
                            >
                              Pepperoni
                            </Table.Cell>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </Table>
                </Card>
              </Box>

              <Box flex direction="column" gap="300">
                <Heading size="h6" level="h3" weight={600}>
                  Letter Spacing
                </Heading>
                <Card surface="100" surfaceDirection="lift" padding={false}>
                  <Table
                    usage="card"
                    size="m"
                    aria-label="Brand letter spacing"
                  >
                    <thead>
                      <tr>
                        <Table.HeaderCell>Token</Table.HeaderCell>
                        <Table.HeaderCell align="end">Preview</Table.HeaderCell>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(letterSpacings).map(
                        ([key, item]: [string, any]) => (
                          <tr key={key}>
                            <Table.Cell>
                              <Text size="s">
                                --letter-spacing-{key} ({item.$value})
                              </Text>
                            </Table.Cell>
                            <Table.Cell
                              align="end"
                              style={{ letterSpacing: item.$value }}
                            >
                              Pepperoni
                            </Table.Cell>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </Table>
                </Card>
              </Box>
            </div>
          </Box>
        </section>

        {/* --- BORDER RADIUS TOKENS --- */}
        <section>
          <Box flex direction="column" gap="500">
            <Heading size="h4" level="h2" weight={600}>
              Radius
            </Heading>
            <div {...sx.props(styles.radiusGrid)}>
              {Object.entries(radii).map(([key, item]: [string, any]) => (
                <div key={key} {...sx.props(styles.radiusCard)}>
                  <div
                    {...sx.props(styles.radiusPreview)}
                    style={{ borderRadius: item.$value }}
                  />
                  <Text size="s" weight={600} {...sx.props(styles.radiusName)}>
                    --radius-{key}
                  </Text>
                  <Text
                    size="s"
                    variant="secondary"
                    {...sx.props(styles.radiusValue)}
                  >
                    {item.$value}
                  </Text>
                </div>
              ))}
            </div>
          </Box>
        </section>

        {/* --- TYPOGRAPHY SCALE --- */}
        <section>
          <Box flex direction="column" gap="500">
            <Heading size="h4" level="h2" weight={600}>
              Typography Scale & Line Heights
            </Heading>
            <Card surface="100" surfaceDirection="lift" padding={false}>
              <Table
                variant="rows"
                usage="card"
                size="m"
                aria-label="Brand typography scale"
                layout="fixed"
                minWidth="40rem"
                overflow="auto"
                columns={[{ width: "20rem" }, { ratio: 1 }, { ratio: 1 }]}
              >
                <thead>
                  <tr>
                    <Table.HeaderCell>Font Size Token</Table.HeaderCell>
                    <Table.HeaderCell>Line Height Token</Table.HeaderCell>
                    <Table.HeaderCell align="end">Preview</Table.HeaderCell>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(fontSizes).map(
                    ([key, item]: [string, any]) => {
                      const lhItem = (lineHeights as any)[key];
                      return (
                        <tr key={key}>
                          <Table.Cell>
                            <Text size="s" weight={600}>
                              --font-size-{key} ({item.$value})
                            </Text>
                          </Table.Cell>
                          <Table.Cell>
                            <Text size="s" variant="secondary">
                              {lhItem
                                ? `--line-height-${key} (${lhItem.$value})`
                                : "-"}
                            </Text>
                          </Table.Cell>
                          <Table.Cell
                            align="end"
                            style={{
                              fontSize: item.$value,
                              lineHeight: lhItem ? lhItem.$value : 1.2,
                            }}
                          >
                            Aa
                          </Table.Cell>
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </Table>
            </Card>
          </Box>
        </section>

        {/* --- STROKE SECTION --- */}
        <section>
          <Box flex direction="column" gap="500">
            <Heading size="h4" level="h2" weight={600}>
              Stroke
            </Heading>

            <Card surface="100" surfaceDirection="lift" padding={false}>
              <Table
                variant="rows"
                usage="card"
                size="m"
                aria-label="Stroke"
                layout="fixed"
                minWidth="80rem"
                overflow="auto"
                columns={[{ ratio: 1 }, { ratio: 1 }, { ratio: 1 }]}
              >
                <thead>
                  <tr>
                    <Table.HeaderCell>Token</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                    <Table.HeaderCell>Preview</Table.HeaderCell>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(strokes).map(([key, item]: [string, any]) => {
                    return (
                      <tr key={key}>
                        <Table.Cell>
                          <Text size="s" weight={600}>
                            --stroke-{key}
                          </Text>
                        </Table.Cell>
                        <Table.Cell>
                          <Text size="s" variant="secondary">
                            {item.$value}
                          </Text>
                        </Table.Cell>
                        <Table.Cell
                          {...sx.props(styles.preview)}
                          style={{ height: item.$value }}
                        >
                          <div
                            {...sx.props(styles.strokeBar)}
                            style={{ height: item.$value }}
                          />
                        </Table.Cell>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </Box>
        </section>

        {/* --- SPEED SECTION --- */}
        <section>
          <Box flex direction="column" gap="500">
            <Heading size="h4" level="h2" weight={600}>
              Speed
            </Heading>
            <div {...sx.props(styles.speedGrid)}>
              {Object.entries(speeds).map(([key, item]: [string, any]) => (
                <div key={key} {...sx.props(styles.speedCard)}>
                  <Text size="s" weight={600} {...sx.props(styles.speedName)}>
                    --speed-{key}
                  </Text>
                  <Text
                    size="s"
                    variant="secondary"
                    {...sx.props(styles.speedValue)}
                  >
                    {item.$value}
                  </Text>
                  <div {...sx.props(styles.pulseFrame)}>
                    <div
                      {...sx.props(styles.pulse)}
                      style={{
                        animation: `motionPulse ${item.$value} infinite alternate ease-in-out`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Box>
        </section>
      </Box>
    </div>
  );
};
