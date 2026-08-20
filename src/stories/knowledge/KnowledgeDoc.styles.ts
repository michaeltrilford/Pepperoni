import * as sx from "@stylexjs/stylex";

export const styles = sx.create({
  wrapper: {
    backgroundColor: "var(--surface)",
    boxSizing: "border-box",
    minHeight: "100vh",
    width: "100%",
  },
  root: {
    boxSizing: "border-box",
    color: "var(--text-color)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "var(--font-family)",
    gap: {
      default: "var(--space-500)",
      "@media (max-width: 768px)": "var(--space-600)",
    },
    marginInline: "auto",
    maxWidth: "1120px",
    padding: {
      default: "var(--space-600) var(--space-800) var(--space-800)",
      "@media (max-width: 1024px)": "var(--space-600) var(--space-600) var(--space-600)",
      "@media (max-width: 768px)": "var(--space-500) var(--space-400) var(--space-500)",
      "@media (max-width: 480px)": "var(--space-400) var(--space-300) var(--space-400)",
    },
    width: "100%",
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-200)",
    maxWidth: "72ch",
  },
  headerStack: {
    alignItems: {
      default: "center",
      "@media (max-width: 600px)": "stretch",
    },
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 600px)": "column",
    },
    gap: "var(--space-400)",
    justifyContent: "space-between",
    width: "100%",
  },
  headerAction: {
    flexShrink: 0,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-500)",
    width: "100%",
  },
  cardsGrid: {
    display: "grid",
    gap: "var(--space-400)",
    gridTemplateColumns: {
      default: "repeat(3, minmax(0, 1fr))",
      "@media (max-width: 947px)": "1fr",
    },
    width: "100%",
  },
  cardAction: {
    display: "flex",
    marginTop: "auto",
    width: "100%",
  },
  fullWidthAction: {
    boxSizing: "border-box",
    justifyContent: "center",
    width: "100%",
  },
  codeSnippet: {
    borderRadius: "var(--radius-200)",
    color: "var(--text-color)",
    fontFamily: "monospace",
    fontSize: "var(--font-size-50)",
    lineHeight: "var(--line-height-50)",
    margin: 0,
    overflowX: "auto",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-100)",
    margin: 0,
    paddingLeft: "var(--space-400)",
  },
  listItem: {
    color: "var(--text-color)",
    fontSize: "var(--font-size-75)",
    lineHeight: "var(--line-height-75)",
  },
});
