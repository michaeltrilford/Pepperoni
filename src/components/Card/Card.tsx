import * as sx from "@stylexjs/stylex";
import { styles } from "./Card.styles";
import type { CardProps } from "./Card.types";

/** Surface container for grouping related content. */
export const Card = ({
  size = "m",
  padding = true,
  surface = "100",
  surfaceDirection = "lift",
  className,
  style,
  ...props
}: CardProps) => {
  const sizeStyle = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  const surfaceStyle = {
    "100": styles.surface100,
    "200": styles.surface200,
    "300": styles.surface300,
  }[surface];

  const effectStyle = {
    lift: {
      "100": styles.lift100,
      "200": styles.lift200,
      "300": styles.lift300,
    },
    depth: {
      "100": styles.depth100,
      "200": styles.depth200,
      "300": styles.depth300,
    },
  }[surfaceDirection][surface];

  const styleProps = sx.props(styles.root, sizeStyle, surfaceStyle, effectStyle, !padding && styles.noPadding);
  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return (
    <div
      {...styleProps}
      className={classes}
      data-size={size}
      data-surface={surface}
      data-surface-direction={surfaceDirection}
      data-card-effect={`${surfaceDirection}-${surface}`}
      style={{ ...styleProps.style, ...style }}
      {...props}
    />
  );
};
