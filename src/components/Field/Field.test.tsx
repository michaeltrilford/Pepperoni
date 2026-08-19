import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Field } from "./Field";
import { TextInput } from "../TextInput";

describe("Field", () => {
  it("associates its label with the child control and exposes required state", () => {
    render(
      <Field id="account" label="Account" required>
        <input id="account" />
      </Field>
    );

    expect(screen.getByLabelText(/Account/)).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByText("*")).toBeVisible();
    expect(screen.getByLabelText(/Account/).parentElement).toHaveAttribute("data-field-size", "m");
  });

  it("renders optional and validation messaging", () => {
    render(
      <Field id="reference" label="Reference" optional variant="error" message="Reference is invalid">
        {(controlProps) => <input id="reference" {...controlProps} />}
      </Field>
    );

    expect(screen.getByText("(Optional)")).toBeVisible();
    expect(screen.getByText("Reference is invalid")).toHaveAttribute("data-field-message", "");
    expect(screen.getByText("Reference is invalid").parentElement).toHaveAttribute("data-field-variant", "error");
    expect(screen.getByLabelText(/Reference/)).toHaveAttribute(
      "aria-describedby", screen.getByText("Reference is invalid").id,
    );
    expect(screen.getByLabelText(/Reference/)).toHaveAttribute(
      "aria-errormessage", screen.getByText("Reference is invalid").id,
    );
  });

  it("provides its label target and error relationships to TextInput through context", () => {
    render(
      <Field label="Payroll reference" variant="error" message="Enter a valid reference">
        <TextInput variant="error" />
      </Field>
    );

    const input = screen.getByRole("textbox", { name: "Payroll reference" });
    const message = screen.getByText("Enter a valid reference");
    expect(input.id).not.toBe("");
    expect(input).toHaveAttribute("aria-describedby", message.id);
    expect(input).toHaveAttribute("aria-errormessage", message.id);
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("does not render absent label or message content", () => {
    const { container } = render(<Field><input aria-label="Unlabelled" /></Field>);

    expect(container.querySelector("label")).not.toBeInTheDocument();
    expect(container.querySelector("p")).not.toBeInTheDocument();
  });
});
