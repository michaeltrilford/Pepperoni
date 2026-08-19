import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Text: {
    title: "Text",
    description: "Text renders body copy with token-based size, weight, and semantic colour variants.",
    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],
    usage: {
      list: [
        "Use Text for body copy and supporting messages.",
        "Choose variants according to meaning.",
        "Use Heading for structural section titles.",
      ],
    },
    accessibility: {
      designerList: [
        "Ensure semantic text colours retain sufficient contrast.",
        "Never use colour, weight, or size as the only way to communicate meaning.",
      ],
      engineerList: [
        "Use Text only for paragraph content.",
        "Use semantic HTML for headings and lists.",
        "Connect helper text with `aria-describedby`.",
        "Use live regions only when changes need announcing.",
      ],
    },
    anatomy: { image: "", list: ["Text content: Body copy or message.", "Style: Size, weight, and semantic colour."] },
    variants: {
      items: [
        { key: "default", title: "Default", description: "Primary body text.", image: "" },
        { key: "secondary", title: "Secondary", description: "Supporting body text.", image: "" },
        { key: "positive", title: "Positive", description: "Successful feedback text.", image: "" },
        { key: "warning", title: "Warning", description: "Warning feedback text.", image: "" },
        { key: "attention", title: "Attention", description: "Error or attention text.", image: "" },
      ],
    },
    stories: {
      items: [
        { key: "default", title: "Default", description: "Displays default body text." },
        { key: "size", title: "Size", description: "Compares Small, Medium, and Large text.", source: `<Box flex direction="column" gap="300">
  <Text size="s">Small supporting text</Text>
  <Text size="m">Medium body text</Text>
  <Text size="l">Large introductory text</Text>
</Box>` },
        { key: "variant", title: "Variant", description: "Compares semantic text variants.", source: `<Text variant="attention">The payment reference is invalid.</Text>` },
        { key: "weight", title: "Weight", description: "Compares available font weights.", source: `<Text weight="bold">Total payment amount</Text>` },
      ],
    },
    compositions: { description: "Text is used for Field helper and validation messages.", items: [] },
    related: { items: [{ name: "Field", link: "" }] },
    rules: [],
    behaviour: { list: ["Text colour responds to the active theme."] },
    writing: { list: ["Use concise, direct language."] },
  },
};
