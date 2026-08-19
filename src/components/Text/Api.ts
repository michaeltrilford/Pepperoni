import type { ComponentApi } from "../../types/component-api";
import type { TextProps } from "./Text.types";

export const api = {
  name: "Text",
  element: "p",
  inherits: "HTMLAttributes<HTMLParagraphElement>",
  props: {
    size: {
      type: "S | M | L",
      values: ["s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls body-copy font size and line height."
    },
    variant: {
      type: "default | secondary | positive | warning | attention",
      values: ["default", "secondary", "positive", "warning", "attention"],
      defaultValue: "default",
      control: "select",
      description: "Applies the corresponding semantic text colour."
    },
    weight: {
      type: "400 | 500 | 600 | 700",
      values: [400, 500, 600, 700],
      defaultValue: 400,
      control: "select",
      description: "Applies a font weight from the brand token scale."
    },
    id: {
      type: "string",
      control: "text",
      description: "Provides an identifier for referencing this text from a control or relationship."
    },
    role: {
      type: "AriaRole",
      control: "text",
      description: "Adds semantic behaviour such as status or alert when the text is dynamic."
    },
    "aria-live": {
      type: "off | polite | assertive",
      values: ["off", "polite", "assertive"],
      control: "select",
      description: "Controls announcement timing for dynamic text."
    }
  }
} as const satisfies ComponentApi<keyof TextProps & string>;
