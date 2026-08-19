import { forwardRef } from "react";
import * as sx from "@stylexjs/stylex";
import { styles } from "./Text.styles";
import type { TextProps } from "./Text.types";

/** Body copy with consistent sizing and semantic colour variants. */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(({
  size = "m",
  variant = "default",
  weight = 400,
  className,
  style,
  ...props
}, ref) => {
  const sizeStyle = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  const variantStyle = {
    default: styles.variantDefault,
    secondary: styles.variantSecondary,
    positive: styles.variantPositive,
    warning: styles.variantWarning,
    attention: styles.variantAttention,
  }[variant];

  const weightStyle = {
    400: styles.weight400,
    500: styles.weight500,
    600: styles.weight600,
    700: styles.weight700,
  }[weight];

  const styleProps = sx.props(styles.root, sizeStyle, variantStyle, weightStyle);
  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return (
    <p
      {...styleProps}
      ref={ref}
      className={classes}
      data-text-size={size}
      data-text-variant={variant}
      data-text-weight={weight}
      style={{ ...styleProps.style, ...style }}
      {...props}
    />
  );
});

Text.displayName = "Text";
