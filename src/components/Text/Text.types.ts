import type { HTMLAttributes } from "react";

export type TextSize = "s" | "m" | "l";
export type TextVariant = "default" | "secondary" | "positive" | "warning" | "attention";
export type TextWeight = 400 | 500 | 600 | 700;

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Controls the body-copy font size and line height. */
  size?: TextSize;
  /** Applies the appropriate semantic text colour. */
  variant?: TextVariant;
  /** Applies a font weight from the brand token scale. */
  weight?: TextWeight;
}
