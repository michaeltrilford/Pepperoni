import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  List: {
    title: "List",
    description: "List renders structured ordered or unordered items with token-based spacing, sizing, and compound List.Item elements.",
    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],
    usage: {
      list: [
        "Use List for structured bulleted (unordered) or numbered (ordered) content.",
        "Use List.Item for individual list items.",
        "Use appropriate gap and size tokens to match surrounding typography.",
      ],
    },
    accessibility: {
      designerList: [
        "Use ordered lists when item sequence or step order matters.",
        "Use unordered lists for collections where sequence is arbitrary.",
      ],
      engineerList: [
        "List automatically renders semantic `<ol>` or `<ul>` elements.",
        "Ensure direct children are List.Item (`<li>`) elements for valid HTML structure.",
      ],
    },
    anatomy: {
      image: "",
      list: [
        "Container: Semantic `<ul>` or `<ol>` element.",
        "Items: List.Item (`<li>`) child elements.",
      ],
    },
    variants: {
      items: [
        { key: "unordered", title: "Unordered", description: "Bullet list for non-sequential items.", image: "" },
        { key: "ordered", title: "Ordered", description: "Numbered list for sequential or prioritized steps.", image: "" },
      ],
    },
    stories: {
      items: [
        {
          key: "unordered",
          title: "Unordered",
          description: "Renders a standard bulleted list.",
          source: `<List style={{ maxWidth: "75ch" }}>
  <List.Item>San Marzano Tomatoes</List.Item>
  <List.Item>Buffalo Mozzarella</List.Item>
  <List.Item>Fresh Basil Leaves</List.Item>
</List>`,
        },
        {
          key: "ordered",
          title: "Ordered",
          description: "Renders a numbered list.",
          source: `<List type="ordered" gap="200" style={{ maxWidth: "75ch" }}>
  <List.Item>Proof pizza dough for 24 hours.</List.Item>
  <List.Item>Stretch and shape the crust.</List.Item>
  <List.Item>Bake at 450°C for 90 seconds.</List.Item>
</List>`,
        },
        {
          key: "sizes",
          title: "Sizes",
          description: "Compares Small, Medium, and Large list sizes.",
          source: `<div style={{ display: "flex", flexDirection: "column", gap: "var(--space-400)", maxWidth: "75ch" }}>
  <List size="s">
    <List.Item>Small list item</List.Item>
  </List>
  <List size="m">
    <List.Item>Medium standard item</List.Item>
  </List>
  <List size="l">
    <List.Item>Large list item</List.Item>
  </List>
</div>`,
        },
      ],
    },
    compositions: {
      description: "List can be framed inside Cards or used with Code chips.",
      items: [],
    },
    related: { items: [{ name: "Text", link: "" }, { name: "Card", link: "" }] },
    rules: [],
    behaviour: { list: ["Text color and spacing respond dynamically to design tokens."] },
    writing: { list: ["Keep list items parallel in phrasing and punctuation."] },
  },
};
