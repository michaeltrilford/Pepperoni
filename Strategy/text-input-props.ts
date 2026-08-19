import type React from "react";

export type FieldSize = "S" | "M" | "L";

export type FieldVariant = "default" | "success" | "warning" | "error";

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: FieldSize;
  variant?: FieldVariant;
  label?: React.ReactNode;
  hideLabel?: boolean;
  optional?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  insideBefore?: React.ReactNode;
  insideAfter?: React.ReactNode;
  noRadius?: boolean;
  noBorder?: boolean;
}

// Alias for flexibility
export type InputProps = TextInputProps;

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: FieldSize;
  label: React.ReactNode;
  optional?: boolean;
  required?: boolean;
}

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: FieldSize;
  variant?: FieldVariant;
  label?: React.ReactNode;
  hideLabel?: boolean;
  optional?: boolean;
  required?: boolean;
  message?: React.ReactNode;
  children?: React.ReactNode;
}
