import { FC, useId } from "react";
import * as sx from "@stylexjs/stylex";
import { Label } from "../Label";
import { Text } from "../Text";
import { styles } from "./Field.styles";
import { FieldContext } from "./FieldContext";
import type { FieldProps } from "./Field.types";

const messageVariants = {
  default: "secondary",
  success: "positive",
  warning: "warning",
  error: "attention"
} as const;

/**
 * Field wrapper molecule that composes Label, form controls (children), and validation message text.
 */
export const Field: FC<FieldProps> = ({
  id,
  size = "m",
  variant = "default",
  label,
  hideLabel = false,
  optional = false,
  required = false,
  message,
  messageId: customMessageId,
  children,
  className,
  style,
  ...props
}) => {
  const generatedControlId = useId();
  const generatedMessageId = useId();

  const controlId = id ?? `${generatedControlId}-control`;
  const messageId = customMessageId ?? `${generatedMessageId}-message`;
  const hasMessage = Boolean(message);

  const controlProps = {
    "aria-describedby": hasMessage ? messageId : undefined,
    "aria-errormessage": hasMessage && variant === "error" ? messageId : undefined,
    "aria-invalid": variant === "error" ? true as const : undefined,
  };

  const sizeStyle = {
    s: styles.sizeS,
    m: styles.sizeM,
    l: styles.sizeL,
  }[size];

  const styleProps = sx.props(styles.root, sizeStyle);
  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return (
    <FieldContext.Provider value={{ controlId, controlProps }}>
      <div
        {...styleProps}
        className={classes}
        data-field-size={size}
        data-field-variant={variant}
        style={{ ...styleProps.style, ...style }}
        {...props}
      >
        {label && (
          <Label
            htmlFor={controlId}
            label={label}
            hideLabel={hideLabel}
            optional={optional && !required}
            required={required}
            size={size}
          />
        )}

        {typeof children === "function" ? children(controlProps) : children}

        {message && (
          <Text
            data-field-message=""
            id={messageId}
            size={size}
            variant={messageVariants[variant]}
          >
            {message}
          </Text>
        )}
      </div>
    </FieldContext.Provider>
  );
};

Field.displayName = "Field";
