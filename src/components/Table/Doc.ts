import type { MuiDocs } from "../../types/guidelines";

export const muiDocs: MuiDocs = {
  Table: {
    title: "Table",
    description:
      "Table provides accessible rows and grid presentation for structured data, with opt-in column sizing, overflow, and cell-content controls.",
    hero: [],
    figma: [],
    storybook: [],
    github: [],
    website: [],
    guides: [],
    usage: {
      list: [
        "Use rows for lightweight data and grid for bordered cells.",
        "Use native headings and cells through Table.HeaderCell and Table.Cell.",
        "Use columns to give predictable values a deliberate width and let descriptive content use the remaining space.",
        "Use the stories below for columns, overflow, editable cells, and content truncation.",
      ],
    },
    accessibility: {
      designerList: [
        "Provide clear column headings and sufficient cell contrast.",
        "Provide a visible caption or another clear way to identify the table's purpose.",
      ],
      engineerList: [
        "Preserve native table structure.",
        "Give every Table an accessible purpose.",
        "Use `scope` for simple row and column headers.",
        "Use `id` and `headers` for complex header relationships.",
        "Expose sorting with `aria-sort`.",
        "Name every keyboard-focusable overflow region.",
        "Provide the full value when visible content is truncated.",
      ],
    },
    anatomy: {
      image: "",
      list: [
        "Container: Visible by default; becomes a horizontal overflow boundary only when requested.",
        "Columns: Optional exact CSS widths and/or proportional ratios shared by every row.",
        "Header: Native th cells, optionally provided through Table.HeaderCell.",
        "Body: Native td cells, optionally provided through Table.Cell.",
        "Cells: Logical alignment, wrapping, line clamping, and ellipsis truncation.",
      ],
    },
    variants: {
      items: [
        {
          key: "rows",
          title: "Rows",
          description: "Rows separated by horizontal borders.",
          image: "",
        },
        {
          key: "grid",
          title: "Grid",
          description: "Cells separated by horizontal and vertical borders.",
          image: "",
        },
      ],
    },
    stories: {
      items: [
        {
          key: "rows",
          title: "Rows",
          description:
            "Displays a row-based data table with comfortable outer edge padding.",
          source: `<Table aria-label="Recent payments">...</Table>`,
        },
        {
          key: "grid",
          title: "Grid",
          description: "Displays a bordered data grid with edge-to-edge cells.",
          source: `<Table variant="grid" aria-label="Payment summary">...</Table>`,
        },
        {
          key: "columns",
          title: "Columns and overflow",
          description:
            "Combines an exact column width with proportional remaining columns. Overflow remains visible unless explicitly enabled.",
          source: `<Table
  layout="fixed"
  overflow="auto"
  overflowLabel="Payment columns"
  columns={[{ width: "20rem" }, { ratio: 1 }, { ratio: 2 }]}
>...</Table>`,
        },
        {
          key: "cell-content",
          title: "Cell content",
          description:
            "Shows one-line ellipsis truncation, two-line clamping, and right-aligned slotted content.",
          source: `<Table.Cell ellipsis title="Full value">Truncated value</Table.Cell>`,
        },
        {
          key: "grid-input-usage",
          title: "Grid: Input Usage",
          description:
            "Demonstrates editable TextInput controls inside grid cells with deliberate column widths. usage='table' inherits the table size and configures each input for its cell. The Payment column receives two shares of the flexible space, Reference receives one share, and Amount remains a predictable 12rem wide for easy comparison down the column.",
          source: `<Table
  variant="grid"
  layout="fixed"
  columns={[{ ratio: 2 }, { ratio: 1 }, { width: "12rem" }]}
  aria-label="Editable payment line"
>
  <thead><tr>
    <Table.HeaderCell>Payment</Table.HeaderCell>
    <Table.HeaderCell>Reference</Table.HeaderCell>
    <Table.HeaderCell align="end">Amount</Table.HeaderCell>
  </tr></thead>
  <tbody><tr>
    <Table.Cell><TextInput usage="table" label="Payment" hideLabel /></Table.Cell>
    <Table.Cell><TextInput usage="table" label="Reference" hideLabel /></Table.Cell>
    <Table.Cell><TextInput usage="table" label="Amount" hideLabel align="end" type="text" inputMode="decimal" /></Table.Cell>
  </tr></tbody>
</Table>`,
        },
        {
          key: "header-action",
          title: "Header Action",
          description:
            "Makes the complete header label and icon a native button while preserving the surrounding th semantics. Use onAction for sorting or changing the values displayed in a column, and actionLabel to describe the result.",
          source: `<Table.HeaderCell
  onAction={toggleValueMode}
  actionLabel="Show token names"
>
  Computed Value
  <Icon name="counter-clockwise-triangle-circle" />
</Table.HeaderCell>`,
        },
      ],
    },
    compositions: {
      description:
        "Table composes native table content, Table.HeaderCell/Table.Cell behaviour, and editable form controls.",
      items: [],
    },
    related: {
      items: [
        { name: "TextInput", link: "" },
        { name: "Text", link: "" },
      ],
    },
    rules: [
      {
        heading: "Columns: Width and Priority",
        description:
          "Use columns to make the visual width of each column reflect its content and importance.",
        doContent: [
          {
            description:
              "Give descriptive content a larger share of the available width.",
            image: "",
          },
          {
            description:
              "Use a consistent width and end alignment for amounts, totals, and other quantitative values.",
            image: "",
          },
          {
            description:
              "Check narrow layouts and enable horizontal overflow before important values become difficult to read.",
            image: "",
          },
        ],
        dontContent: [
          {
            description:
              "Do not give every column equal width when their content has different needs.",
            image: "",
          },
          {
            description:
              "Avoid widths that truncate key identifiers or separate values from their context.",
            image: "",
          },
        ],
      },
      {
        heading: "Grid Input Usage",
        description:
          "Use TextInput usage='table' for editable grid cells and customise columns for the editing task.",
        doContent: [
          {
            description:
              "Keep editable and read-only values aligned consistently within each column.",
            image: "",
          },
          {
            description:
              "End-align amounts, totals, rates, and quantities beneath an end-aligned heading.",
            image: "",
          },
          {
            description:
              "Allow enough width for the expected value, focus treatment, and supporting prefix or suffix.",
            image: "",
          },
        ],
        dontContent: [
          {
            description:
              "Do not rely on the browser's automatic column widths for a frequently edited grid.",
            image: "",
          },
          {
            description:
              "Do not end-align references, account numbers, or other identifiers merely because they contain digits.",
            image: "",
          },
        ],
      },
      {
        heading: "Header Actions",
        description:
          "Use onAction when a column heading sorts or changes the values shown in that column.",
        doContent: [
          {
            description:
              "Keep the heading text and supporting icon within one clear action target.",
            image: "",
          },
          {
            description:
              "Use actionLabel when the visible heading does not explain what the next action will do.",
            image: "",
          },
        ],
        dontContent: [
          {
            description:
              "Do not make the th element itself interactive or place several actions in one heading.",
            image: "",
          },
        ],
      },
    ],
    behaviour: {
      list: [
        "Table size is inherited by TextInput controls using table usage.",
        "Rows have larger inline padding at the first and last cells; grid cells remain edge-to-edge.",
        'A rows table using usage="card" removes its final divider; use that value only with the matching Card padding={false} composition.',
        "Rows show a shared animated hover highlight that follows resizing and the full scrollable table width.",
        "Row-highlight movement is disabled when the user requests reduced motion.",
        "Rows grow with wrapping or clamped content; sizes provide spacing rather than a fixed row height.",
        "Header and data cells can use logical start, center, or end alignment, including slotted nodes.",
        "End-aligned header and data cells use tabular numerals so amounts and quantities align consistently.",
        "HeaderCell onAction preserves th semantics and renders a native button for keyboard and pointer interaction.",
        "Cell content can wrap, clamp to a fixed number of lines, or truncate with an ellipsis.",
      ],
    },
    writing: { list: ["Keep headings concise and values scannable."] },
  },
};
