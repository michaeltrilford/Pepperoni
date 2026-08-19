import type React from "react";
import type { FieldSize } from "../Field/Field.types";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: FieldSize;
  label: React.ReactNode;
  hideLabel?: boolean;
  optional?: boolean;
  required?: boolean;
}
