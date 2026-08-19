import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("exposes its surface choices as semantic data", () => {
    render(<Card data-testid="card" size="l" surface="200" surfaceDirection="depth" />);

    const card = screen.getByTestId("card");
    expect(card).toHaveAttribute("data-size", "l");
    expect(card).toHaveAttribute("data-surface", "200");
    expect(card).toHaveAttribute("data-surface-direction", "depth");
    expect(card).toHaveAttribute("data-card-effect", "depth-200");
  });

  it("allows consumer styles to override the default effect", () => {
    render(<Card data-testid="card" padding={false} style={{ boxShadow: "none" }} />);

    expect(screen.getByTestId("card")).toHaveStyle({ boxShadow: "none" });
  });
});
