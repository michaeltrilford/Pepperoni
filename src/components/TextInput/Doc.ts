import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  TextInput: {
    title: "TextInput",
    description:
      "Use TextInput for single-line data entry. It pairs a native input with an accessible label and supports validation, affixes, attached actions, and embedded contexts without replacing native input behaviour.",

    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],

    usage: {
      list: [
        "Use TextInput for a single line of editable text; choose a more suitable control for longer responses or constrained choices.",
        "Provide a visible label by default and use the Medium size for standard form layouts.",
        "Match type, inputMode, and autoComplete to the value being collected.",
        "Use the stories below to choose validation, slot, alignment, and embedded composition patterns.",
      ],
    },

    accessibility: {
      designerList: [
        "Ensure visible label text or screen-reader accessible label text is provided for every TextInput.",
        "Maintain high contrast focus indicators and distinct validation state colours (positive, warning, caution).",
      ],
      engineerList: [
        "Provide a meaningful `label`.",
        "TextInput automatically connects the label and input.",
        "Use `hideLabel` only when the visual context is clear.",
        "Inside Field, omit `label` and `id` from TextInput.",
        "Field context automatically supplies the control id and message relationships.",
        "Pass a custom `id` only for an external integration or ARIA relationship.",
        "Use native `required` for validation; `optional` changes the label only.",
        "Set `name` when the value must be included in form submission.",
        "Choose native input props that match the expected value and interaction.",
        "Preserve native keyboard behaviour, focus rings, and tab order.",
      ],
    },

    anatomy: {
      image: "",
      list: [
        "Label / Header: Accessible text identifier for the input element.",
        "Input Container / Wrapper: Interactive visual boundary holding input text, focus rings, and border styling.",
        "InsideSlot: Explicit text or compact spacing wrapper for content within the input boundary.",
        "Outside Slots (Before / After): Attached controls positioned outside the input boundary.",
        "Validation State: Highlights success, warning, or error states with semantic token colours.",
      ],
    },

    variants: {
      items: [
        {
          key: "small",
          title: "Small (S)",
          description: "Compact scale for dense tables, sidebars, and space-constrained forms.",
          image: "",
        },
        {
          key: "medium",
          title: "Medium (M)",
          description: "Standard default scale for standard form layouts and user input.",
          image: "",
        },
        {
          key: "large",
          title: "Large (L)",
          description: "Spacious scale for hero search bars, key entry fields, or touch-heavy interfaces.",
          image: "",
        },
        {
          key: "success",
          title: "Success Variant",
          description: "Positive state indicating valid input entry or successful verification.",
          image: "",
        },
        {
          key: "warning",
          title: "Warning Variant",
          description: "Attention state drawing notice to non-blocking input cautions.",
          image: "",
        },
        {
          key: "error",
          title: "Error Variant",
          description: "Caution state indicating invalid data entry requiring user resolution.",
          image: "",
        },
      ],
    },

    stories: {
      items: [
        {
          key: "with-label",
          title: "Label",
          description:
            "Standard text field layout paired with a visible accessible label above the input. Recommended for all primary form inputs to ensure readability and WCAG compliance.",
        },
        {
          key: "automatic-label-connection",
          title: "Accessibility: Automatic Label Connection",
          description:
            "Shows what TextInput handles when label is provided: it generates an id, connects the label with htmlFor, gives the input an accessible name, and lets selecting the label move focus to the input. No manual id is needed for standard use.",
        },
        {
          key: "field-error-relationship",
          title: "Accessibility: Field Error Relationship",
          description:
            "Shows the Field composition engineers should use for validation messaging. When TextInput omits label and id, it automatically uses Field's label target and receives aria-describedby, aria-errormessage, and aria-invalid from context.",
          source: `<Field
  label="Kitchen Order Ticket"
  variant="error"
  message="Enter an order ticket containing 6 to 12 letters or numbers."
>
  <TextInput variant="error" defaultValue="A-1" />
</Field>`,
        },
        {
          key: "visually-hidden-label",
          title: "Hidden Label",
          description:
            "Visually hides the label while preserving its accessible name. Ideal for compact search bars or header input fields where visual context is obvious.",
        },
        {
          key: "optional",
          title: "Optional",
          description:
            "Identifies a non-mandatory field with an (Optional) label indicator. Use this when most fields in the form are required; the optional prop changes the label only and does not alter native validation.",
        },
        {
          key: "size",
          title: "Size",
          description: "Compares Small (32px), Medium (40px), and Large (48px) TextInput scales in one example.",
          source: `<Box flex direction="column" gap="300">
  <TextInput size="s" label="Pizza Table Number — Small" placeholder="e.g. Table 14" />
  <TextInput size="m" label="Pizza Table Number — Medium" placeholder="e.g. Table 14" />
  <TextInput size="l" label="Pizza Table Number — Large" placeholder="e.g. Table 14" />
</Box>`,
        },
        {
          key: "variant-success",
          title: "Success",
          description:
            "Positive validation state with green border styling (--green-500). Use when input has passed inline validation (e.g. promo code verified or username available).",
        },
        {
          key: "variant-warning",
          title: "Warning",
          description:
            "Caution state with orange border styling (--orange-500). Use to highlight non-blocking soft warnings (e.g. storage capacity at 85% or password strength warning).",
        },
        {
          key: "variant-error",
          title: "Error",
          description:
            "Critical error state with red border styling (--red-500). Use when input data is invalid and prevents form submission until corrected.",
        },
        {
          key: "inside-slot-density",
          title: "Inside Slot Density",
          description:
            "Compares the two explicit inside-slot spacing contracts. Use density='text' for typographic affixes such as '$' or 'AUD'. Use density='compact' for Icons and Badges. Always wrap insideBefore and insideAfter content in TextInput.InsideSlot; density describes spacing, not the child component type.",
          source: `<TextInput
  label="Pizza Price"
  type="text"
  inputMode="decimal"
  align="end"
  insideBefore={<TextInput.InsideSlot density="text"><Text>$</Text></TextInput.InsideSlot>}
  insideAfter={<TextInput.InsideSlot density="text"><Text>AUD</Text></TextInput.InsideSlot>}
  placeholder="0.00"
/>`,
        },
        {
          key: "inside-slots-before",
          title: "Inside Slot: Before",
          description:
            "Places compact Icon content before editable text with TextInput.InsideSlot density='compact'. Use for search, filter, or other visual field indicators.",
          source: `<TextInput
  label="Search Pizzas"
  insideBefore={<TextInput.InsideSlot density="compact"><Icon name="search" /></TextInput.InsideSlot>}
  placeholder="Search pizzas..."
/>`,
        },
        {
          key: "inside-slots-after",
          title: "Inside Slot: After",
          description:
            "Places compact Icon content after editable text with TextInput.InsideSlot density='compact' and compares all three input sizes.",
          source: `<TextInput
  label="Filter Toppings"
  insideAfter={<TextInput.InsideSlot density="compact"><Icon name="search" /></TextInput.InsideSlot>}
  placeholder="Filter toppings..."
/>`,
        },
        {
          key: "inside-slots-badge",
          title: "Inside Slot: Badge",
          description:
            "Demonstrates leading and trailing Badges using TextInput.InsideSlot density='compact' at Small, Medium, and Large sizes.",
          source: `<TextInput
  label="Pizza Price"
  insideBefore={<TextInput.InsideSlot density="compact"><Badge>USD</Badge></TextInput.InsideSlot>}
  placeholder="0.00"
/>`,
        },
        {
          key: "outside-slots-before",
          title: "Outside Slot: Before",
          description:
            "Attaches an action before the input. Pair the before slot with Button usage='text-input-before'; TextInput removes its leading radius while Button owns the matching joined edge, border overlap, sizing, and focus treatment.",
        },
        {
          key: "outside-slots-after",
          title: "Outside Slot: After",
          description:
            "Attaches an action after the input. Pair the after slot with Button usage='text-input-after'; TextInput removes its trailing radius while Button owns the matching joined edge, border overlap, sizing, and focus treatment.",
        },
        {
          key: "align-right-numbers",
          title: "Aligned: End",
          description:
            "Uses align='end' for quantitative values people compare or total, such as amounts, balances, rates, and quantities. Keep identifiers such as codes, account numbers, and telephone numbers start-aligned. Currency and unit affixes use TextInput.InsideSlot density='text'.",
          source: `<TextInput
  label="Pizza Subtotal"
  align="end"
  inputMode="decimal"
  defaultValue="24.50"
  insideBefore={<TextInput.InsideSlot density="text"><Text>$</Text></TextInput.InsideSlot>}
  insideAfter={<TextInput.InsideSlot density="text"><Text>AUD</Text></TextInput.InsideSlot>}
/>`,
        },
        {
          key: "input-mode",
          title: "Input Mode",
          description:
            "Matches native input semantics and virtual keyboard hints to the expected value. Use decimal for amounts, numeric for whole-number codes, email for email addresses, and tel for telephone numbers. inputMode changes the suggested keyboard; it does not validate, restrict, or align the value. Reserve align='end' for amounts, totals, and other quantitative values.",
          source: `<Box flex direction="column" gap="300">
  <TextInput label="Pizza Total Price" type="text" inputMode="decimal" align="end" placeholder="0.00" />
  <TextInput label="Pizza Pickup PIN" type="text" inputMode="numeric" autoComplete="one-time-code" />
  <TextInput label="Customer Order Email" type="email" inputMode="email" autoComplete="email" />
  <TextInput label="Pizza Courier Mobile" type="tel" inputMode="tel" autoComplete="tel" />
</Box>`,
        },
        {
          key: "table-cell-embedding",
          title: "Usage: Table Cell",
          description:
            "Composes TextInput with Table.HeaderCell and Table.Cell for inline editing. usage='table' inherits the Table size and applies the seamless grid-cell treatment. Customise columns for each density: the final Amount column uses 16rem at Small, 21rem at Medium, and 24rem at Large.",
          source: `const size = "m";
const amountColumnWidths = { s: "16rem", m: "21rem", l: "24rem" };

<Table
  size={size}
  variant="grid"
  aria-label="Editable payment line item"
  columns={[
    { ratio: 1 },
    { ratio: 2 },
    { width: amountColumnWidths[size] },
  ]}
>
  <thead>
    <tr>
      <Table.HeaderCell>Payment</Table.HeaderCell>
      <Table.HeaderCell>Reference</Table.HeaderCell>
      <Table.HeaderCell align="end">Amount</Table.HeaderCell>
    </tr>
  </thead>
  <tbody>
    <tr>
      <Table.Cell>
        <TextInput
          usage="table"
          label="Payment"
          hideLabel
          defaultValue="Supplier payment"
        />
      </Table.Cell>
      <Table.Cell>
        <TextInput
          usage="table"
          label="Reference"
          hideLabel
          defaultValue="INV-1042"
        />
      </Table.Cell>
      <Table.Cell>
        <TextInput
          usage="table"
          label="Amount"
          hideLabel
          align="end"
          type="text"
          inputMode="decimal"
          defaultValue="1,250.00"
          insideBefore={
            <TextInput.InsideSlot density="text">
              <Text variant="secondary">$</Text>
            </TextInput.InsideSlot>
          }
        />
      </Table.Cell>
    </tr>
  </tbody>
</Table>`,
        },
      ],
    },

    compositions: {
      description: "Showcases real-world UI scenarios and slot combinations for TextInput.",
      items: [
        {
          key: "search-bar",
          name: "Global Search Bar",
          description:
            "TextInput composed with insideBefore search icon and insideAfter clear button for fast content filtering.",
          image: "",
        },
        {
          key: "currency-input",
          name: "Currency & Financial Entry",
          description: "Right-aligned TextInput with prefix '$' and suffix currency tag for financial applications.",
          image: "",
        },
      ],
    },

    related: {
      items: [
        {
          name: "Field",
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
        heading: "Input Format: Match the Expected Value",
        description: "Choose input settings that support the value's format without changing its meaning.",
        doContent: [
          {
            description: "Use decimal for amounts and numeric for whole-number codes.",
            image: "",
          },
          {
            description: "Use email or tel for the corresponding contact details.",
            image: "",
          },
        ],
        dontContent: [
          {
            description: "Do not use number for codes, account numbers, or values that may contain leading zeroes.",
            image: "",
          },
          {
            description: "Do not rely on inputMode to format or validate the entered value.",
            image: "",
          },
        ],
      },
      {
        heading: "End Alignment: Number / Quantity",
        description:
          "Use align='end' only for numbers and quantities people need to compare. TextInput automatically uses tabular numerals so repeated values align consistently.",
        doContent: [
          {
            description: "End-align amounts, balances, totals, rates, and quantities.",
            image: "",
          },
          {
            description: "Keep related values consistently aligned in tables and comparison layouts.",
            image: "",
          },
        ],
        dontContent: [
          {
            description: "Do not end-align codes, references, account numbers, or telephone numbers.",
            image: "",
          },
          {
            description: "Do not end-align general text merely because it contains digits.",
            image: "",
          },
        ],
      },
      {
        heading: "Form Layout Direction",
        description: "Organise form inputs in clean vertical flows.",
        doContent: [
          {
            description: "Stack text inputs vertically in standard form flows for scannability.",
            image: "",
          },
        ],
        dontContent: [
          {
            description: "Avoid complex multi-column input layouts on standard forms.",
            image: "",
          },
        ],
      },
      {
        heading: "Table Usage: Grid Editing",
        description: "Use usage='table' for inline table editing. It inherits the Table size and configures TextInput for an editable cell.",
        doContent: [
          {
            description: "Use usage='table' when editable inputs should fill their cells seamlessly.",
            image: "",
          },
          {
            description: "Align values consistently with their column heading and read-only cells.",
            image: "",
          },
        ],
        dontContent: [
          {
            description: "Avoid editable grid cells for long-form entry, detailed validation guidance, or a task people complete one field at a time; use a standard form instead.",
            image: "",
          },
        ],
      },
      {
        heading: "Label and Hidden Label",
        description: "Use label to make the expected value clear before someone starts typing.",
        doContent: [
          {
            description: "Use hideLabel only when the surrounding context communicates the purpose clearly.",
            image: "",
          },
        ],
        dontContent: [
          {
            description: "Do not use placeholder text as the only explanation of what to enter.",
            image: "",
          },
        ],
      },
      {
        heading: "Optional Fields",
        description: "Use optional to identify the exception in a form instead of marking every field.",
        doContent: [
          {
            description: "Use (Optional) when most fields are required and only a small number can be skipped.",
            image: "",
          },
          {
            description: "Apply the same optional pattern consistently throughout the form.",
            image: "",
          },
        ],
        dontContent: [
          {
            description:
              "Avoid adding an asterisk to every required field when an Optional indicator would make the form easier to scan.",
            image: "",
          },
          {
            description: "Do not mix required asterisks and optional markers in the same form.",
            image: "",
          },
        ],
      },
      {
        heading: "Inside Slots: Prefixes and Suffixes",
        description: "Use insideBefore and insideAfter for supporting content that helps people understand the value.",
        doContent: [
          {
            description: "Use familiar prefixes and suffixes for currencies, units, and formats.",
            image: "",
          },
          {
            description: "Use a recognisable icon when it clarifies the field's purpose or state.",
            image: "",
          },
        ],
        dontContent: [
          {
            description: "Do not crowd the input with decorative icons, badges, or repeated information.",
            image: "",
          },
        ],
      },
      {
        heading: "Outside Slots: Attached Actions",
        description: "Use before and after for actions that directly support the value being entered.",
        doContent: [
          {
            description: "Use a short, specific action such as Verify, Apply, Show, or Clear.",
            image: "",
          },
          {
            description: "Keep the action visually connected to the input it affects.",
            image: "",
          },
        ],
        dontContent: [
          {
            description: "Do not attach unrelated actions or several competing actions to one input.",
            image: "",
          },
          {
            description: "Avoid icon-only actions when their meaning is not immediately recognisable.",
            image: "",
          },
        ],
      },
    ],

    behaviour: {
      list: [
        "Automatically generates and associates a stable input id with the internal Label.",
        "The error variant exposes the native invalid state while leaving message relationships to the composed helper or Field content.",
        "Focus ring highlights on user interaction or keyboard navigation.",
        "Validation states update dynamically based on form control props.",
        "Slot content aligns vertically within input height bounds.",
        "TextInput.InsideSlot receives placement and resolved size from TextInput; consumers choose only text or compact density.",
        "Text density preserves typographic breathing room; compact density reduces edge spacing for Icons and Badges.",
        "End-aligned values use tabular numerals for consistent number comparison.",
      ],
    },

    writing: {
      list: [
        "Write labels as short nouns or noun phrases that describe the expected value.",
        "Use placeholders for examples or formatting hints, not requirements.",
        "Write validation messages that explain what went wrong and how to fix it.",
        "Use optional markers sparingly and consistently across a form.",
        "Keep hint text short enough that it does not compete with the entered value.",
      ],
    },
  },
};
