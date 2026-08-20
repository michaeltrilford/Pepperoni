import type { HTMLAttributes, LiHTMLAttributes, ReactNode } from "react";

export type ListType = "unordered" | "ordered";
export type ListSize = "s" | "m" | "l";
export type ListGap = "100" | "200" | "300" | "400" | "500";

export interface ListProps extends HTMLAttributes<HTMLOListElement | HTMLUListElement> {
  /** Specifies whether to render an ordered (`<ol>`) or unordered (`<ul>`) list. */
  type?: ListType;
  /** Controls typography size and line height. */
  size?: ListSize;
  /** Vertical gap between list items. */
  gap?: ListGap;
  /** Content of the list, typically List.Item elements. */
  children?: ReactNode;
}

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Content of the list item. */
  children?: ReactNode;
}
