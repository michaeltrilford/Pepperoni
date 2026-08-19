import type { ComponentApi } from "../../types/component-api";
import type { IconProps } from "./Icon.types";

export const api = {
  name: "Icon",
  element: "span",
  inherits: "HTMLAttributes<HTMLSpanElement>",
  props: {
    name: {
      type: "search | counter-clockwise-triangle-circle",
      values: ["search", "counter-clockwise-triangle-circle"],
      required: true,
      control: "select",
      description: "Selects an icon from the Pepperoni icon set.",
    },
    size: {
      type: "S | M | L",
      values: ["s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls the rendered icon dimensions.",
    },
    label: {
      type: "string",
      control: "text",
      description:
        "Provides an accessible name for a meaningful standalone icon; omit for decorative icons.",
    },
  },
} as const satisfies ComponentApi<keyof IconProps & string>;
