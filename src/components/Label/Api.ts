import type { ComponentApi } from "../../types/component-api";
import type { LabelProps } from "./Label.types";

export const api = {
  name: "Label",
  element: "label",
  inherits: "LabelHTMLAttributes<HTMLLabelElement>",
  props: {
    size: {
      type: "S | M | L",
      values: ["s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls label font size and line height."
    },
    label: {
      type: "ReactNode",
      required: true,
      control: "text",
      description: "Provides the visible or visually hidden label content."
    },
    htmlFor: {
      type: "string",
      control: "text",
      description: "Associates the label with a form control whose id matches exactly."
    },
    id: {
      type: "string",
      control: "text",
      description: "Provides an identifier for the label when referenced by aria-labelledby."
    },
    hideLabel: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Visually hides the label while retaining its accessible association."
    },
    optional: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Displays the optional indicator beside the label unless required is also true."
    },
    required: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Displays a visual required indicator and takes precedence over optional; does not set the associated control's native required state."
    }
  }
} as const satisfies ComponentApi<keyof LabelProps & string>;
