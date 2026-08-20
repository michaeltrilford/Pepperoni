export interface SectionItem {
  heading: string;
  body: string;
  tag?: string;
  badgeVariant?: "grey" | "green" | "orange" | "red" | "pepperoni";
  link?: {
    href: string;
    text: string;
  };
}

export const mainSections: SectionItem[] = [
  {
    heading: "Components",
    body: "Explore documentation, token foundations, and accessible React components designed for high-performance pizza interfaces.",
    tag: "Core Library",
    badgeVariant: "pepperoni",
    link: {
      href: "https://github.com/michaeltrilford/Pepperoni",
      text: "Explore repository",
    },
  },
  {
    heading: "Design Tokens",
    body: "Browse the multi-platform design tokens including a default brand palette, achromatic surfaces, spacing, and stroke metrics.",
    tag: "Architecture",
    badgeVariant: "green",
    link: {
      href: "/?path=/story/design-tokens--brand-tokens",
      text: "View design tokens",
    },
  },
  {
    heading: "Component Knowledge",
    body: "Machine-readable component manifest, AI agent skills, and composition fragments published directly for automated workflows.",
    tag: "AI & Manifest",
    badgeVariant: "orange",
    link: {
      href: "/knowledge/component-manifest.json",
      text: "Download manifest",
    },
  },
];

export const componentSections: SectionItem[] = [
  {
    heading: "Actions",
    body: "Primary actions, secondary outlines, tertiary ghost buttons, attention alerts, and inline navigation links with attached input contracts.",
    tag: "Button",
    badgeVariant: "pepperoni",
    link: {
      href: "/?path=/docs/components-button--docs",
      text: "View Button",
    },
  },
  {
    heading: "Forms & Inputs",
    body: "Accessible single-line inputs with automatic label associations, field error/warning messaging, and inside affix slots.",
    tag: "TextInput, Field, Label",
    badgeVariant: "green",
    link: {
      href: "/?path=/docs/components-textinput--docs",
      text: "View Forms",
    },
  },
  {
    heading: "Data & Tables",
    body: "Data tables featuring custom column ratios, text alignment, ellipsis truncation, line clamping, and embedded cell controls.",
    tag: "Table",
    badgeVariant: "orange",
    link: {
      href: "/?path=/docs/components-table--docs",
      text: "View Table",
    },
  },
  {
    heading: "Surfaces & Depth",
    body: "Structural card surfaces supporting progressive 3-tier elevation lifts (100–300) and multi-value recessed depth wells.",
    tag: "Card",
    badgeVariant: "grey",
    link: {
      href: "/?path=/docs/components-card--docs",
      text: "View Card",
    },
  },
  {
    heading: "Feedback & Badges",
    body: "Status badges with semantic variants (neutral, positive, caution, attention) and color options.",
    tag: "Badge",
    badgeVariant: "red",
    link: {
      href: "/?path=/docs/components-badge--docs",
      text: "View Badge",
    },
  },
  {
    heading: "Typography",
    body: "Headings (h1–h6) and body text paired with proportional modular scales and semantic color variants.",
    tag: "Heading, Text",
    badgeVariant: "grey",
    link: {
      href: "/?path=/docs/components-heading--docs",
      text: "View Typography",
    },
  },
  {
    heading: "Layout & Spacing",
    body: "Layout primitive with token-based direction, gap spacing (000–800), alignment, justify, and wrapping.",
    tag: "Box",
    badgeVariant: "grey",
    link: {
      href: "/?path=/docs/components-box--docs",
      text: "View Box",
    },
  },
  {
    heading: "Icon",
    body: "SVG icon component with accessible labeling, semantic sizing (s, m, l), and theme-aware styling.",
    tag: "Icon",
    badgeVariant: "grey",
    link: {
      href: "/?path=/docs/components-icon--docs",
      text: "View Icon",
    },
  },
];

export const featureSections: SectionItem[] = [
  {
    heading: "Brand Foundations",
    body: "Achromatic neutral surfaces, cured mahogany brand tokens, and theme custom properties.",
    link: {
      href: "/?path=/story/design-tokens--brand-tokens",
      text: "Explore foundations",
    },
  },
  {
    heading: "Accessibility",
    body: "WCAG AAA contrast, automatic label associations, ARIA roles, and visible keyboard focus rings.",
    link: {
      href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      text: "WCAG Guidelines",
    },
  },
  {
    heading: "Testing & Storybook",
    body: "Deterministic component tests executed through Storybook and Vitest for continuous verification.",
    link: {
      href: "https://storybook.js.org/docs/writing-tests",
      text: "Learn more",
    },
  },
  {
    heading: "Architecture",
    body: "StyleX-compiled styling, multi-platform token generation for Web, iOS, Android, and Figma.",
    link: {
      href: "https://github.com/michaeltrilford/Pepperoni",
      text: "Learn more",
    },
  },
];
