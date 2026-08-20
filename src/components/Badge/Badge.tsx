import * as sx from "@stylexjs/stylex";
import { styles } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

/** Compact label used to identify a status, category, or count. */
export const Badge = ({
  size = "m",
  variant = "neutral",
  color,
  className,
  style,
  ...props
}: BadgeProps) => {
  const sizeStyle = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  const variantStyle = {
    neutral: styles.variantNeutral,
    positive: styles.variantPositive,
    caution: styles.variantCaution,
    attention: styles.variantAttention,
  }[variant];

  const namedColorMap = {
    grey: styles.colorGrey,
    pepperoni: styles.colorPepperoni,
    green: styles.colorGreen,
    orange: styles.colorOrange,
    red: styles.colorRed,
  };

  const isNamedColor = color != null && color in namedColorMap;
  const namedColorStyle = isNamedColor
    ? namedColorMap[color as keyof typeof namedColorMap]
    : undefined;

  const activeVariantStyle = !color ? variantStyle : undefined;

  const customColorStyle =
    color && !isNamedColor
      ? {
          backgroundColor: color,
          color: "var(--white)",
        }
      : undefined;

  const styleProps = sx.props(styles.root, sizeStyle, activeVariantStyle, namedColorStyle);
  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return (
    <span
      {...styleProps}
      className={classes}
      data-badge=""
      data-badge-size={size}
      data-badge-variant={!color ? variant : undefined}
      data-badge-color={color}
      style={{ ...styleProps.style, ...customColorStyle, ...style }}
      {...props}
    />
  );
};


