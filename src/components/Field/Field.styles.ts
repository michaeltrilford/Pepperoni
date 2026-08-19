import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  sizeS: {
    fontSize: "var(--font-size-100)",
    gap: "var(--space-100)",
    lineHeight: "var(--line-height-100)",
  },
  sizeM: {
    fontSize: "var(--font-size-200)",
    gap: "var(--space-200)",
    lineHeight: "var(--line-height-200)",
  },
  sizeL: {
    fontSize: "var(--font-size-300)",
    gap: "var(--space-200)",
    lineHeight: "var(--line-height-300)",
  },
});
