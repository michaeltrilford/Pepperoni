import type { ComponentApi } from "../../types/component-api";
import type { BoxProps } from "./Box.types";

export const api = {
  name: "Box",
  element: "div",
  inherits: "HTMLAttributes<HTMLDivElement>",
  props: {
    flex: {
      type: "boolean",
      defaultValue: false,
      control: "boolean",
      description: "Enables flex layout."
    },
    direction: {
      type: "row | column",
      values: ["row", "column"],
      defaultValue: "row",
      control: "select",
      description: "Controls the main-axis direction when flex is enabled."
    },
    gap: {
      type: "000 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800",
      values: ["000", "100", "200", "300", "400", "500", "600", "700", "800"],
      control: "select",
      description: "Applies a spacing token between flex items."
    },
    align: {
      type: "start | center | end | stretch | baseline",
      values: ["start", "center", "end", "stretch", "baseline"],
      control: "select",
      description: "Aligns flex items on the cross axis."
    },
    justify: {
      type: "start | center | end | between | around | evenly",
      values: ["start", "center", "end", "between", "around", "evenly"],
      control: "select",
      description: "Distributes flex items on the main axis."
    },
    wrap: {
      type: "nowrap | wrap | reverse",
      values: ["nowrap", "wrap", "reverse"],
      defaultValue: "nowrap",
      control: "select",
      description: "Controls whether flex items wrap onto additional lines."
    }
  }
} as const satisfies ComponentApi<keyof BoxProps & string>;
