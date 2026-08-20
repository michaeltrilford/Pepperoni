import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders its content and forwards span attributes", () => {
    render(<Badge size="s" title="Status" style={{ opacity: 0.8 }}>Active</Badge>);

    const badge = screen.getByText("Active");
    expect(badge).toHaveAttribute("data-badge", "");
    expect(badge).toHaveAttribute("data-badge-size", "s");
    expect(badge).toHaveAttribute("data-badge-variant", "neutral");
    expect(badge).toHaveAttribute("title", "Status");
    expect(badge).toHaveStyle({ opacity: "0.8" });
  });

  it("applies semantic variant data attributes", () => {
    render(
      <>
        <Badge variant="positive">Done</Badge>
        <Badge variant="caution">Pending</Badge>
        <Badge variant="attention">Failed</Badge>
      </>,
    );

    expect(screen.getByText("Done")).toHaveAttribute("data-badge-variant", "positive");
    expect(screen.getByText("Pending")).toHaveAttribute("data-badge-variant", "caution");
    expect(screen.getByText("Failed")).toHaveAttribute("data-badge-variant", "attention");
  });

  it("applies named color and custom token string attributes", () => {
    render(
      <>
        <Badge color="pepperoni">Pepperoni</Badge>
        <Badge color="var(--pepperoni-500)">Custom Token</Badge>
      </>,
    );

    expect(screen.getByText("Pepperoni")).toHaveAttribute("data-badge-color", "pepperoni");
    const custom = screen.getByText("Custom Token");
    expect(custom).toHaveAttribute("data-badge-color", "var(--pepperoni-500)");
    expect(custom).toHaveStyle({ backgroundColor: "var(--pepperoni-500)" });
  });
});
