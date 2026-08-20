import type { HTMLAttributes } from "react";

export type BadgeSize = "s" | "m" | "l";
export type BadgeVariant = "neutral" | "positive" | "caution" | "attention";
export type BadgeColor = "grey" | "pepperoni" | "green" | "orange" | "red" | (string & {});

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Controls the badge typography, height, and inline padding. */
  size?: BadgeSize;
  /** Semantic status styling for common status states. */
  variant?: BadgeVariant;
  /** Brand color ramp or custom color value. */
  color?: BadgeColor;
}

