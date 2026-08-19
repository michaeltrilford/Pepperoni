import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  root: {
    alignItems: "center",
    backgroundColor: "var(--badge-background)",
    boxSizing: "border-box",
    color: "var(--badge-text-color)",
    display: "inline-flex",
    fontFamily: "var(--font-family)",
    fontWeight: "var(--font-weight-600)",
    justifyContent: "center",
    whiteSpace: "nowrap",
    width: "fit-content",
  },
  sizeS: {
    borderRadius: "var(--badge-radius-small)",
    fontSize: "var(--font-size-100)",
    lineHeight: "var(--line-height-100)",
    minHeight: "var(--badge-height-small)",
    paddingInline: "var(--badge-padding-inline-small)",
  },
  sizeM: {
    borderRadius: "var(--badge-radius-medium)",
    fontSize: "var(--font-size-200)",
    lineHeight: "var(--line-height-200)",
    minHeight: "var(--badge-height-medium)",
    paddingInline: "var(--badge-padding-inline-medium)",
  },
  sizeL: {
    borderRadius: "var(--badge-radius-large)",
    fontSize: "var(--font-size-300)",
    lineHeight: "var(--line-height-300)",
    minHeight: "var(--badge-height-large)",
    paddingInline: "var(--badge-padding-inline-large)",
  },
});
