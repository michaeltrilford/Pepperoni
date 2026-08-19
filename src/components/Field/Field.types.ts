import type React from "react";

export type FieldSize = "s" | "m" | "l";
export type FieldVariant = "default" | "success" | "warning" | "error";

export interface FieldControlAccessibilityProps {
  "aria-describedby"?: string;
  "aria-errormessage"?: string;
  "aria-invalid"?: true;
}

export interface FieldProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  size?: FieldSize;
  variant?: FieldVariant;
  label?: React.ReactNode;
  hideLabel?: boolean;
  optional?: boolean;
  required?: boolean;
  message?: React.ReactNode;
  /** Customises the generated message id used by the control relationship. */
  messageId?: string;
  /** Render-function children receive the ARIA relationship props for the intended control. */
  children?: React.ReactNode | ((controlProps: FieldControlAccessibilityProps) => React.ReactNode);
}

export interface FieldContextValue {
  controlId: string;
  controlProps: FieldControlAccessibilityProps;
}
