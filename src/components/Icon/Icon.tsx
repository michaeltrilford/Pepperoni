import type { ReactNode } from "react";
import * as sx from "@stylexjs/stylex";
import { styles } from "./Icon.styles";
import type { IconName, IconProps } from "./Icon.types";

const icons: Record<IconName, ReactNode> = {
  search: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 5a6 6 0 0 1 6 6 5.97 5.97 0 0 1-1.488 3.951l2.846 2.847a.75.75 0 0 1-1.06 1.06L15.39 15.95A6 6 0 1 1 12 5m0 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
    />
  ),
  "counter-clockwise-triangle-circle": (
    <path
      fill="currentColor"
      stroke="none"
      d="M12.023 5.7q1.298-.001 2.43.485 1.137.48 1.997 1.345a6.3 6.3 0 0 1 1.345 1.996q.486 1.133.485 2.43 0 1.29-.485 2.429a6.3 6.3 0 0 1-3.342 3.336 6 6 0 0 1-2.43.492q-.906 0-1.758-.26a6.14 6.14 0 0 1-2.922-1.903q-.285-.303-.267-.634t.267-.539a.68.68 0 0 1 .587-.172q.314.06.569.314.438.503.983.87.552.368 1.19.564a4.5 4.5 0 0 0 1.351.201q.978 0 1.825-.367a4.68 4.68 0 0 0 2.506-2.507 4.6 4.6 0 0 0 .369-1.824q0-.978-.369-1.831a4.6 4.6 0 0 0-1.006-1.493 4.7 4.7 0 0 0-1.5-1.007 4.5 4.5 0 0 0-1.825-.367q-.976 0-1.83.367A4.7 4.7 0 0 0 8.7 8.632q-.646.645-1.014 1.499-.111.266-.188.545h.615q.231 0 .344.119.118.113.112.284a.56.56 0 0 1-.13.338l-1.458 1.967a.44.44 0 0 1-.343.19q-.2 0-.343-.19L4.83 11.423a.57.57 0 0 1-.13-.344.37.37 0 0 1 .106-.284q.12-.12.356-.12h.732q.121-.592.358-1.149a6.3 6.3 0 0 1 3.342-3.341 6.1 6.1 0 0 1 2.428-.486"
    />
  ),
};

/** Renders a consistently sized icon from the Pepperoni icon set. */
export const Icon = ({
  name,
  size = "m",
  label,
  className,
  style,
  ...props
}: IconProps) => {
  const sizeStyle = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  const styleProps = sx.props(
    styles.root,
    sizeStyle,
  );
  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return (
    <span
      {...styleProps}
      className={classes}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      data-icon=""
      data-icon-name={name}
      data-icon-size={size}
      style={{ ...styleProps.style, ...style }}
      {...props}
    >
      <svg
        {...sx.props(styles.svg)}
        data-icon-svg=""
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
        aria-hidden="true"
      >
        {icons[name]}
      </svg>
    </span>
  );
};
