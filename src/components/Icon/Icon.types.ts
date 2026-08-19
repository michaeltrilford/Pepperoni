import type { HTMLAttributes } from "react";

export type IconName = "search" | "counter-clockwise-triangle-circle";
export type IconSize = "s" | "m" | "l";

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Selects an icon from the Pepperoni icon set. */
  name: IconName;
  /** Controls the rendered icon dimensions. */
  size?: IconSize;
  /** Gives meaningful icons an accessible name. Omit for decorative icons. */
  label?: string;
}
