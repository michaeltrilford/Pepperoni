import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  root: { margin: 0 },
  sizeS: { fontSize: "var(--font-size-100)", lineHeight: "var(--line-height-100)" },
  sizeM: { fontSize: "var(--font-size-200)", lineHeight: "var(--line-height-200)" },
  sizeL: { fontSize: "var(--font-size-300)", lineHeight: "var(--line-height-300)" },
  variantDefault: { color: "var(--text-color)" },
  variantSecondary: { color: "var(--text-color-secondary)" },
  variantPositive: { color: "var(--text-color-positive)" },
  variantWarning: { color: "var(--text-color-warning)" },
  variantAttention: { color: "var(--text-color-attention)" },
  weight400: { fontWeight: "var(--font-weight-400)" },
  weight500: { fontWeight: "var(--font-weight-500)" },
  weight600: { fontWeight: "var(--font-weight-600)" },
  weight700: { fontWeight: "var(--font-weight-700)" },
});
