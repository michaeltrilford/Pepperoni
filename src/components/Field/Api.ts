import type { ComponentApi } from "../../types/component-api";
import type { FieldProps } from "./Field.types";

export const api = {
  name: "Field",
  element: "div",
  inherits: "HTMLAttributes<HTMLDivElement>",
  props: {
    size: {
      type: "S | M | L",
      values: ["s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls Field spacing and the scale passed to its label and message."
    },
    variant: {
      type: "default | success | warning | error",
      values: ["default", "success", "warning", "error"],
      defaultValue: "default",
      control: "select",
      description: "Maps the supporting message to its semantic feedback colour."
    },
    label: {
      type: "ReactNode",
      control: "text",
      description: "Provides the shared visible or visually hidden Field label."
    },
    hideLabel: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Visually hides the Field label while retaining accessible text."
    },
    optional: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Displays the optional indicator beside the Field label."
    },
    required: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Displays a visual required indicator beside the Field label; set required on the child control for native validation."
    },
    message: {
      type: "ReactNode",
      control: "text",
      description: "Renders helper or validation text below the Field content."
    },
    messageId: {
      type: "string",
      control: "text",
      description: "Customises the generated message id used by TextInput context and render-function ARIA relationship props."
    },
    children: {
      type: "ReactNode",
      control: false,
      description: "Provides content or a render function. TextInput consumes Field context automatically; use the render function to pass ARIA props to other controls."
    }
  }
} as const satisfies ComponentApi<keyof FieldProps & string>;
