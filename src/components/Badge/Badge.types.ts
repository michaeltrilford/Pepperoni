import type { HTMLAttributes } from "react";

export type BadgeSize = "s" | "m" | "l";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Controls the badge typography, height, and inline padding. */
  size?: BadgeSize;
}
