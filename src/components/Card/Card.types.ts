import type { HTMLAttributes } from "react";

export type CardSize = "s" | "m" | "l";
export type CardSurface = "100" | "200" | "300";
export type CardSurfaceDirection = "lift" | "depth";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Controls the card radius and default padding scale. */
  size?: CardSize;
  /** Removes the card's internal padding when false. */
  padding?: boolean;
  /** Selects the semantic surface tone used by the card. */
  surface?: CardSurface;
  /** Identifies the shadow and border treatment direction for the card. */
  surfaceDirection?: CardSurfaceDirection;
}
