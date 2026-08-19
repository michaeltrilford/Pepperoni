import type { ComponentApi } from "../../types/component-api";
import type { CardProps } from "./Card.types";

export const api = {
  name: "Card",
  element: "div",
  inherits: "HTMLAttributes<HTMLDivElement>",
  props: {
    size: {
      type: "s | m | l",
      values: ["s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls the card radius and padding scale."
    },
    padding: {
      type: "boolean",
      defaultValue: true,
      control: "boolean",
      description: "Removes the card's internal padding when false. For a full-bleed rows Table, pair this with Table usage='card'."
    },
    surface: {
      type: "100 | 200 | 300",
      values: ["100", "200", "300"],
      defaultValue: "100",
      control: "select",
      description: "Selects the semantic surface tone used by the card."
    },
    surfaceDirection: {
      type: "lift | depth",
      values: ["lift", "depth"],
      defaultValue: "lift",
      control: "select",
      description: "Identifies the shadow and border treatment direction."
    },
    role: {
      type: "AriaRole",
      control: "text",
      description: "Adds an ARIA role when the card has a specific semantic purpose."
    }
  }
} as const satisfies ComponentApi<keyof CardProps & string>;
