import { forwardRef } from "react";
import type { AnchorHTMLAttributes, Ref } from "react";
import * as sx from "@stylexjs/stylex";
import { styles } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

/** Basic action button with primary, secondary, and tertiary emphasis. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "m",
      iconOnly = false,
      usage,
      type = "button",
      href,
      className,
      disabled,
      onClick,
      tabIndex,
      ...props
    },
    ref,
  ) => {
    const resolvedVariant = usage ? "secondary" : variant;

    const sizeStyle = {
      xs: styles.sizeXS,
      s: styles.sizeS,
      m: styles.sizeM,
      l: styles.sizeL,
    }[size];

    const variantStyle = {
      primary: styles.primary,
      secondary: styles.secondary,
      tertiary: styles.tertiary,
      link: styles.link,
    }[resolvedVariant];
    const iconOnlySizeStyle = iconOnly
      ? {
          xs: styles.iconOnlyXS,
          s: styles.iconOnlyS,
          m: styles.iconOnlyM,
          l: styles.iconOnlyL,
        }[size]
      : undefined;

    const styleProps = sx.props(
      styles.button,
      sizeStyle,
      variantStyle,
      iconOnly && styles.iconOnly,
      iconOnlySizeStyle,
      disabled && styles.disabled,
      usage && styles.textInputSlot,
      usage === "text-input-before" && styles.textInputBefore,
      usage === "text-input-after" && styles.textInputAfter,
    );

    const classes = [styleProps.className, className].filter(Boolean).join(" ");
    const slotPlacement = usage === "text-input-before" ? "before" : usage === "text-input-after" ? "after" : undefined;

    if (href) {
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          {...styleProps}
          href={disabled ? undefined : href}
          role={disabled ? "link" : undefined}
          className={classes}
          aria-disabled={disabled || undefined}
          tabIndex={disabled ? -1 : tabIndex}
          data-button=""
          data-button-icon-only={iconOnly ? "" : undefined}
          data-text-input-slot-button={slotPlacement}
          onClick={(event) => {
            if (disabled) event.preventDefault();
            else (onClick as AnchorHTMLAttributes<HTMLAnchorElement>["onClick"])?.(event);
          }}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        {...styleProps}
        type={type}
        disabled={disabled}
        className={classes}
        data-button=""
        data-button-icon-only={iconOnly ? "" : undefined}
        data-text-input-slot-button={slotPlacement}
        onClick={onClick}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
