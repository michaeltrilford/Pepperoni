import type { HTMLAttributes, ReactNode } from "react";

export type CodeVariant = "inline" | "block";
export type CodeSize = "inherit" | "s" | "m" | "l";

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  /** Controls whether the code renders as an inline chip or a preformatted block. */
  variant?: CodeVariant;
  /** Sizing scale for font-size. "inherit" dynamically respects the parent font size (0.85em). */
  size?: CodeSize;
  /** Content to display inside the code element. */
  children?: ReactNode;
}

export interface CodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  /** Sizing scale for font-size. */
  size?: CodeSize;
  /** Preformatted code content. */
  children?: ReactNode;
}
