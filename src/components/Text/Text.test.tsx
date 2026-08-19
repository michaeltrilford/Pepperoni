import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  it("renders a paragraph with stable visual state", () => {
    render(<Text size="l" variant="positive" weight={600}>Saved</Text>);

    const text = screen.getByText("Saved");
    expect(text.tagName).toBe("P");
    expect(text).toHaveAttribute("data-text-size", "l");
    expect(text).toHaveAttribute("data-text-variant", "positive");
    expect(text).toHaveAttribute("data-text-weight", "600");
  });

  it("forwards its ref and consumer attributes", () => {
    const ref = createRef<HTMLParagraphElement>();
    render(<Text ref={ref} id="message" className="consumer" style={{ opacity: 0.8 }}>Message</Text>);

    expect(ref.current).toBe(screen.getByText("Message"));
    expect(ref.current).toHaveAttribute("id", "message");
    expect(ref.current).toHaveClass("consumer");
    expect(ref.current).toHaveStyle({ opacity: "0.8" });
  });
});
