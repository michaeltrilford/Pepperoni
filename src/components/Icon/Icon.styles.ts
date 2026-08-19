import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  root: {
    alignItems: "center",
    color: "var(--icon-color)",
    display: "inline-flex",
    flexShrink: 0,
    justifyContent: "center",
    userSelect: "none",
  },
  sizeS: {
    height: "var(--icon-size-small)",
    width: "var(--icon-size-small)",
  },
  sizeM: {
    height: "var(--icon-size-medium)",
    width: "var(--icon-size-medium)",
  },
  sizeL: {
    height: "var(--icon-size-large)",
    width: "var(--icon-size-large)",
  },
  svg: {
    height: "100%",
    width: "100%",
  },
});
