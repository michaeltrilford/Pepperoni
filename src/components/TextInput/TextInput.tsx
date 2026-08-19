import {
  cloneElement,
  forwardRef,
  isValidElement,
  useContext,
  useId,
  useImperativeHandle,
  useRef,
  type ReactElement,
} from "react";
import * as sx from "@stylexjs/stylex";
import type {
  TextInputProps,
  ResolvedTextInputInsideSlotProps,
} from "./TextInput.types";
import { Label } from "../Label";
import { FieldContext } from "../Field/FieldContext";
import { TableSizeContext } from "../Table/TableContext";
import { Text, type TextProps } from "../Text";
import { styles } from "./TextInput.styles";

const insideSlotSizeStyles = {
  s: { before: styles.insideBeforeS, after: styles.insideAfterS },
  m: { before: styles.insideBeforeM, after: styles.insideAfterM },
  l: { before: styles.insideBeforeL, after: styles.insideAfterL },
};

const compactSlotSizeStyles = {
  s: { before: styles.compactBeforeS, after: styles.compactAfterS },
  m: { before: styles.compactBeforeM, after: styles.compactAfterM },
  l: { before: styles.compactBeforeL, after: styles.compactAfterL },
};

const TextInputInsideSlot = ({
  density = "text",
  placement = "before",
  size = "m",
  children,
  className,
  ...props
}: ResolvedTextInputInsideSlotProps) => {
  const child =
    isValidElement<TextProps>(children) && children.type === Text
      ? cloneElement(children, { size, variant: "secondary" })
      : children;

  const styleProps = sx.props(
    styles.insideSlot,
    density === "compact" ? compactSlotSizeStyles[size][placement] : insideSlotSizeStyles[size][placement],
  );
  const classes = [styleProps.className, className].filter(Boolean).join(" ");

  return (
    <span
      {...styleProps}
      {...props}
      className={classes}
      data-inside-slot-density={density}
      data-inside-slot-placement={placement}
    >
      {child}
    </span>
  );
};

TextInputInsideSlot.displayName = "TextInput.InsideSlot";

/**
 * Text Input Component supporting slots, sizes, variants, and integrated accessible label.
 */
const TextInputRoot = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id: customId,
      size,
      variant = "default",
      align = "start",
      usage,
      label,
      hideLabel = false,
      optional = false,
      before,
      after,
      insideBefore,
      insideAfter,
      noRadius = false,
      noBorder = false,
      className,
      disabled,
      onFocus,
      "aria-describedby": ariaDescribedBy,
      "aria-errormessage": ariaErrorMessage,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const fieldContext = useContext(FieldContext);
    const usesFieldContext = fieldContext !== null && label == null;

    const inputId = customId ?? (usesFieldContext ? fieldContext.controlId : generatedId);
    const tableContext = useContext(TableSizeContext);
    const resolvedSize = size ?? (usage === "table" ? tableContext?.size : null) ?? "m";
    const isTableUsage = usage === "table";

    const resolvedInsideBefore =
      insideBefore &&
      cloneElement(insideBefore as ReactElement<ResolvedTextInputInsideSlotProps>, {
        placement: "before",
        size: resolvedSize,
      });
    const resolvedInsideAfter =
      insideAfter &&
      cloneElement(insideAfter as ReactElement<ResolvedTextInputInsideSlotProps>, {
        placement: "after",
        size: resolvedSize,
      });

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const sizeStyle = {
      s: styles.sizeS,
      m: styles.sizeM,
      l: styles.sizeL,
    }[resolvedSize];

    const variantStyle = {
      default: styles.variantDefault,
      success: styles.variantSuccess,
      warning: styles.variantWarning,
      error: styles.variantError,
    }[variant];

    const containerGapStyle = resolvedSize === "s" ? styles.containerGapS : styles.containerGapML;

    const containerStyleProps = sx.props(styles.container, containerGapStyle);
    const groupStyleProps = sx.props(styles.group, sizeStyle);
    const wrapperStyleProps = sx.props(
      styles.wrapper,
      sizeStyle,
      variantStyle,
      Boolean(before) && styles.hasBefore,
      Boolean(after) && styles.hasAfter,
      noRadius && styles.noRadius,
      noBorder && styles.noBorder,
      isTableUsage && styles.tableUsage,
      disabled && styles.disabled,
    );

    const wrapperClasses = [wrapperStyleProps.className, className].filter(Boolean).join(" ");

    const inputPaddingStyle =
      resolvedSize === "s" ? styles.inputPaddingS : resolvedSize === "m" ? styles.inputPaddingM : styles.inputPaddingL;

    const inputStyleProps = sx.props(
      styles.input,
      align === "end" ? styles.alignEnd : styles.alignStart,
      inputPaddingStyle,
      Boolean(insideBefore) && styles.inputHasBefore,
      Boolean(insideAfter) && styles.inputHasAfter,
    );

    return (
      <div
        {...containerStyleProps}
        data-text-input-size={resolvedSize}
        data-table-cell-control={isTableUsage ? "" : undefined}
      >
        {label != null && (
          <Label htmlFor={inputId} label={label} hideLabel={hideLabel} optional={optional} size={resolvedSize} />
        )}

        <div {...groupStyleProps}>
          {before && <div {...sx.props(styles.outsideSlot)}>{before}</div>}

          <div
            {...wrapperStyleProps}
            className={wrapperClasses}
            onMouseDown={(event) => {
              const target = event.target as HTMLElement;

              if (
                target !== inputRef.current &&
                !target.closest(
                  "button, a, input, select, textarea, [role='button'], [tabindex], [contenteditable='true']",
                )
              ) {
                event.preventDefault();
                inputRef.current?.focus();
              }
            }}
          >
            {resolvedInsideBefore && resolvedInsideBefore}
            <input
              {...inputStyleProps}
              ref={inputRef}
              id={inputId}
              disabled={disabled}
              aria-describedby={
                ariaDescribedBy ?? (usesFieldContext ? fieldContext.controlProps["aria-describedby"] : undefined)
              }
              aria-errormessage={
                ariaErrorMessage ?? (usesFieldContext ? fieldContext.controlProps["aria-errormessage"] : undefined)
              }
              aria-invalid={
                ariaInvalid ??
                (usesFieldContext ? fieldContext.controlProps["aria-invalid"] : undefined) ??
                (variant === "error" ? true : undefined)
              }
              onFocus={(event) => {
                onFocus?.(event);

                if ((usage === "table" || align === "end") && event.currentTarget.matches(":focus-visible")) {
                  const input = event.currentTarget;
                  const caretPosition = input.value.length;

                  requestAnimationFrame(() => {
                    if (input.selectionStart !== null) {
                      input.setSelectionRange(caretPosition, caretPosition);
                    }
                  });
                }
              }}
              {...props}
            />
            {resolvedInsideAfter && resolvedInsideAfter}
          </div>

          {after && <div {...sx.props(styles.outsideSlot)}>{after}</div>}
        </div>
      </div>
    );
  },
);

TextInputRoot.displayName = "TextInput";

export const TextInput = Object.assign(TextInputRoot, {
  InsideSlot: TextInputInsideSlot,
});
