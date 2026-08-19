import type { HTMLAttributes } from "react";

export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingLevel = HeadingSize | "none";
export type HeadingWeight = 400 | 500 | 600 | 700;

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  /** Controls the visual font-size and line-height token pairing. */
  size?: HeadingSize;
  /** Controls the document heading level; use none when the text is not a structural heading. */
  level?: HeadingLevel;
  /** Applies a font weight from the brand token scale. */
  weight?: HeadingWeight;
}
