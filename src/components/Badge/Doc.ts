import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Badge: {
    title: "Badge",
    description:
      "Badge presents a compact status, category, or count using token-based sizing and theme-aware colours.",
    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],
    usage: {
      list: [
        "Use Badge for a short, non-interactive status, category, or count.",
        "Match its size to the surrounding component.",
        "Use another component when people need to take an action.",
      ],
    },
    accessibility: {
      designerList: [
        "Do not rely on badge colour alone to communicate meaning.",
        "Include the status, category, or count in visible text whenever possible.",
      ],
      engineerList: [
        "Keep badge text available to assistive technology.",
        "Do not use Badge as the only source of meaning.",
        "Add an accessible name only when visible text is incomplete.",
        "Use a live region only for changes that need announcing.",
      ],
    },
    anatomy: {
      image: "",
      list: ["Container: Theme-aware background and radius.", "Label: Short status or category text."],
    },
    variants: { items: [] },
    stories: {
      items: [
        { key: "small", title: "Small", description: "Shows the compact Badge size." },
        { key: "medium", title: "Medium", description: "Shows the default medium Badge size." },
        { key: "large", title: "Large", description: "Shows the larger Badge size." },
        { key: "text-input-slot", title: "TextInput slot", description: "Shows the explicit compact slot spacing and matched sizing required when Badge appears inside TextInput.", source: `<TextInput
  label="Payment status"
  insideAfter={<TextInput.InsideSlot density="compact"><Badge>Paid</Badge></TextInput.InsideSlot>}
/>` },
      ],
    },
    compositions: { description: "Badge can be composed with form controls and content. TextInput requires an explicit compact InsideSlot wrapper.", items: [] },
    related: {
      items: [
        { name: "TextInput", link: "" },
        { name: "Text", link: "" },
      ],
    },
    rules: [],
    behaviour: { list: ["Badge is non-interactive and sizes to its content."] },
    writing: { list: ["Keep badge labels concise."] },
  },
};
