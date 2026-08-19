import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  container: {
    backgroundColor: "var(--table-background)",
    boxSizing: "border-box",
    overflowX: "visible",
    position: "relative",
    scrollPadding: "var(--stroke-200)",
    width: "100%",
  },
  overflowAuto: { overflowX: "auto" },
  overflowScroll: { overflowX: "scroll" },
  overflowHidden: { overflowX: "hidden" },
  overflowVisible: { overflowX: "visible" },
  table: {
    backgroundColor: "transparent",
    borderCollapse: "separate",
    borderSpacing: 0,
    color: "var(--table-text-color)",
    fontFamily: "var(--font-family)",
    position: "relative",
    width: "100%",
    zIndex: 1,
  },
  tableSizeS: {
    fontSize: "var(--font-size-100)",
    lineHeight: "var(--line-height-100)",
  },
  tableSizeM: {
    fontSize: "var(--font-size-200)",
    lineHeight: "var(--line-height-200)",
  },
  tableSizeL: {
    fontSize: "var(--font-size-300)",
    lineHeight: "var(--line-height-300)",
  },
  gridTable: {
    borderLeftColor: "var(--table-border-color)",
    borderLeftStyle: "solid",
    borderLeftWidth: "var(--stroke-100)",
    borderTopColor: "var(--table-border-color)",
    borderTopStyle: "solid",
    borderTopWidth: "var(--stroke-100)",
  },
  cell: {
    textAlign: "left",
    verticalAlign: "middle",
  },
  headerCell: {
    backgroundColor: "var(--table-header-background)",
    color: "var(--table-header-text-color)",
    fontWeight: "var(--font-weight-600)",
  },
  headerAction: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderStyle: "none",
    color: "inherit",
    cursor: "pointer",
    display: "flex",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    gap: "var(--space-200)",
    lineHeight: "inherit",
    padding: 0,
    textAlign: "inherit",
    width: "100%",
    ":focus-visible": {
      outlineColor: "var(--form-focus-border)",
      outlineOffset: "var(--stroke-100)",
      outlineStyle: "solid",
      outlineWidth: "var(--stroke-200)",
    },
  },
  headerActionStart: { justifyContent: "flex-start" },
  headerActionCenter: { justifyContent: "center" },
  headerActionEnd: { justifyContent: "flex-end" },
  dataCell: {
    ":has([data-table-cell-control])": { padding: 0 },
  },
  cellSizeS: { padding: "var(--space-200) 10px" },
  cellSizeM: { padding: "var(--space-300)" },
  cellSizeL: { padding: "var(--space-400)" },
  rowsCell: {
    borderBottomColor: "var(--table-border-color)",
    borderBottomStyle: "solid",
    borderBottomWidth: "var(--stroke-100)",
  },
  cardRowsCell: {
    ":is(tbody tr:last-child > td)": {
      borderBottomWidth: 0,
    },
  },
  gridCell: {
    borderBottomColor: "var(--table-border-color)",
    borderBottomStyle: "solid",
    borderBottomWidth: "var(--stroke-100)",
    borderRightColor: "var(--table-border-color)",
    borderRightStyle: "solid",
    borderRightWidth: "var(--stroke-100)",
  },
  rowsCellSizeS: {
    ":first-child:not(:has([data-table-cell-control]))": {
      paddingInlineStart: "var(--space-300)",
    },
    ":last-child:not(:has([data-table-cell-control]))": {
      paddingInlineEnd: "var(--space-300)",
    },
  },
  rowsCellSizeM: {
    ":first-child:not(:has([data-table-cell-control]))": {
      paddingInlineStart: "var(--space-400)",
    },
    ":last-child:not(:has([data-table-cell-control]))": {
      paddingInlineEnd: "var(--space-400)",
    },
  },
  rowsCellSizeL: {
    ":first-child:not(:has([data-table-cell-control]))": {
      paddingInlineStart: "var(--space-500)",
    },
    ":last-child:not(:has([data-table-cell-control]))": {
      paddingInlineEnd: "var(--space-500)",
    },
  },
  alignStart: { textAlign: "start" },
  alignCenter: { textAlign: "center" },
  alignEnd: {
    fontVariantNumeric: "tabular-nums",
    textAlign: "end",
  },
  cellContent: { minWidth: 0 },
  cellContentFlex: {
    display: "flex",
    minWidth: 0,
  },
  contentAlignStart: { justifyContent: "flex-start" },
  contentAlignCenter: { justifyContent: "center" },
  contentAlignEnd: { justifyContent: "flex-end" },
  noWrap: { whiteSpace: "nowrap" },
  ellipsis: {
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  clamp: {
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    overflow: "hidden",
  },
  rowHighlightClip: {
    bottom: 0,
    left: 0,
    opacity: 0,
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    zIndex: 0,
  },
  rowHighlight: {
    backfaceVisibility: "hidden",
    backgroundColor: "var(--table-row-hover-background)",
    display: "block",
    left: 0,
    position: "absolute",
    top: 0,
  },
  rowHighlightAnimated: {
    transition:
      "transform var(--speed-200) ease-out, height var(--speed-200) ease-out",
    willChange: "transform, height",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  rowHighlightVisible: { opacity: 1 },
});
