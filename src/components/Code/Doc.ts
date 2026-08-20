import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Code: {
    title: "Code",
    description: "Code renders monospace text as inline chips or preformatted multiline blocks, with automatic contextual sizing.",
    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],
    usage: {
      list: [
        "Use Code for file paths, variable names, inline code snippets, and commands.",
        "Use variant='block' or Code.Block for multiline preformatted code blocks.",
        "Leave size='inherit' (default) for inline code to scale seamlessly with parent Text, Heading, or List components.",
      ],
    },
    accessibility: {
      designerList: [
        "Ensure inline code background and borders maintain clear contrast against card surfaces.",
      ],
      engineerList: [
        "Code renders semantic `<code>` for inline snippets and `<pre><code>` for multiline blocks.",
        "Provide appropriate aria-labels or descriptions for complex code samples when needed.",
      ],
    },
    anatomy: {
      image: "",
      list: [
        "Inline: `<code>` element styled with theme-aware background, border, and monospace typography.",
        "Block: `<pre>` container encasing a transparent `<code>` element with horizontal scroll support.",
      ],
    },
    variants: {
      items: [
        { key: "inline", title: "Inline", description: "Inline chip styled relative to surrounding text.", image: "" },
        { key: "block", title: "Block", description: "Multiline preformatted code block with horizontal scroll.", image: "" },
      ],
    },
    stories: {
      items: [
        {
          key: "inline",
          title: "Inline",
          description: "Renders an inline code chip inside body copy.",
          source: `<Text>Run <Code>npm run build:manifest</Code> to regenerate the component manifest.</Text>`,
        },
        {
          key: "block",
          title: "Block",
          description: "Renders a multiline preformatted block.",
          source: `<Code.Block>{\`// Example component API configuration:
export const api = {
  name: "Button",
  element: "button",
  props: {
    variant: { type: "primary | secondary" }
  }
};\`}</Code.Block>`,
        },
        {
          key: "contextualSizing",
          title: "Contextual Sizing",
          description: "Demonstrates how inline code automatically scales with parent typography.",
          source: `<div style={{ display: "flex", flexDirection: "column", gap: "var(--space-400)" }}>
  <Text size="s">Small text: <Code>npm test</Code> inherits small scale.</Text>
  <Text size="m">Medium text: <Code>npm test</Code> inherits medium scale.</Text>
  <Text size="l">Large text: <Code>npm test</Code> inherits large scale.</Text>
</div>`,
        },
      ],
    },
    compositions: {
      description: "Code is used inside Text, List.Item, and framed inside Card components.",
      items: [],
    },
    related: { items: [{ name: "Text", link: "" }, { name: "List", link: "" }, { name: "Card", link: "" }] },
    rules: [],
    behaviour: { list: ["Inline code dynamically inherits and scales with parent font size."] },
    writing: { list: ["Format command line instructions and property keys in Code."] },
  },
};
