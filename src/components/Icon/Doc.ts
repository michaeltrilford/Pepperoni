import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Icon: {
    title: "Icon",
    description:
      "Icon renders a named Pepperoni SVG icon at a consistent token-based size and semantic colour.",
    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],
    usage: {
      list: [
        "Select icons through the typed name prop and match size to the surrounding component.",
        "Leave label unset for decorative icons.",
        "Label only meaningful standalone icons.",
      ],
    },
    accessibility: {
      designerList: ["Pair unfamiliar icons with visible text."],
      engineerList: [
        "Leave decorative Icons hidden from assistive technology.",
        "Label meaningful standalone Icons.",
        "Name an icon-only Button on Button, not Icon.",
      ],
    },
    anatomy: {
      image: "",
      list: [
        "Container: Controls dimensions and semantic colour.",
        "SVG: Named vector artwork.",
      ],
    },
    variants: { items: [] },
    stories: {
      items: [
        {
          key: "search",
          title: "Search",
          description: "Displays the Search icon.",
        },
        {
          key: "counter-clockwise-triangle-circle",
          title: "Counter-clockwise Triangle Circle",
          description: "Displays the Counter-clockwise Triangle Circle icon.",
        },
        {
          key: "labelled",
          title: "Labelled",
          description:
            "Shows a meaningful standalone icon exposed with an accessible image name.",
        },
        {
          key: "size",
          title: "Size",
          description: "Compares Small, Medium, and Large icons.",
          source: `<Box flex align="center" gap="300">
  <Icon name="search" size="s" />
  <Icon name="search" size="m" />
  <Icon name="search" size="l" />
</Box>`,
        },
      ],
    },
    compositions: {
      description: "Icon can be placed inside inputs and actions.",
      items: [],
    },
    related: {
      items: [
        { name: "TextInput", link: "" },
        { name: "Button", link: "" },
      ],
    },
    rules: [],
    behaviour: {
      list: ["Icon inherits its colour from the icon semantic token."],
    },
    writing: { list: [] },
  },
};
