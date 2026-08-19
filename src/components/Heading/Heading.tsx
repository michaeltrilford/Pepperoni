import { forwardRef } from "react";
import type { ElementType } from "react";
import * as sx from "@stylexjs/stylex";
import { styles } from "./Heading.styles";
import type { HeadingProps } from "./Heading.types";

/** Heading text with independent visual size and document outline level. */
export const Heading = forwardRef<HTMLElement, HeadingProps>(({
  size = "h2",
  level = "h2",
  weight = 700,
  className,
  style,
  ...props
}, ref) => {
  const Tag = (level === "none" ? "div" : level) as ElementType;

  const sizeStyle = {
    h1: styles.sizeH1,
    h2: styles.sizeH2,
    h3: styles.sizeH3,
    h4: styles.sizeH4,
    h5: styles.sizeH5,
    h6: styles.sizeH6,
  }[size];

  const weightStyle = {
    400: styles.weight400,
    500: styles.weight500,
    600: styles.weight600,
    700: styles.weight700,
  }[weight];

  const styleProps = sx.props(styles.root, sizeStyle, weightStyle);
  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return (
    <Tag
      {...styleProps}
      ref={ref}
      className={classes}
      data-heading-level={level}
      data-heading-size={size}
      data-heading-weight={weight}
      style={{ ...styleProps.style, ...style }}
      {...props}
    />
  );
});

Heading.displayName = "Heading";
