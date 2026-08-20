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
  variantNeutral: {
    backgroundColor: "var(--badge-neutral-background)",
    color: "var(--badge-neutral-text-color)",
  },
  variantPositive: {
    backgroundColor: "var(--badge-positive-background)",
    color: "var(--badge-positive-text-color)",
  },
  variantCaution: {
    backgroundColor: "var(--badge-caution-background)",
    color: "var(--badge-caution-text-color)",
  },
  variantAttention: {
    backgroundColor: "var(--badge-attention-background)",
    color: "var(--badge-attention-text-color)",
  },
  colorPepperoni: {
    backgroundColor: "var(--badge-pepperoni-background)",
    color: "var(--badge-pepperoni-text-color)",
  },
  colorGrey: {
    backgroundColor: "var(--badge-grey-background)",
    color: "var(--badge-grey-text-color)",
  },
  colorGreen: {
    backgroundColor: "var(--badge-green-background)",
    color: "var(--badge-green-text-color)",
  },
  colorOrange: {
    backgroundColor: "var(--badge-orange-background)",
    color: "var(--badge-orange-text-color)",
  },
  colorRed: {
    backgroundColor: "var(--badge-red-background)",
    color: "var(--badge-red-text-color)",
  },
});
