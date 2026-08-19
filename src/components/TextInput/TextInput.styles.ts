import * as sx from "@stylexjs/stylex";

const focusRing = "0 0 0 var(--stroke-200) var(--form-focus-border)";
const tableFocusRing =
  "inset 0 0 0 var(--stroke-100) var(--form-focus-border), 0 0 0 var(--stroke-200) var(--form-focus-border)";

export const styles = sx.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  containerGapS: { gap: "var(--space-100)" },
  containerGapML: { gap: "var(--space-200)" },
  group: {
    alignItems: "stretch",
    display: "flex",
    width: "100%",
  },
  wrapper: {
    alignItems: "center",
    backgroundColor: "var(--form-background)",
    borderColor: "var(--form-default-border)",
    borderRadius: "var(--form-radius-medium)",
    borderStyle: "solid",
    borderWidth: "var(--stroke-100)",
    boxSizing: "border-box",
    color: "var(--form-default-text-color)",
    display: "flex",
    flexGrow: 1,
    minHeight: "inherit",
    transition:
      "border-color var(--speed-200) ease, box-shadow var(--speed-200) ease",
    width: "100%",
    ":focus-within": {
      position: "relative",
      zIndex: 1,
    },
  },
  variantDefault: {
    borderColor: "var(--form-default-border)",
    ":focus-within": {
      borderColor: "var(--form-focus-border)",
      boxShadow: focusRing,
    },
  },
  variantSuccess: {
    borderColor: "var(--form-success-border)",
    ":focus-within": {
      borderColor: "var(--form-success-border)",
      boxShadow: "0 0 0 var(--stroke-200) var(--form-success-border)",
    },
  },
  variantWarning: {
    borderColor: "var(--form-warning-border)",
    ":focus-within": {
      borderColor: "var(--form-warning-border)",
      boxShadow: "0 0 0 var(--stroke-200) var(--form-warning-border)",
    },
  },
  variantError: {
    borderColor: "var(--form-error-border)",
    ":focus-within": {
      borderColor: "var(--form-error-border)",
      boxShadow: "0 0 0 var(--stroke-200) var(--form-error-border)",
    },
  },
  tableUsage: {
    borderRadius: 0,
    borderWidth: 0,
    boxShadow: "none",
    ":focus-within": {
      boxShadow: tableFocusRing,
    },
  },
  sizeS: {
    borderRadius: "var(--form-radius-small)",
    fontSize: "var(--font-size-100)",
    lineHeight: "var(--line-height-100)",
    minHeight: "32px",
  },
  sizeM: {
    borderRadius: "var(--form-radius-medium)",
    fontSize: "var(--font-size-200)",
    lineHeight: "var(--line-height-200)",
    minHeight: "40px",
  },
  sizeL: {
    borderRadius: "var(--form-radius-large)",
    fontSize: "var(--font-size-300)",
    lineHeight: "var(--line-height-300)",
    minHeight: "48px",
  },
  alignStart: { textAlign: "start" },
  alignEnd: {
    fontVariantNumeric: "tabular-nums",
    textAlign: "end",
  },
  input: {
    alignSelf: "stretch",
    backgroundColor: "transparent",
    borderStyle: "none",
    boxSizing: "border-box",
    color: "inherit",
    flexGrow: 1,
    fontFamily: "inherit",
    fontSize: "inherit",
    minHeight: "100%",
    minWidth: 0,
    outlineStyle: "none",
    paddingBlock: 0,
    width: "100%",
    "::placeholder": {
      color: "var(--form-placeholder-text-color)",
    },
  },
  inputPaddingS: { paddingInline: "10px" },
  inputPaddingM: { paddingInline: "var(--space-300)" },
  inputPaddingL: { paddingInline: "var(--space-400)" },
  inputHasBefore: { paddingInlineStart: "var(--space-100)" },
  inputHasAfter: { paddingInlineEnd: "var(--space-100)" },
  insideSlot: {
    alignItems: "center",
    alignSelf: "stretch",
    color: "var(--form-placeholder-text-color)",
    display: "inline-flex",
    justifyContent: "center",
  },
  insideBeforeS: { paddingInlineStart: "10px" },
  insideAfterS: { paddingInlineEnd: "10px" },
  insideBeforeM: { paddingInlineStart: "var(--space-300)" },
  insideAfterM: { paddingInlineEnd: "var(--space-300)" },
  insideBeforeL: { paddingInlineStart: "var(--space-400)" },
  insideAfterL: { paddingInlineEnd: "var(--space-400)" },
  compactBeforeS: { paddingInlineStart: "var(--space-100)" },
  compactAfterS: { paddingInlineEnd: "var(--space-100)" },
  compactBeforeM: { paddingInlineStart: "var(--space-200)" },
  compactAfterM: { paddingInlineEnd: "var(--space-200)" },
  compactBeforeL: { paddingInlineStart: "var(--space-200)" },
  compactAfterL: { paddingInlineEnd: "var(--space-200)" },
  outsideSlot: {
    alignItems: "stretch",
    display: "flex",
    minHeight: "inherit",
  },
  hasBefore: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  hasAfter: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  noRadius: { borderRadius: 0 },
  noBorder: {
    borderWidth: 0,
    boxShadow: "none",
  },
  disabled: {
    backgroundColor: "var(--form-disabled-background)",
    color: "var(--form-disabled-text-color)",
    cursor: "not-allowed",
  },
});
