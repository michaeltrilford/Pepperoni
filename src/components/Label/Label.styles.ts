import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  root: {
    alignItems: "center",
    color: "var(--text-color)",
    display: "inline-flex",
    fontFamily: "inherit",
    fontWeight: "var(--font-weight-500)",
    gap: "4px",
    userSelect: "none",
  },
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
  text: { display: "inline" },
  optional: {
    color: "var(--text-color-secondary)",
    fontSize: "0.9em",
    fontWeight: "var(--font-weight-400)",
  },
  required: {
    color: "var(--text-color-attention)",
    fontWeight: "var(--font-weight-600)",
  },
  visuallyHidden: {
    borderWidth: 0,
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
});
