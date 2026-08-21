import * as sx from "@stylexjs/stylex";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Box } from "../../components/Box";
import { List } from "../../components/List";
import { Code } from "../../components/Code";
import { styles } from "./KnowledgeDoc.styles";

export const KnowledgeDoc = () => {
  return (
    <div {...sx.props(styles.wrapper)} data-knowledge-doc="">
      <div {...sx.props(styles.root)}>
        <Box flex gap="800" direction="column">
          <Box flex gap="500" direction="column">
            {/* Header */}
            <header>
              <div {...sx.props(styles.headerStack)}>
                <div {...sx.props(styles.sectionHeader)}>
                  <Heading size="h1" level="h1">
                    Knowledge Base 🧠
                  </Heading>
                  <Text size="l" variant="secondary">
                    A structured, machine-readable foundation for design systems. Generates portable agent skills,
                    verified component contracts, and cross-component composition recipes for developers and AI pair
                    programmers.
                  </Text>
                </div>

                <div {...sx.props(styles.headerAction)}>
                  <Button
                    href="./knowledge/component-manifest.json"
                    download="component-manifest.json"
                    onClick={() => {}}
                    rel="noreferrer"
                    target="_blank"
                    variant="secondary"
                    size="m"
                  >
                    Download Manifest
                  </Button>
                </div>
              </div>
            </header>

            {/* Section 1: Generated Component Manifest */}
            <section {...sx.props(styles.section)}>
              <Card size="m" surface="100" surfaceDirection="lift">
                <Box flex direction="column" gap="500">
                  <Box flex direction="column" gap="100">
                    <Heading size="h4" level="h2" weight={600}>
                      Generated Component Manifest
                    </Heading>
                    <Text size="m" variant="secondary">
                      <Code>component-manifest.json</Code> combines three sources for every component into a single
                      validated schema:
                    </Text>
                  </Box>

                  <Card size="s" surface="200" surfaceDirection="depth">
                    <List type="ordered" size="s" gap="100" style={{ maxWidth: "80ch" }}>
                      <List.Item>
                        <strong>Implementation Docgen</strong>: React TypeScript docgen extracted directly from
                        component code;
                      </List.Item>
                      <List.Item>
                        <strong>Authored Public Contract</strong>: Explicit API specifications from each component's{" "}
                        <Code>Api.ts</Code>; and
                      </List.Item>
                      <List.Item>
                        <strong>Usage Guidance</strong>: Accessibility, behaviour, and composition rules from each
                        component's <Code>Doc.ts</Code>.
                      </List.Item>
                    </List>
                  </Card>

                  <Text size="m" variant="secondary">
                    Storybook documentation and controls consume this generated manifest. Edit the component metadata
                    sources and run <Code>npm run build:manifest</Code>; do not edit the manifest directly.
                  </Text>

                  <Card surface="200" surfaceDirection="depth">
                    <Code.Block>
                      {`// component-manifest.json schema structure:
{
  "version": "1.0.0",
  "components": [
    {
      "displayName": "Button",
      "element": "button",
      "inherits": "ButtonHTMLAttributes<HTMLButtonElement>",
      "api": { "props": { "variant": { "type": "primary | secondary | tertiary | attention | link" } } },
      "doc": { "description": "...", "guidelines": [ ... ] }
    }
  ],
  "fragments": [ ... ]
}`}
                    </Code.Block>
                  </Card>
                </Box>
              </Card>
            </section>
          </Box>

          {/* Section 2: Agent Skill, Composition Fragments & MCP */}
          <section {...sx.props(styles.section)}>
            <div {...sx.props(styles.sectionHeader)}>
              <Heading size="h3" level="h2">
                Agent Ecosystem & Extensibility
              </Heading>
              <Text size="m" variant="secondary">
                Captures reusable component use cases as descriptions, selection guidance, composition rules,
                participating components, and framework-neutral JSON trees.
              </Text>
            </div>

            <div {...sx.props(styles.cardsGrid)}>
              {/* Card 1: Agent Skill */}
              <Card size="s" surface="100" surfaceDirection="lift">
                <Box flex direction="column" gap="400" justify="between" style={{ height: "100%" }}>
                  <Box flex direction="column" gap="200">
                    <Badge color="pepperoni">Skills</Badge>
                    <Heading level="h3" size="h4">
                      Using Pepperoni
                    </Heading>
                    <Text size="s" variant="secondary">
                      A self-contained, portable markdown guide <Code>SKILL.md</Code> that equips AI assistants with
                      verified component APIs, composition contracts, and prompt recipes to prevent hallucinations.
                    </Text>
                  </Box>
                  <div {...sx.props(styles.cardAction)}>
                    <Button
                      variant="secondary"
                      size="s"
                      href="./knowledge/skills/pepperoni-components/SKILL.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...sx.props(styles.fullWidthAction)}
                    >
                      View SKILL.md
                    </Button>
                  </div>
                </Box>
              </Card>

              {/* Card 2: Composition Fragments */}
              <Card size="s" surface="100" surfaceDirection="lift">
                <Box flex direction="column" gap="400" justify="between" style={{ height: "100%" }}>
                  <Box flex direction="column" gap="200">
                    <Badge color="green">Fragments</Badge>
                    <Heading level="h3" size="h4">
                      Bite-Sized Patterns
                    </Heading>
                    <Text size="s" variant="secondary">
                      Reusable multi-component recipes authored as structured JSON blueprints in{" "}
                      <Code>src/knowledge/fragments/</Code>, automatically compiled into <Code>SKILL.md</Code>.
                    </Text>
                  </Box>
                  <div {...sx.props(styles.cardAction)}>
                    <Button
                      variant="secondary"
                      size="s"
                      href="https://github.com/michaeltrilford/Pepperoni/tree/main/src/knowledge/fragments"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...sx.props(styles.fullWidthAction)}
                    >
                      Browse Fragments Repo
                    </Button>
                  </div>
                </Box>
              </Card>

              {/* Card 3: Model Context Protocol (MCP) */}
              <Card size="s" surface="100" surfaceDirection="lift">
                <Box flex direction="column" gap="400" justify="between" style={{ height: "100%" }}>
                  <Box flex direction="column" gap="200">
                    <Badge color="orange">MCP</Badge>
                    <Heading level="h3" size="h4">
                      Create an MCP
                    </Heading>
                    <Text size="s" variant="secondary">
                      Serve Pepperoni's manifest and skills through a Model Context Protocol (MCP) server to provide
                      live component lookups, schema validation, and layout composition tools inside Cursor, Claude, and
                      Antigravity.
                    </Text>
                  </Box>
                  <div {...sx.props(styles.cardAction)}>
                    <Button
                      variant="secondary"
                      size="s"
                      href="https://modelcontextprotocol.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...sx.props(styles.fullWidthAction)}
                    >
                      Learn MCP Integration
                    </Button>
                  </div>
                </Box>
              </Card>
            </div>
          </section>

          {/* Section 3: Distribution */}
          <section {...sx.props(styles.section)}>
            <Card size="m" surface="100" surfaceDirection="lift">
              <Box flex direction="column" gap="500">
                <Box flex direction="column" gap="100">
                  <Heading size="h4" level="h2" weight={600}>
                    Distribution
                  </Heading>
                  <Text size="m" variant="secondary">
                    The build publishes generated consumer artifacts to key distribution channels.
                  </Text>
                </Box>

                <Card size="s" surface="200" surfaceDirection="depth">
                  <List size="s" gap="100" style={{ maxWidth: "75ch" }}>
                    <List.Item>
                      <strong>public/knowledge</strong>: Available locally, or via Storybook and production at{" "}
                      <Code>https://pepperoni.fit/knowledge/component-manifest.json</Code> and{" "}
                      <Code>/knowledge/skills/...</Code>
                    </List.Item>
                    <List.Item>
                      <strong>dist/knowledge</strong>: For build distribution and bundle consumption.
                    </List.Item>
                    <List.Item>
                      <strong>Knowledge Repository</strong>: Set up a build or CI script to copy generated artifacts to
                      a dedicated repository for MCP server consumption and direct distribution to users.
                    </List.Item>
                  </List>
                </Card>
              </Box>
            </Card>
          </section>
        </Box>
      </div>
    </div>
  );
};
