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
      default: "var(--space-800)",
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
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-500)",
    width: "100%",
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-200)",
    maxWidth: "72ch",
  },
  heroGrid: {
    display: "grid",
    gap: "var(--space-400)",
    gridTemplateColumns: {
      default: "repeat(3, minmax(0, 1fr))",
      "@media (max-width: 947px)": "1fr",
    },
    width: "100%",
  },
  componentGrid: {
    display: "grid",
    gap: "var(--space-400)",
    gridTemplateColumns: {
      default: "repeat(4, minmax(0, 1fr))",
      "@media (max-width: 900px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 600px)": "1fr",
    },
    width: "100%",
  },
  featureGrid: {
    display: "grid",
    gap: "var(--space-400)",
    gridTemplateColumns: {
      default: "repeat(4, minmax(0, 1fr))",
      "@media (max-width: 640px)": "1fr",
    },
    width: "100%",
  },
  cardTag: {
    alignSelf: "flex-start",
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
});
