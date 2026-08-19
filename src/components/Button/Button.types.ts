import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "link";
export type ButtonSize = "xs" | "s" | "m" | "l";
export type ButtonUsage = "text-input-before" | "text-input-after";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Controls the visual emphasis of the button. */
  variant?: ButtonVariant;
  /** Controls the button height, spacing, and typography. */
  size?: ButtonSize;
  /** Makes an icon-only action square. Provide an accessible name with aria-label. */
  iconOnly?: boolean;
  /** Opts the button into a named parent composition. */
  usage?: ButtonUsage;
  /** Renders the action as an anchor when provided. */
  href?: string;
  /** Sets the anchor target when href is provided. */
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  /** Sets the anchor relationship when href is provided. */
  rel?: string;
  /** Sets the download behaviour when href is provided. */
  download?: string | boolean;
}
