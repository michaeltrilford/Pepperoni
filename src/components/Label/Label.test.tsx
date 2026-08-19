import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "./Label";

describe("Label", () => {
  it("associates with a control and exposes stable size state", () => {
    render(<><Label htmlFor="email" label="Email" size="l" /><input id="email" /></>);

    const label = screen.getByText("Email").closest("label");
    expect(screen.getByLabelText("Email")).toBeInstanceOf(HTMLInputElement);
    expect(label).toHaveAttribute("data-label-size", "l");
    expect(label).toHaveAttribute("data-label-hidden", "false");
  });

  it("keeps hidden labels accessible and gives required precedence over optional", () => {
    render(<Label label="Account" hideLabel optional required />);

    const label = screen.getByText("Account").closest("label");
    expect(label).toHaveAttribute("data-label-hidden", "true");
    expect(screen.queryByText("(Optional)")).not.toBeInTheDocument();
    expect(screen.getByText("*")).toHaveAttribute("data-label-required", "");
  });

  it("does not render without label content", () => {
    const { container } = render(<Label label={null} />);
    expect(container).toBeEmptyDOMElement();
  });
});
