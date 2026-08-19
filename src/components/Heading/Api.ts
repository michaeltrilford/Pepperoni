import type { ComponentApi } from "../../types/component-api";
import type { HeadingProps } from "./Heading.types";

export const api = {
  name: "Heading",
  element: "h1–h6 | div",
  inherits: "HTMLAttributes<HTMLElement>",
  props: {
    size: {
      type: "h1 | h2 | h3 | h4 | h5 | h6",
      values: ["h1", "h2", "h3", "h4", "h5", "h6"],
      defaultValue: "h2",
      control: "select",
      description: "Controls the visual font-size and line-height token pairing."
    },
    level: {
      type: "h1 | h2 | h3 | h4 | h5 | h6 | none",
      values: ["h1", "h2", "h3", "h4", "h5", "h6", "none"],
      defaultValue: "h2",
      control: "select",
      description: "Controls the document heading level; use none when the text is not a structural heading."
    },
    weight: {
      type: "400 | 500 | 600 | 700",
      values: [400, 500, 600, 700],
      defaultValue: 700,
      control: "select",
      description: "Applies a font weight from the brand token scale."
    }
  }
} as const satisfies ComponentApi<keyof HeadingProps & string>;
