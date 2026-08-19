import { FC } from "react";
import * as sx from "@stylexjs/stylex";
import { styles } from "./Label.styles";
import type { LabelProps } from "./Label.types";

/**
 * Standalone Label atom for form controls.
 */
export const Label: FC<LabelProps> = ({
  htmlFor,
  label,
  hideLabel = false,
  optional = false,
  required = false,
  size = "m",
  className,
  style,
  ...props
}) => {
  if (!label) return null;

  const sizeStyle = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  const styleProps = sx.props(
    styles.root,
    sizeStyle,
    hideLabel && styles.visuallyHidden,
  );
  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return (
    <label
      {...styleProps}
      className={classes}
      data-label-hidden={hideLabel ? "true" : "false"}
      data-label-size={size}
      htmlFor={htmlFor}
      style={{ ...styleProps.style, ...style }}
      {...props}
    >
      <span {...sx.props(styles.text)} data-label-text="">{label}</span>
      {optional && !required && <span {...sx.props(styles.optional)} data-label-optional=""> (Optional)</span>}
      {required && <span {...sx.props(styles.required)} data-label-required=""> *</span>}
    </label>
  );
};

Label.displayName = "Label";
