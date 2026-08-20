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
    variants: {
      items: [
        { key: "neutral", title: "Neutral", description: "Default subtle grey badge for neutral metadata or counts.", image: "" },
        { key: "positive", title: "Positive", description: "Green badge indicating success, completed, or active states.", image: "" },
        { key: "caution", title: "Caution", description: "Orange badge indicating warning, pending, or in-progress states.", image: "" },
        { key: "attention", title: "Attention", description: "Red badge indicating critical status, high urgency, or errors.", image: "" },
      ],
    },
    stories: {
      items: [
        { key: "small", title: "Small", description: "Shows the compact Badge size." },
        { key: "medium", title: "Medium", description: "Shows the default medium Badge size." },
        { key: "large", title: "Large", description: "Shows the larger Badge size." },
        {
          key: "variants",
          title: "Variants",
          description: "Demonstrates neutral, positive, caution, and attention semantic status badges.",
          source: `<Badge variant="neutral">Neutral</Badge>
<Badge variant="positive">Ready for Oven</Badge>
<Badge variant="caution">Oven Preheating</Badge>
<Badge variant="attention">High Heat Warning</Badge>`,
        },
        {
          key: "colors",
          title: "Colors",
          description: "Demonstrates named brand color scales (pepperoni, green, orange, red, grey) and custom token values.",
          source: `<Badge color="pepperoni">Pepperoni Slice</Badge>
<Badge color="green">Fresh Basil</Badge>
<Badge color="orange">Cheddar Crust</Badge>
<Badge color="red">Chili Flakes</Badge>
<Badge color="grey">Cast Iron</Badge>
<Badge color="var(--pepperoni-500)">Custom Token</Badge>`,
        },
        { key: "text-input-slot", title: "TextInput slot", description: "Shows the explicit compact slot spacing and matched sizing required when Badge appears inside TextInput.", source: `<TextInput
  label="Pizza Special"
  insideBefore={<TextInput.InsideSlot density="compact"><Badge variant="attention">HOT</Badge></TextInput.InsideSlot>}
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
