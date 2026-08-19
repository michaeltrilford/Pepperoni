import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from "react";

export type TableSize = "s" | "m" | "l";
export type TableVariant = "rows" | "grid";
export type TableLayout = "auto" | "fixed";
export type TableOverflow = "auto" | "scroll" | "hidden" | "visible";
export type TableCellAlign = "start" | "center" | "end";
export type TableUsage = "card";

export interface TableColumn {
  /** Sets the native table column width. */
  width?: CSSProperties["width"];
  /** Sets a proportional share of the remaining table width. */
  ratio?: number;
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Horizontal row dividers or borders around every cell. */
  variant?: TableVariant;
  /** Controls table cell padding. */
  size?: TableSize;
  /** Controls the browser table layout algorithm. */
  layout?: TableLayout;
  /** Sets the minimum width before the table can overflow horizontally. */
  minWidth?: CSSProperties["minWidth"];
  /** Defines widths for columns across every header and body cell. */
  columns?: readonly TableColumn[];
  /** Controls horizontal overflow on the table container. */
  overflow?: TableOverflow;
  /** Names the keyboard-focusable horizontal scroll region when overflow is auto or scroll. */
  overflowLabel?: string;
  /** Opts the table into a named parent composition. */
  usage?: TableUsage;
}

export interface TableHeaderCellProps extends Omit<
  ThHTMLAttributes<HTMLTableCellElement>,
  "align" | "onClick"
> {
  /** Aligns the cell content using logical inline alignment. */
  align?: TableCellAlign;
  /** Allows cell content to wrap. Set false to keep it on one line. */
  wrap?: boolean;
  /** Limits cell content to a number of lines. */
  clamp?: number;
  /** Truncates one-line cell content with an ellipsis. */
  ellipsis?: boolean;
  /** Adds a native button inside the header cell. */
  onAction?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  /** Provides the action name when the visible heading does not describe the result. */
  actionLabel?: string;
}

export interface TableCellProps extends Omit<
  TdHTMLAttributes<HTMLTableCellElement>,
  "align"
> {
  /** Aligns the cell content using logical inline alignment. */
  align?: TableCellAlign;
  /** Allows cell content to wrap. Set false to keep it on one line. */
  wrap?: boolean;
  /** Limits cell content to a number of lines. */
  clamp?: number;
  /** Truncates one-line cell content with an ellipsis. */
  ellipsis?: boolean;
}

export type TableCellContentProps = Pick<
  TableCellProps,
  "align" | "wrap" | "clamp" | "ellipsis"
> & {
  children: ReactNode;
};

export interface TableContextValue {
  size: TableSize;
  variant: TableVariant;
  usage?: TableUsage;
}
