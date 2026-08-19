import type { SurfaceVisual } from "./types/surface";

export const surfaceVisuals: SurfaceVisual[] = [
  {
    mode: "FLAT",
    label: "Flat",
    first: "var(--surface-100)",
    second: "var(--surface-200)",
    third: "var(--surface-300)",
  },
  {
    mode: "LIFT",
    label: "Lift Effect",
    first: "var(--surface-100)",
    second: "var(--surface-200)",
    third: "var(--surface-300)",
  },
  {
    mode: "DEPTH",
    label: "Depth Effect",
    first: "var(--surface-100)",
    second: "var(--surface-200)",
    third: "var(--surface-300)",
  },
];
