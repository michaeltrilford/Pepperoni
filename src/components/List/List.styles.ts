import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  root: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    margin: 0,
    paddingLeft: "var(--space-400)",
    color: "var(--text-color)",
  },
  gap100: { gap: "var(--space-100)" },
  gap200: { gap: "var(--space-200)" },
  gap300: { gap: "var(--space-300)" },
  gap400: { gap: "var(--space-400)" },
  gap500: { gap: "var(--space-500)" },
  sizeS: {
    fontSize: "var(--font-size-100)",
    lineHeight: "var(--line-height-100)",
  },
  sizeM: {
    fontSize: "var(--font-size-200)",
    lineHeight: "var(--line-height-200)",
  },
  sizeL: {
    fontSize: "var(--font-size-300)",
    lineHeight: "var(--line-height-300)",
  },
  item: {
    color: "var(--text-color)",
    fontFamily: "var(--font-family)",
    fontSize: "inherit",
    lineHeight: "inherit",
  },
});
