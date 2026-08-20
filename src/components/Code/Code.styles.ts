import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  inline: {
    display: "inline-block",
    fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
    fontSize: "0.85em",
    padding: "0.04em 0.4em",
    borderRadius: "var(--radius-100)",
    backgroundColor: "var(--surface-200)",
    border: "var(--stroke-100) solid var(--border-color)",
    color: "var(--text-color)",
    lineHeight: "inherit",
    verticalAlign: "baseline",
    boxSizing: "border-box",
  },
  block: {
    display: "block",
    fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
    fontSize: "var(--font-size-50)",
    lineHeight: "var(--line-height-50)",
    color: "var(--text-color)",
    margin: 0,
    overflowX: "auto",
    padding: 0,
    width: "100%",
    boxSizing: "border-box",
  },
  blockInner: {
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    display: "inline",
  },
  sizeS: {
    fontSize: "var(--font-size-50)",
  },
  sizeM: {
    fontSize: "var(--font-size-100)",
  },
  sizeL: {
    fontSize: "var(--font-size-200)",
  },
});
