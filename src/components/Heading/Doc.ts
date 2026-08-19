import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Heading: {
    title: "Heading",
    description: "Heading provides token-based size, weight, and document-level typography.",
    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],
    usage: {
      list: [
        "Use a heading when the content introduces or labels a meaningful section of the page.",
        "Choose visual size separately from document level.",
        "Use the default h2 only when it fits the document outline.",
      ],
    },
    accessibility: {
      designerList: [
        "Maintain a clear, logical heading hierarchy for users who scan by headings.",
        "Do not choose a heading level only because its visual size looks right; use size when the visual treatment needs to differ.",
      ],
      engineerList: [
        "Match `level` to the section hierarchy.",
        "Use `size` for visual hierarchy.",
        "Use `level=\"none\"` only for non-structural text.",
        "Do not use Heading solely for styling.",
      ],
    },
    anatomy: { image: "", list: ["Content: Heading text.", "Style: Visual size and weight token pairing.", "Level: Native heading element or non-semantic presentation."] },
    variants: { items: [] },
    stories: {
      items: [
        { key: "default", title: "Default", description: "Shows a page title with a semantic level.", source: `<Heading level="h1">Payroll overview</Heading>` },
        { key: "sizes", title: "Sizes", description: "Compares every visual heading size using one consistent document level.", source: `<Heading level="h2" size="l">Payment details</Heading>` },
        { key: "levels", title: "Levels", description: "Shows visual size, document level, and non-semantic presentation working independently.", source: `<Heading level="h3" size="l">Payment schedule</Heading>` },
        { key: "weight", title: "Weight", description: "Compares the available heading font weights.", source: `<Heading level="h2" weight="bold">Payroll summary</Heading>` },
      ],
    },
    compositions: { description: "Heading labels page and component sections.", items: [] },
    related: { items: [{ name: "Text", link: "" }] },
    rules: [],
    behaviour: { list: ["Heading colour uses the theme-aware heading token."] },
    writing: { list: ["Use concise labels that describe the section that follows."] },
  },
};
