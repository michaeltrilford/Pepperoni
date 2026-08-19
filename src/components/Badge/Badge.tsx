import * as sx from "@stylexjs/stylex";
import { styles } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";

/** Compact label used to identify a status, category, or count. */
export const Badge = ({ size = "m", className, style, ...props }: BadgeProps) => {
  const sizeStyle = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  const styleProps = sx.props(styles.root, sizeStyle);
  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return (
    <span
      {...styleProps}
      className={classes}
      data-badge=""
      data-badge-size={size}
      style={{ ...styleProps.style, ...style }}
      {...props}
    />
  );
};
