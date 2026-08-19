import type { ComponentApi } from "../../types/component-api";
import type { TableCellProps, TableHeaderCellProps, TableProps } from "./Table.types";

type TableApiProp =
  keyof TableProps | keyof TableHeaderCellProps | keyof TableCellProps;

export const api = {
  name: "Table",
  element: "table",
  inherits: "TableHTMLAttributes<HTMLTableElement>",
  props: {
    variant: {
      type: "rows | grid",
      values: ["rows", "grid"],
      defaultValue: "rows",
      control: "select",
      description: "Uses horizontal row dividers or borders around every cell.",
    },
    size: {
      type: "s | m | l",
      values: ["s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls row height, typography, and cell spacing.",
    },
    layout: {
      type: "auto | fixed",
      values: ["auto", "fixed"],
      defaultValue: "auto",
      control: "select",
      description: "Controls the browser table layout algorithm.",
    },
    minWidth: {
      type: "CSSProperties['minWidth']",
      control: "text",
      description:
        "Sets the minimum width before the table can overflow horizontally.",
    },
    overflow: {
      type: "auto | scroll | hidden | visible",
      values: ["auto", "scroll", "hidden", "visible"],
      defaultValue: "visible",
      control: "select",
      description:
        "Controls horizontal overflow on the table container. Use auto only when horizontal scrolling is required.",
    },
    overflowLabel: {
      type: "string",
      control: "text",
      description:
        "Names the keyboard-focusable horizontal scroll region used by overflow='auto' or overflow='scroll'.",
    },
    usage: {
      type: "card",
      values: ["card"],
      control: "select",
      description:
        "Opts a rows table into a full-bleed Card composition and removes the table's final row divider. Pair with Card padding={false}.",
    },
    columns: {
      type: "TableColumn[]",
      control: false,
      description:
        "Defines exact CSS widths or proportional ratios for columns across every header and body cell. Ratios share the remaining width after fixed columns.",
    },
    align: {
      type: "start | center | end",
      values: ["start", "center", "end"],
      control: "select",
      description:
        "Used by Table.HeaderCell and Table.Cell to align content along the logical inline axis.",
    },
    wrap: {
      type: "boolean",
      defaultValue: true,
      control: "boolean",
      description:
        "Used by Table.HeaderCell and Table.Cell to allow or prevent content wrapping.",
    },
    clamp: {
      type: "number",
      control: "number",
      description:
        "Used by Table.HeaderCell and Table.Cell to limit content to a number of lines.",
    },
    ellipsis: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description:
        "Used by Table.HeaderCell and Table.Cell to truncate one-line content with an ellipsis.",
    },
    onAction: {
      type: "MouseEventHandler<HTMLButtonElement>",
      control: false,
      description:
        "Adds a native button inside Table.HeaderCell for sorting or changing the displayed column values.",
    },
    actionLabel: {
      type: "string",
      control: "text",
      description:
        "Names the header action when its visible heading does not describe the result.",
    },
    "aria-label": {
      type: "string",
      control: "text",
      description: "Names the table when no visible caption is provided.",
    },
    "aria-labelledby": {
      type: "string",
      control: "text",
      description: "References visible text that names the table.",
    },
    "aria-describedby": {
      type: "string",
      control: "text",
      description: "References supplementary text that describes the table.",
    },
  },
} as const satisfies ComponentApi<TableApiProp & string>;
