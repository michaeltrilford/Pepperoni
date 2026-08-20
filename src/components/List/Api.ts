import type { ComponentApi } from "../../types/component-api";
import type { ListProps } from "./List.types";

export const api = {
  name: "List",
  element: "ul",
  inherits: "HTMLAttributes<HTMLOListElement | HTMLUListElement>",
  props: {
    type: {
      type: "unordered | ordered",
      values: ["unordered", "ordered"],
      defaultValue: "unordered",
      control: "select",
      description: "Specifies whether to render an ordered (`<ol>`) or unordered (`<ul>`) list."
    },
    size: {
      type: "S | M | L",
      values: ["s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls typography size and line height for list items."
    },
    gap: {
      type: "100 | 200 | 300 | 400 | 500",
      values: ["100", "200", "300", "400", "500"],
      defaultValue: "100",
      control: "select",
      description: "Vertical gap between list items."
    },
    children: {
      type: "ReactNode",
      control: "text",
      description: "Content of the list, typically List.Item elements."
    }
  }
} as const satisfies ComponentApi<keyof ListProps & string>;
