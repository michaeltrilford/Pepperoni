import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Label: {
    title: "Label",
    description:
      "Label provides accessible, standardized text identification for form controls, supporting size scaling, required/optional tags, and visually hidden modes.",

    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],

    usage: {
      list: [
        "Use Label to give a form control a clear accessible name.",
        "Prefer visible labels and match their size to the control.",
        "Use the stories below for hidden, optional, and required treatments.",
      ],
    },

    accessibility: {
      designerList: [
        "Position labels directly above or alongside input elements consistently.",
        "Ensure label text is clear, concise, and unambiguously identifies the requested input.",
      ],
      engineerList: [
        "Match `htmlFor` to the control's `id`.",
        "Use `hideLabel` only when visual context is clear.",
        "Treat `required` and `optional` as visual indicators.",
        "Set native `required` on the form control.",
        "Use `aria-describedby` for supporting messages.",
      ],
    },

    anatomy: {
      image: "",
      list: [
        "Label Text: Descriptive label text identifying the field.",
        "Status Indicator: Optional tag '(Optional)' or required asterisk indicator '*'.",
      ],
    },

    variants: {
      items: [
        {
          key: "small",
          title: "Small (S)",
          description: "Compact label scale for dense data forms or small inputs.",
          image: "",
        },
        {
          key: "medium",
          title: "Medium (M)",
          description: "Standard default label scale for standard form fields.",
          image: "",
        },
        {
          key: "large",
          title: "Large (L)",
          description: "Prominent label scale for hero search or prominent inputs.",
          image: "",
        },
      ],
    },

    stories: {
      items: [
        {
          key: "default",
          title: "Default Label",
          description:
            "Standard form label providing accessible text identification. Automatically focuses the associated control when clicked via htmlFor.",
        },
        {
          key: "size",
          title: "Size",
          description: "Compares Small (12px), Medium (14px), and Large (16px) Label scales in one example.",
          source: `<Box flex direction="column" gap="300">
  <Label htmlFor="small" label="Small label" size="s" />
  <Label htmlFor="medium" label="Medium label" size="m" />
  <Label htmlFor="large" label="Large label" size="l" />
</Box>`,
        },
        {
          key: "optional-label",
          title: "Optional Label",
          description:
            "Appends a subtle (Optional) tag. Preferred over required asterisks for reducing form visual complexity.",
        },
        {
          key: "required-label",
          title: "Required Label",
          description:
            "Appends a required asterisk indicator to denote mandatory fields when explicit required marking is necessary.",
        },
        {
          key: "visually-hidden",
          title: "Visually Hidden Label",
          description:
            "Visually hides the label using CSS clip utilities while keeping full text accessible to screen readers.",
        },
      ],
    },

    compositions: {
      description: "Demonstrates standalone Label usage paired with custom controls.",
      items: [
        {
          key: "checkbox-label",
          name: "Checkbox Group Label",
          description: "Label paired with standalone custom checkbox group.",
          image: "",
        },
      ],
    },

    related: {
      items: [
        {
          name: "TextInput",
          link: "",
        },
        {
          name: "Field",
          link: "",
        },
      ],
    },

    rules: [
      {
        heading: "Label Accessibility",
        description: "Ensure all form controls have an accessible name.",
        doContent: [
          { description: "Always connect Label to input using htmlFor or hide visually with hideLabel.", image: "" },
        ],
        dontContent: [{ description: "Never leave inputs without labels or screen reader text.", image: "" }],
      },
    ],

    behaviour: {
      list: ["Clicking the Label focuses the linked input control."],
    },

    writing: {
      list: [
        "Use short, concise nouns or noun phrases for label titles.",
        "Avoid using punctuation (colons) at the end of labels.",
      ],
    },
  },
};
