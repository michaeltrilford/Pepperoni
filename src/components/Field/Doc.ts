import type { MuiDocs } from '../../types/guidelines';

export const muiDocs: MuiDocs = {
  Field: {
    title: "Field",
    description: "Field acts as a composable form element wrapper, bundling Label, child form elements, and validation or helper messages with consistent vertical spacing.",

    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],

    usage: {
      list: [
        "Use Field to visually and semantically group form elements with accessible labels, helper text, and validation error messages.",
        "Omit TextInput label and id so Field can supply them automatically.",
        "Use the stories below for validation and other form-control compositions.",
      ],
    },

    accessibility: {
      designerList: [
        "Ensure helper text and validation messages maintain a minimum colour contrast ratio of 4.5:1 against the background.",
        "Do not rely solely on colour to communicate validation errors; ensure descriptive error text is provided.",
        "Use a real `fieldset` and `legend` when one label describes multiple related controls; Field renders a `div` and a single label target.",
      ],
      engineerList: [
        "Omit TextInput `label` and `id` inside Field.",
        "Field context supplies TextInput relationships automatically.",
        "Give every additional control its own accessible name.",
        "Use a render function for controls without Field context support.",
        "Set native `required` on the child control.",
        "Treat Field as a wrapper, not a form control.",
      ],
    },

    anatomy: {
      image: "",
      list: [
        "Label Container: Top section containing label text, (Optional) tag, or required indicator.",
        "Control Region: Middle section containing the wrapped form element (e.g. TextInput).",
        "Message Area: Bottom section rendering helper text or state-driven validation feedback.",
      ],
    },

    variants: {
      items: [
        {
          key: "default",
          title: "Default Field",
          description: "Standard field wrapper with neutral helper text.",
          image: "",
        },
        {
          key: "success",
          title: "Success State Field",
          description: "Field wrapper rendering positive validation messaging in green.",
          image: "",
        },
        {
          key: "warning",
          title: "Warning State Field",
          description: "Field wrapper rendering caution messaging in warning colour.",
          image: "",
        },
        {
          key: "error",
          title: "Error State Field",
          description: "Field wrapper rendering error messaging in red caution colour.",
          image: "",
        },
      ],
    },

    stories: {
      items: [
        {
          key: "empty-default",
          title: "Empty Default Field",
          description: "General-purpose form field wrapper that bundles labels, helper text, and form element slots into a consistent vertical layout.",
        },
        {
          key: "empty-with-optional",
          title: "Empty Field with Optional Tag",
          description: "Appends an explicit (Optional) tag to the field label. Preferred over mandatory asterisks for non-required form elements.",
        },
        {
          key: "empty-with-required",
          title: "Empty Field with Required Indicator",
          description: "Appends a required asterisk indicator to mandatory form element labels.",
        },
        {
          key: "empty-error-message",
          title: "Empty Field with Error Message",
          description: "Renders contextual validation error messages in red directly beneath the form element slot.",
        },
        {
          key: "composed-default",
          title: "Composed with TextInput",
          description: "Grouped field composition where Field labels the first TextInput and the second TextInput retains its own visually hidden label. Both controls receive the shared helper-message relationship.",
          source: `<Field label="Payment amount" message="Enter the amount to pay.">
  <TextInput inputMode="decimal" />
</Field>`,
        },
        {
          key: "composed-success-validation",
          title: "Composed Success State",
          description: "Synchronizes positive validation feedback (variant='success') across both the Field wrapper and nested TextInput element.",
          source: `<Field label="Promo code" variant="success" message="Promo code applied.">
  <TextInput variant="success" defaultValue="PEPPERONI2026" />
</Field>`,
        },
        {
          key: "composed-warning-validation",
          title: "Composed Warning State",
          description: "Synchronizes non-blocking caution messaging (variant='warning') across the Field helper message and nested TextInput element.",
          source: `<Field label="Password" variant="warning" message="Add a number or symbol.">
  <TextInput type="password" variant="warning" />
</Field>`,
        },
        {
          key: "composed-error-validation",
          title: "Composed Error State",
          description: "Synchronizes actionable error guidance (variant='error') across the Field error text and nested TextInput element.",
          source: `<Field label="Phone number" variant="error" message="Enter a valid 10-digit number.">
  <TextInput variant="error" required />
</Field>`,
        }
      ],
    },

    compositions: {
      description: "Demonstrates how Field wraps various input controls in real-world form panels.",
      items: [
        {
          key: "account-creation-form",
          name: "Account Details Fieldset",
          description: "Multiple Field components stacked vertically for email, password, and optional feedback.",
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
          name: "Label",
          link: "",
        },
      ],
    },

    rules: [
      {
        heading: "State Synchronization",
        description: "Keep validation states consistent between Field and nested form element.",
        doContent: [{ description: "Match the variant prop on Field and form element during validation states.", image: "" }],
        dontContent: [{ description: "Avoid displaying an error message on Field without setting the form element state.", image: "" }],
      },
    ],

    behaviour: {
      list: [
        "Vertically stacks label, form element, and message area.",
        "Adjusts message text colour dynamically according to the variant prop.",
        "Required takes precedence if optional and required are both supplied, preventing contradictory label indicators.",
      ],
    },

    writing: {
      list: [
        "Write helper messages in sentence case.",
        "Keep error messages direct, clear, and focused on how the user can fix the input.",
      ],
    },
  },
};
