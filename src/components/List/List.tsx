import { forwardRef, useContext } from "react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import * as sx from "@stylexjs/stylex";
import { styles } from "./List.styles";
import { ListContext } from "./ListContext";
import type { ListItemProps, ListProps } from "./List.types";

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, className, style, ...props }, ref) => {
    const { size } = useContext(ListContext);
    const styleProps = sx.props(styles.item);
    const classes = [styleProps.className, className].filter(Boolean).join(" ");

    return (
      <li
        {...styleProps}
        ref={ref}
        className={classes}
        data-list-item=""
        data-list-size={size}
        style={{ ...styleProps.style, ...style }}
        {...props}
      >
        {children}
      </li>
    );
  }
);

ListItem.displayName = "List.Item";

export interface ListComponent
  extends ForwardRefExoticComponent<
    ListProps & RefAttributes<HTMLOListElement | HTMLUListElement>
  > {
  Item: typeof ListItem;
}

/** Structured list component supporting ordered and unordered variants with token-based gaps and sizing. */
export const List = forwardRef<HTMLOListElement | HTMLUListElement, ListProps>(
  (
    {
      type = "unordered",
      size = "m",
      gap = "100",
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const gapStyle = {
      "100": styles.gap100,
      "200": styles.gap200,
      "300": styles.gap300,
      "400": styles.gap400,
      "500": styles.gap500,
    }[gap];

    const sizeStyle = {
      s: styles.sizeS,
      m: styles.sizeM,
      l: styles.sizeL,
    }[size];

    const styleProps = sx.props(styles.root, gapStyle, sizeStyle);
    const classes = [styleProps.className, className].filter(Boolean).join(" ");

    const Component = type === "ordered" ? "ol" : "ul";

    return (
      <ListContext.Provider value={{ size }}>
        <Component
          {...(styleProps as any)}
          ref={ref as any}
          className={classes}
          data-list-type={type}
          data-list-size={size}
          data-list-gap={gap}
          style={{ ...styleProps.style, ...style }}
          {...props}
        >
          {children}
        </Component>
      </ListContext.Provider>
    );
  }
) as unknown as ListComponent;

List.displayName = "List";
List.Item = ListItem;
