import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  root: {
    color: "var(--heading-color)",
    fontFamily: "var(--font-family)",
    margin: 0,
  },
  weight400: { fontWeight: "var(--font-weight-400)" },
  weight500: { fontWeight: "var(--font-weight-500)" },
  weight600: { fontWeight: "var(--font-weight-600)" },
  weight700: { fontWeight: "var(--font-weight-700)" },
  sizeH1: { fontSize: "var(--font-size-800)", lineHeight: "var(--line-height-800)" },
  sizeH2: { fontSize: "var(--font-size-700)", lineHeight: "var(--line-height-700)" },
  sizeH3: { fontSize: "var(--font-size-600)", lineHeight: "var(--line-height-600)" },
  sizeH4: { fontSize: "var(--font-size-500)", lineHeight: "var(--line-height-500)" },
  sizeH5: { fontSize: "var(--font-size-400)", lineHeight: "var(--line-height-400)" },
  sizeH6: { fontSize: "var(--font-size-300)", lineHeight: "var(--line-height-300)" },
});
