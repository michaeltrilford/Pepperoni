import type { ComponentApi } from "../../types/component-api";
import type { BadgeProps } from "./Badge.types";

export const api = {
  name: "Badge",
  element: "span",
  inherits: "HTMLAttributes<HTMLSpanElement>",
  props: {
    size: {
      type: "S | M | L",
      values: ["s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls badge height, typography, padding, and radius."
    },
    role: {
      type: "AriaRole",
      control: "text",
      description: "Adds semantics such as status when the badge meaning needs to be exposed beyond its text."
    },
    "aria-label": {
      type: "string",
      control: "text",
      description: "Provides an accessible name when the visible badge text is incomplete."
    },
    "aria-live": {
      type: "off | polite | assertive",
      values: ["off", "polite", "assertive"],
      control: "select",
      description: "Announces changing badge content; omit for static badges."
    }
  }
} as const satisfies ComponentApi<keyof BadgeProps & string>;
