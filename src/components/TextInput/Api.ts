import type { ComponentApi } from "../../types/component-api";
import type { TextInputProps } from "./TextInput.types";

export const api = {
  name: "TextInput",
  element: "input",
  inherits: "InputHTMLAttributes<HTMLInputElement>",
  props: {
    size: {
      type: "s | m | l",
      values: ["s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls the input height, typography, spacing, and radius."
    },
    variant: {
      type: "default | success | warning | error",
      values: ["default", "success", "warning", "error"],
      defaultValue: "default",
      control: "select",
      description: "Applies the validation state and corresponding semantic colours."
    },
    align: {
      type: "start | end",
      values: ["start", "end"],
      defaultValue: "start",
      control: "radio",
      description: "Aligns editable text to the start or end of the input."
    },
    usage: {
      type: "table",
      values: ["table"],
      control: "select",
      description: "Enables seamless table-cell composition: inherits the nearest Table size, removes the input border and radius, and emits the table-cell control contract."
    },
    label: {
      type: "ReactNode",
      control: "text",
      description: "Accessible label associated with the native input. Required for standalone use; omit when an enclosing Field supplies the label and control context."
    },
    required: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Native input constraint that marks the control as required; distinct from the visual optional indicator."
    },
    name: {
      type: "string",
      control: "text",
      description: "Names the input for native form submission."
    },
    autoComplete: {
      type: "string",
      control: "text",
      description: "Provides the browser autocomplete token appropriate to the field purpose."
    },
    inputMode: {
      type: "string",
      control: "text",
      description: "Hints the most suitable virtual keyboard for the expected input."
    },
    "aria-label": {
      type: "string",
      control: "text",
      description: "Provides an accessible name when a visible or hidden Label cannot be used."
    },
    "aria-labelledby": {
      type: "string",
      control: "text",
      description: "References one or more elements that provide the input's accessible name."
    },
    "aria-describedby": {
      type: "string",
      control: "text",
      description: "References helper or validation text that describes the input."
    },
    "aria-errormessage": {
      type: "string",
      control: "text",
      description: "References the error message element when the input is invalid."
    },
    hideLabel: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Visually hides the label while preserving its accessible name."
    },
    optional: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Displays a visual optional indicator beside the label; does not change native input validation."
    },
    before: {
      type: "ReactNode",
      control: false,
      description: "Places content outside and before the input boundary. Use Button usage='text-input-before' for an attached action."
    },
    after: {
      type: "ReactNode",
      control: false,
      description: "Places content outside and after the input boundary. Use Button usage='text-input-after' for an attached action."
    },
    insideBefore: {
      type: "ReactElement<TextInputInsideSlotProps>",
      control: false,
      description: "Places TextInput.InsideSlot content before editable text. Use density='text' for words or symbols and density='compact' for icons or badges."
    },
    insideAfter: {
      type: "ReactElement<TextInputInsideSlotProps>",
      control: false,
      description: "Places TextInput.InsideSlot content after editable text. Use density='text' for words or symbols and density='compact' for icons or badges."
    },
    noRadius: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Removes the input boundary radius for flush composition."
    },
    noBorder: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Removes the input border for embedded composition."
    }
  }
} as const satisfies ComponentApi<keyof TextInputProps & string>;
