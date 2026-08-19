import type React from "react";
import type { FieldSize, FieldVariant } from "../Field/Field.types";

export type TextInputInsideSlotDensity = "text" | "compact";
export type TextInputInsideSlotPlacement = "before" | "after";

export interface TextInputInsideSlotProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Uses text spacing for words and symbols, or compact spacing for icons and badges. */
  density?: TextInputInsideSlotDensity;
  children: React.ReactNode;
}

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: FieldSize;
  variant?: FieldVariant;
  align?: "start" | "end";
  usage?: "table";
  /** Required for standalone use; omit when an enclosing Field supplies the label. */
  label?: React.ReactNode;
  hideLabel?: boolean;
  optional?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  insideBefore?: React.ReactElement<TextInputInsideSlotProps>;
  insideAfter?: React.ReactElement<TextInputInsideSlotProps>;
  noRadius?: boolean;
  noBorder?: boolean;
}

export type InputProps = TextInputProps;

export type ResolvedTextInputInsideSlotProps = TextInputInsideSlotProps & {
  /** @internal Supplied by TextInput according to the slot prop used. */
  placement?: TextInputInsideSlotPlacement;
  /** @internal Inherited from the resolved TextInput size. */
  size?: TextInputProps["size"];
};
