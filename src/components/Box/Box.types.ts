import type { HTMLAttributes } from "react";

export type BoxDirection = "row" | "column";
export type BoxGap = "000" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800";
export type BoxAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type BoxJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type BoxWrap = "nowrap" | "wrap" | "reverse";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /** Enables flex layout. Box otherwise renders as a normal block container. */
  flex?: boolean;
  /** Controls the main-axis direction when flex is enabled. */
  direction?: BoxDirection;
  /** Applies a spacing token between flex items. */
  gap?: BoxGap;
  /** Aligns flex items on the cross axis. */
  align?: BoxAlign;
  /** Distributes flex items on the main axis. */
  justify?: BoxJustify;
  /** Controls whether flex items wrap onto additional lines. */
  wrap?: BoxWrap;
}
