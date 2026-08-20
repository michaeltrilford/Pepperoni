import type { ComponentApi } from "../../types/component-api";
import type { ButtonProps } from "./Button.types";

export const api = {
  name: "Button",
  element: "button",
  inherits: "ButtonHTMLAttributes<HTMLButtonElement>",
  props: {
    variant: {
      type: "primary | secondary | tertiary | attention | link",
      values: ["primary", "secondary", "tertiary", "attention", "link"],
      defaultValue: "primary",
      control: "select",
      description: "Controls the visual emphasis of the action.",
    },
    size: {
      type: "xs | s | m | l",
      values: ["xs", "s", "m", "l"],
      defaultValue: "m",
      control: "select",
      description: "Controls the button height, spacing, and typography.",
    },
    iconOnly: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description:
        "Makes an icon-only action square. Provide an accessible name with aria-label.",
    },
    usage: {
      type: "text-input-before | text-input-after",
      values: ["text-input-before", "text-input-after"],
      control: "select",
      description:
        "Attaches Button to the corresponding TextInput outside slot, inherits its height and typography, and applies the secondary treatment with joined edges.",
    },
    type: {
      type: "button | submit | reset",
      values: ["button", "submit", "reset"],
      defaultValue: "button",
      control: "select",
      description:
        "Controls the native button action; use submit or reset deliberately inside forms.",
    },
    href: {
      type: "string",
      control: "text",
      description: "Renders the action as an anchor when provided.",
    },
    target: {
      type: "_self | _blank | _parent | _top",
      values: ["_self", "_blank", "_parent", "_top"],
      control: "select",
      description: "Sets the anchor target when href is provided.",
    },
    rel: {
      type: "string",
      control: "text",
      description: "Sets the anchor relationship when href is provided.",
    },
    download: {
      type: "string | boolean",
      control: "text",
      description: "Sets the download behaviour when href is provided.",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description:
        "Disables a native button. For linked actions it removes href and keyboard focus, prevents activation, and exposes aria-disabled.",
    },
    "aria-label": {
      type: "string",
      control: "text",
      description:
        "Provides an accessible name, required when the button has no visible text.",
    },
    "aria-pressed": {
      type: "boolean",
      control: "boolean",
      description: "Exposes pressed state for toggle buttons.",
    },
    "aria-expanded": {
      type: "boolean",
      control: "boolean",
      description: "Exposes expanded state for disclosure controls.",
    },
    "aria-controls": {
      type: "string",
      control: "text",
      description:
        "Identifies the controlled element for a disclosure or toggle action.",
    },
  },
} as const satisfies ComponentApi<keyof ButtonProps & string>;
