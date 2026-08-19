import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  root: {
    backgroundColor: "var(--surface-100)",
    borderStyle: "none",
    boxSizing: "border-box",
    color: "var(--text-color)",
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
  sizeS: {
    borderRadius: "var(--radius-200)",
    padding: "var(--space-400)",
  },
  sizeM: {
    borderRadius: "var(--radius-300)",
    padding: "var(--space-500)",
  },
  sizeL: {
    borderRadius: "var(--radius-400)",
    padding: "var(--space-600)",
  },
  noPadding: { padding: 0 },
  surface100: {
    backgroundColor: "var(--surface-100)",
    "--text-color": "var(--surface-text-color-100)",
    "--text-color-secondary": "var(--surface-text-secondary-100)",
  },
  surface200: {
    backgroundColor: "var(--surface-200)",
    "--text-color": "var(--surface-text-color-200)",
    "--text-color-secondary": "var(--surface-text-secondary-200)",
  },
  surface300: {
    backgroundColor: "var(--surface-300)",
    "--text-color": "var(--surface-text-color-300)",
    "--text-color-secondary": "var(--surface-text-secondary-300)",
  },
  lift100: { boxShadow: "var(--card-effect-lift-100)" },
  lift200: { boxShadow: "var(--card-effect-lift-200)" },
  lift300: { boxShadow: "var(--card-effect-lift-300)" },
  depth100: { boxShadow: "var(--card-effect-depth-100)" },
  depth200: { boxShadow: "var(--card-effect-depth-200)" },
  depth300: { boxShadow: "var(--card-effect-depth-300)" },
});
