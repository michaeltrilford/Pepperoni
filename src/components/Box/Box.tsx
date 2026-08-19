import { forwardRef } from "react";
import * as sx from "@stylexjs/stylex";
import { styles } from "./Box.styles";
import type { BoxProps } from "./Box.types";

const directionStyles = {
  row: styles.directionRow,
  column: styles.directionColumn,
};
const gapStyles = {
  "000": styles.gap000,
  "100": styles.gap100,
  "200": styles.gap200,
  "300": styles.gap300,
  "400": styles.gap400,
  "500": styles.gap500,
  "600": styles.gap600,
  "700": styles.gap700,
  "800": styles.gap800,
};
const alignStyles = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
  baseline: styles.alignBaseline,
};
const justifyStyles = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
  around: styles.justifyAround,
  evenly: styles.justifyEvenly,
};
const wrapStyles = {
  nowrap: styles.wrapNowrap,
  wrap: styles.wrapWrap,
  reverse: styles.wrapReverse,
};

/** A neutral block container with opt-in flex layout controls. */
export const Box = forwardRef<HTMLDivElement, BoxProps>((
  {
    flex = false,
    direction = "row",
    gap,
    align,
    justify,
    wrap = "nowrap",
    className,
    ...props
  },
  ref,
) => {
  const styleProps = sx.props(
    styles.box,
    flex && styles.flex,
    flex && directionStyles[direction],
    flex && gap && gapStyles[gap],
    flex && align && alignStyles[align],
    flex && justify && justifyStyles[justify],
    flex && wrapStyles[wrap],
  );

  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return <div ref={ref} {...styleProps} {...props} className={classes} />;
});

Box.displayName = "Box";
