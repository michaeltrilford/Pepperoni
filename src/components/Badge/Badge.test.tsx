import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders its content and forwards span attributes", () => {
    render(<Badge size="s" title="Status" style={{ opacity: 0.8 }}>Active</Badge>);

    const badge = screen.getByText("Active");
    expect(badge).toHaveAttribute("data-badge", "");
    expect(badge).toHaveAttribute("data-badge-size", "s");
    expect(badge).toHaveAttribute("title", "Status");
    expect(badge).toHaveStyle({ opacity: "0.8" });
  });
});
