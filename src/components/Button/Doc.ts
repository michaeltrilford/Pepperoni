import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Button: {
    title: "Button",
    description:
      "Button triggers an action with primary, secondary, or tertiary visual emphasis.",
    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],
    usage: {
      list: [
        "Use primary for the main action in a context, secondary or tertiary for supporting actions, and link for inline navigation.",
        "Pass href for navigation or downloads; Button then renders a native anchor. Use the default button element for an in-page action.",
        "Match size to the surrounding interface and use an action-oriented label.",
        "Use iconOnly for a square icon action and provide its action name with aria-label.",
      ],
    },
    accessibility: {
      designerList: [
        "Ensure button labels clearly describe the result of the action.",
        "Do not make colour, icons, or position the only way to understand an action.",
      ],
      engineerList: [
        "Give every Button an accessible name.",
        "Give icon-only Buttons an explicit accessible name.",
        "Choose `submit`, `reset`, or the default `button` type deliberately.",
        "Use native `disabled` for unavailable button actions.",
        "Disabled links automatically lose navigation and focus.",
        "Expose state with the relevant native or ARIA props.",
      ],
    },
    anatomy: {
      image: "",
      list: [
        "Container: Background, border, radius, and focus treatment.",
        "Label: Action text.",
      ],
    },
    variants: {
      items: [
        {
          key: "primary",
          title: "Primary",
          description: "Highest-emphasis primary brand action.",
          image: "",
        },
        {
          key: "secondary",
          title: "Secondary",
          description: "Outlined supporting action.",
          image: "",
        },
        {
          key: "tertiary",
          title: "Tertiary",
          description: "Borderless low-emphasis action.",
          image: "",
        },
        {
          key: "attention",
          title: "Attention",
          description: "High-emphasis destructive or critical action.",
          image: "",
        },
        {
          key: "link",
          title: "Link",
          description: "Inline navigational action rendered with underline styling.",
          image: "",
        },
      ],
    },
    stories: {
      items: [
        {
          key: "primary",
          title: "Primary",
          description: "Shows the highest-emphasis Button treatment.",
        },
        {
          key: "secondary",
          title: "Secondary",
          description: "Shows the outlined supporting Button treatment.",
        },
        {
          key: "tertiary",
          title: "Tertiary",
          description: "Shows the borderless low-emphasis Button treatment.",
        },
        {
          key: "attention",
          title: "Attention",
          description: "Shows the destructive or critical attention Button treatment.",
        },
        {
          key: "link",
          title: "Link",
          description: "Shows the inline navigational link Button treatment with href support.",
        },
        {
          key: "variants",
          title: "Variants",
          description: "Displays all Button variants (Primary, Secondary, Tertiary, Attention, Link) side by side.",
          source: `<Box flex gap="300" align="center" wrap="wrap">
  <Button variant="primary">Order Pizza</Button>
  <Button variant="secondary">Add Extra Cheese</Button>
  <Button variant="tertiary">Customize Toppings</Button>
  <Button variant="attention">Cancel Order</Button>
  <Button variant="link" href="https://pepperoni.pizza" target="_blank">View Full Menu</Button>
</Box>`,
        },
        {
          key: "icon-only",
          title: "Icon Only",
          description:
            "Uses iconOnly to create a square action. Provide aria-label because the icon does not supply the Button's accessible name.",
        },
        {
          key: "text-input-attachment",
          title: "Usage: TextInput Attachment",
          description:
            "Shows leading and trailing Button attachments. Match usage='text-input-before' to TextInput before and usage='text-input-after' to TextInput after; Button owns the joined radius, border overlap, inherited sizing, and focus treatment.",
          source: `<TextInput
  label="Domain"
  after={<Button usage="text-input-after">Verify</Button>}
/>`,
        },
        {
          key: "disabled-link",
          title: "Disabled link",
          description:
            "Shows how a linked action becomes non-navigable, unfocusable, and aria-disabled when disabled.",
        },
      ],
    },
    compositions: {
      description:
        "Button supports an explicit usage contract for attached TextInput actions.",
      items: [
        {
          key: "text-input-action",
          name: "TextInput attached action",
          description:
            "Place Button in the matching TextInput before or after slot and use the corresponding text-input-before or text-input-after usage value.",
          image: "",
        },
      ],
    },
    related: {
      items: [
        { name: "TextInput", link: "" },
        { name: "Icon", link: "" },
      ],
    },
    rules: [
      {
        heading: "Attached TextInput Actions",
        description:
          "Keep slot placement and Button usage paired so ownership remains explicit.",
        doContent: [
          {
            description:
              "Pair TextInput after with Button usage='text-input-after'.",
            image: "",
          },
          {
            description:
              "Pair TextInput before with Button usage='text-input-before'.",
            image: "",
          },
        ],
        dontContent: [
          {
            description:
              "Do not recreate attached radii, overlap, inherited sizing, or focus treatment with custom classes.",
            image: "",
          },
        ],
      },
    ],
    behaviour: {
      list: [
        "Keyboard focus uses a brand focus indicator.",
        "Disabled Buttons do not trigger actions.",
        "Button usage emits data-text-input-slot-button only while the attached composition is active.",
      ],
    },
    writing: { list: ["Begin labels with a clear verb."] },
  },
};
