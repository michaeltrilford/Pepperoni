import * as sx from "@stylexjs/stylex";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Box } from "../components/Box";
import { mainSections, componentSections, featureSections } from "./homeSections";
import { styles } from "./HomeDoc.styles";

import type { ButtonVariant } from "../components/Button";

export interface HomeDocProps {
  actionVariant?: ButtonVariant;
}

export const HomeDoc = ({ actionVariant = "secondary" }: HomeDocProps) => {
  return (
    <div {...sx.props(styles.wrapper)} data-pepperoni-home="">
      <div {...sx.props(styles.root)}>
        {/* Hero / Main Section */}
        <section {...sx.props(styles.section)}>
          <div {...sx.props(styles.sectionHeader)}>
            <Heading level="h1" size="h1">
              Pepperoni 🍕
            </Heading>
            <Text size="l" variant="secondary">
              Pepperoni is a starting point for building scalable design systems with React. It demonstrates an approach
              to tokens, theming, component architecture, accessibility, and structured design system knowledge.
            </Text>
          </div>

          <div {...sx.props(styles.heroGrid)}>
            {mainSections.map((item, idx) => (
              <Card key={idx}>
                <Box flex direction="column" gap="500">
                  <Box flex direction="column" gap="200">
                    {item.tag && (
                      <div {...sx.props(styles.cardTag)}>
                        <Badge color={item.badgeVariant ?? "neutral"}>{item.tag}</Badge>
                      </div>
                    )}
                    <Heading level="h2" size="h4">
                      {item.heading}
                    </Heading>
                    <Text size="m" variant="secondary">
                      {item.body}
                    </Text>
                  </Box>
                  {item.link && (
                    <div {...sx.props(styles.cardAction)}>
                      <Button
                        variant={actionVariant}
                        size="m"
                        href={item.link.href}
                        target={item.link.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        {...sx.props(styles.fullWidthAction)}
                      >
                        {item.link.text} {actionVariant === "link" ? "→" : undefined}
                      </Button>
                    </div>
                  )}
                </Box>
              </Card>
            ))}
          </div>
        </section>

        {/* Component Sections Grid */}
        <section {...sx.props(styles.section)}>
          <div {...sx.props(styles.sectionHeader)}>
            <Heading level="h2" size="h3">
              Component Sections
            </Heading>
            <Text size="m" variant="secondary">
              Pepperoni components are grouped by functional product use rather than package internals.
            </Text>
          </div>

          <div {...sx.props(styles.componentGrid)}>
            {componentSections.map((item, idx) => (
              <Card key={idx} size="s">
                <Box flex direction="column" gap="400" justify="between" style={{ height: "100%" }}>
                  <Box flex direction="column" gap="200">
                    <Heading level="h3" size="h5">
                      {item.heading}
                    </Heading>
                    <Text size="s" variant="secondary">
                      {item.body}
                    </Text>
                  </Box>
                  {item.link && (
                    <div {...sx.props(styles.cardAction)}>
                      <Button
                        variant={actionVariant}
                        size="s"
                        href={item.link.href}
                        {...sx.props(styles.fullWidthAction)}
                      >
                        {item.link.text} {actionVariant === "link" ? "→" : undefined}
                      </Button>
                    </div>
                  )}
                </Box>
              </Card>
            ))}
          </div>
        </section>

        {/* Working with Pepperoni Feature Sections */}
        <section {...sx.props(styles.section)}>
          <div {...sx.props(styles.sectionHeader)}>
            <Heading level="h2" size="h3">
              Working with Pepperoni
            </Heading>
            <Text size="m" variant="secondary">
              Implementation reference, accessibility rules, design tokens, and testing patterns.
            </Text>
          </div>

          <div {...sx.props(styles.featureGrid)}>
            {featureSections.map((item, idx) => (
              <Card key={idx} size="s">
                <Box flex direction="column" gap="400">
                  <Box flex direction="column" gap="200">
                    <Heading level="h3" size="h5">
                      {item.heading}
                    </Heading>
                    <Text size="s" variant="secondary">
                      {item.body}
                    </Text>
                  </Box>
                  {item.link && (
                    <div {...sx.props(styles.cardAction)}>
                      <Button
                        variant={actionVariant}
                        size="s"
                        href={item.link.href}
                        target={item.link.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        {...sx.props(styles.fullWidthAction)}
                      >
                        {item.link.text} {actionVariant === "link" ? "→" : undefined}
                      </Button>
                    </div>
                  )}
                </Box>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
