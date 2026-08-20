import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Card: {
    title: "Card",
    description: "Card groups related content on a theme-aware surface with size-based radius and padding.",
    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],
    usage: {
      list: [
        "Use Card to group related content on a semantic surface.",
        "Choose size and surface according to the surrounding hierarchy.",
        "Remove padding only for intentional full-bleed content.",
      ],
    },
    accessibility: {
      designerList: ["Choose a semantic heading and content structure inside the card."],
      engineerList: ["Add semantics when the Card has a specific purpose.", "Do not make an entire Card interactive by default.", "Ensure interactive Card content remains keyboard accessible."],
    },
    anatomy: { image: "", list: ["Container: Surface, border, radius, and padding.", "Content: Related card content supplied by the consumer."] },
    variants: { items: [] },
    stories: {
      items: [
        { key: "size", title: "Size", description: "Compares small, medium, and large cards with optional padding.", source: `<Card size="m"><Text>Card content</Text></Card>` },
        {
          key: "table-composition",
          title: "Composition: Full-bleed Table",
          description: "Pairs Card padding={false} with Table usage='card'. Card provides the clipped surface and edge-to-edge layout; Table removes its own final row divider at the card edge.",
          source: `<Card padding={false}>
  <Table usage="card" aria-label="Recent payments">...</Table>
</Card>`,
        },
        { key: "nested", title: "Nested cards", description: "Uses progressively stronger surfaces to group related workspace content.", source: `<Card surface="100"><Card surface="200"><Card surface="300">...</Card></Card></Card>` },
        { key: "nested-inset", title: "One-level inset", description: "Uses one inset surface to separate settings within a parent Card.", source: `<Card surface="100"><Card surface="200" surfaceDirection="depth">...</Card></Card>` },
        {
          key: "nested-lifted",
          title: "Nested lifted cards",
          description: "Shows 3-tier progressive elevation hierarchy using surface='100', '200', and '300' all with surfaceDirection='lift'.",
          source: `<Card size="l" surface="100" surfaceDirection="lift">
  <Card size="m" surface="200" surfaceDirection="lift">
    <Card size="s" surface="300" surfaceDirection="lift">
      ...
    </Card>
  </Card>
</Card>`,
        },
        {
          key: "nested-depth",
          title: "Nested depth cards",
          description: "Shows 3-tier progressive inset depth well hierarchy using surface='100', '200', and '300' all with surfaceDirection='depth'.",
          source: `<Card size="l" surface="100" surfaceDirection="depth">
  <Card size="m" surface="200" surfaceDirection="depth">
    <Card size="s" surface="300" surfaceDirection="depth">
      ...
    </Card>
  </Card>
</Card>`,
        },
      ],
    },
    compositions: {
      description: "Card composes with content, actions, forms, and full-bleed children through explicit ownership contracts.",
      items: [
        {
          key: "full-bleed-table",
          name: "Full-bleed rows Table",
          description: "Use Card padding={false} and Table usage='card'. Do not recreate the final-divider treatment from Card with descendant selectors.",
          image: "",
        },
      ],
    },
    related: { items: [{ name: "Text", link: "" }, { name: "Button", link: "" }] },
    rules: [
      {
        heading: "Full-bleed Table",
        description: "Keep surface layout and table boundary styling owned by their respective components.",
        doContent: [
          { description: "Pair Card padding={false} with Table usage='card' for an edge-to-edge rows table.", image: "" },
        ],
        dontContent: [
          { description: "Do not make Card inspect Table descendants or manually remove the final cell borders.", image: "" },
        ],
      },
    ],
    behaviour: {
      list: [
        "Card is a layout container and has no interaction by default.",
        "Card padding={false} removes internal spacing but does not inspect or restyle child components.",
      ],
    },
    writing: { list: ["Keep card content focused on one related topic or task."] },
  },
};
