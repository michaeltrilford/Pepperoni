import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Box: {
    title: "Box",
    description: "Box is a neutral container that becomes a token-aware flex layout when requested.",
    hero: [], figma: [], storybook: [], github: [], website: [], guides: [],
    usage: { list: [
      "Use Box for local layout and grouping without adding visual presentation.",
      "Enable flex only when its children need flex layout.",
      "Choose semantic HTML when the grouping has document meaning.",
    ] },
    accessibility: {
      designerList: ["Use spacing and alignment to support a clear visual hierarchy."],
      engineerList: ["Box always renders a `div`.", "Use semantic HTML when the content requires it.", "Use layout props for presentation only."],
    },
    anatomy: { image: "", list: ["Container: A block-level div by default.", "Flex controls: Optional direction, gap, alignment, justification, and wrapping."] },
    variants: { items: [] },
    stories: { items: [
      { key: "default", title: "Default", description: "Shows the neutral block container.", source: `<Box>Content</Box>` },
      { key: "flex", title: "Flex layout", description: "Shows a vertical flex layout with token spacing.", source: `<Box flex direction="column" gap="300">...</Box>` },
      { key: "alignment", title: "Alignment", description: "Shows cross-axis and main-axis alignment.", source: `<Box flex align="center" justify="between" gap="300">...</Box>` },
    ] },
    compositions: { description: "Box composes with any component when local layout is needed.", items: [] },
    related: { items: [{ name: "Card", link: "" }, { name: "Stack", link: "" }] },
    rules: [], behaviour: { list: ["Box has no visual treatment and uses normal block layout unless flex is enabled."] },
    writing: { list: [] },
  },
};
