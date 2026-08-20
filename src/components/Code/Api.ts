import type { ComponentApi } from "../../types/component-api";
import type { CodeProps } from "./Code.types";

export const api = {
  name: "Code",
  element: "code",
  inherits: "HTMLAttributes<HTMLElement>",
  props: {
    variant: {
      type: "inline | block",
      values: ["inline", "block"],
      defaultValue: "inline",
      control: "select",
      description: "Controls whether the code renders as an inline chip or a preformatted block."
    },
    size: {
      type: "inherit | s | m | l",
      values: ["inherit", "s", "m", "l"],
      defaultValue: "inherit",
      control: "select",
      description: "Sizing scale for font-size. 'inherit' dynamically scales relative to parent typography (0.85em)."
    },
    children: {
      type: "ReactNode",
      control: "text",
      description: "Content to display inside the code element."
    }
  }
} as const satisfies ComponentApi<keyof CodeProps & string>;
