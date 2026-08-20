import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Code } from "./Code";

describe("Code", () => {
  it("renders inline code element by default", () => {
    render(<Code data-testid="inline-code">npm test</Code>);

    const code = screen.getByTestId("inline-code");
    expect(code.tagName).toBe("CODE");
    expect(code.getAttribute("data-code-variant")).toBe("inline");
    expect(code.textContent).toBe("npm test");
  });

  it("renders preformatted code block when variant is block", () => {
    render(
      <Code variant="block" data-testid="block-code">
        {"const x = 1;"}
      </Code>
    );

    const pre = screen.getByTestId("block-code");
    expect(pre.tagName).toBe("PRE");
    expect(pre.getAttribute("data-code-variant")).toBe("block");
    expect(pre.querySelector("code")).not.toBeNull();
  });

  it("renders Code.Block compound subcomponent", () => {
    render(
      <Code.Block data-testid="code-block">
        {"const hello = 'world';"}
      </Code.Block>
    );

    const pre = screen.getByTestId("code-block");
    expect(pre.tagName).toBe("PRE");
    expect(pre.getAttribute("data-code-variant")).toBe("block");
  });

  it("supports explicit size attributes", () => {
    render(<Code size="s" data-testid="sized-code">small code</Code>);

    const code = screen.getByTestId("sized-code");
    expect(code.getAttribute("data-code-size")).toBe("s");
  });
});
