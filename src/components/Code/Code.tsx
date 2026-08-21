import { forwardRef } from "react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import * as sx from "@stylexjs/stylex";
import { styles } from "./Code.styles";
import type { CodeBlockProps, CodeProps } from "./Code.types";

const CodeBlock = forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ size = "inherit", tabIndex = 0, className, style, children, ...props }, ref) => {
    const sizeStyle =
      size === "s"
        ? styles.sizeS
        : size === "m"
          ? styles.sizeM
          : size === "l"
            ? styles.sizeL
            : undefined;

    const styleProps = sx.props(styles.block, sizeStyle);
    const classes = [styleProps.className, className].filter(Boolean).join(" ");
    const innerProps = sx.props(styles.blockInner);

    return (
      <pre
        {...styleProps}
        ref={ref}
        tabIndex={tabIndex}
        className={classes}
        data-code-variant="block"
        data-code-size={size}
        style={{ ...styleProps.style, ...style }}
        {...props}
      >
        <code {...innerProps}>{children}</code>
      </pre>
    );
  }
);

CodeBlock.displayName = "Code.Block";

export interface CodeComponent
  extends ForwardRefExoticComponent<
    CodeProps & RefAttributes<HTMLElement>
  > {
  Block: typeof CodeBlock;
}

/** Code typography component for inline code chips and preformatted code blocks. */
export const Code = forwardRef<HTMLElement, CodeProps>(
  (
    {
      variant = "inline",
      size = "inherit",
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    if (variant === "block") {
      return (
        <CodeBlock
          ref={ref as any}
          size={size}
          className={className}
          style={style}
          {...(props as any)}
        >
          {children}
        </CodeBlock>
      );
    }

    const sizeStyle =
      size === "s"
        ? styles.sizeS
        : size === "m"
          ? styles.sizeM
          : size === "l"
            ? styles.sizeL
            : undefined;

    const styleProps = sx.props(styles.inline, sizeStyle);
    const classes = [styleProps.className, className].filter(Boolean).join(" ");

    return (
      <code
        {...styleProps}
        ref={ref}
        className={classes}
        data-code-variant="inline"
        data-code-size={size}
        style={{ ...styleProps.style, ...style }}
        {...props}
      >
        {children}
      </code>
    );
  }
) as unknown as CodeComponent;

Code.displayName = "Code";
Code.Block = CodeBlock;
