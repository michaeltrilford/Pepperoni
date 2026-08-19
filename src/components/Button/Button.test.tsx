import { createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a button with safe defaults and forwards its ref", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Save</Button>);

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveAttribute("data-button", "");
    expect(ref.current).toBe(button);
  });

  it("forwards native button behaviour", () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Save
      </Button>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Save" }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("emits the explicit icon-only sizing contract", () => {
    render(
      <Button iconOnly aria-label="Refresh">
        ↻
      </Button>,
    );

    expect(screen.getByRole("button", { name: "Refresh" })).toHaveAttribute(
      "data-button-icon-only",
      "",
    );
  });

  it("renders an anchor when href is provided", () => {
    render(
      <Button href="/help" target="_blank" rel="noreferrer">
        Help
      </Button>,
    );

    const link = screen.getByRole("link", { name: "Help" });
    expect(link).toHaveAttribute("href", "/help");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("prevents disabled linked actions from navigating or receiving focus", () => {
    const onClick = vi.fn();
    render(
      <Button href="/help" disabled onClick={onClick}>
        Help
      </Button>,
    );

    const action = screen.getByRole("link", { name: "Help" });
    fireEvent.click(action);

    expect(action).not.toHaveAttribute("href");
    expect(action).toHaveAttribute("aria-disabled", "true");
    expect(action).toHaveAttribute("tabindex", "-1");
    expect(onClick).not.toHaveBeenCalled();
  });

  it("emits its TextInput composition contract only for attached usage", () => {
    const { rerender } = render(<Button>Check</Button>);
    expect(screen.getByRole("button", { name: "Check" })).not.toHaveAttribute(
      "data-text-input-slot-button",
    );

    rerender(
      <Button usage="text-input-before" variant="primary">
        Check
      </Button>,
    );
    expect(screen.getByRole("button", { name: "Check" })).toHaveAttribute(
      "data-text-input-slot-button",
      "before",
    );
  });
});
