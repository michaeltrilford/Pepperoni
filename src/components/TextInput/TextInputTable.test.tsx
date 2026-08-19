import { createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Table } from "../Table";
import { Text } from "../Text";
import { TextInput } from "./TextInput";

describe("TextInput table composition", () => {
  it("forwards its native input ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<TextInput ref={ref} label="Reference" />);
    expect(ref.current).toBe(screen.getByRole("textbox", { name: "Reference" }));
  });
  it("emits the table-cell control contract only when table usage is active", () => {
    const { rerender } = render(<TextInput label="Reference" />);

    expect(screen.getByRole("textbox", { name: "Reference" }).closest("[data-table-cell-control]"))
      .not.toBeInTheDocument();

    rerender(<TextInput label="Reference" usage="table" />);

    expect(screen.getByRole("textbox", { name: "Reference" }).closest("[data-table-cell-control]"))
      .toHaveAttribute("data-table-cell-control", "");
  });

  it("inherits the nearest table size while allowing an explicit override", () => {
    const { rerender } = render(
      <Table size="s">
        <tbody><tr><Table.Cell><TextInput label="Reference" usage="table" /></Table.Cell></tr></tbody>
      </Table>
    );

    const inheritedContainer = screen.getByRole("textbox", { name: "Reference" }).closest("[data-text-input-size]");
    expect(inheritedContainer).toHaveAttribute("data-text-input-size", "s");

    rerender(
      <Table size="s">
        <tbody><tr><Table.Cell><TextInput label="Reference" usage="table" size="l" /></Table.Cell></tr></tbody>
      </Table>
    );

    const overriddenContainer = screen.getByRole("textbox", { name: "Reference" }).closest("[data-text-input-size]");
    expect(overriddenContainer).toHaveAttribute("data-text-input-size", "l");
  });

  it("exposes explicit inside-slot density and placement", () => {
    render(
      <TextInput
        label="Amount"
        insideBefore={<TextInput.InsideSlot density="text"><Text>$</Text></TextInput.InsideSlot>}
        insideAfter={<TextInput.InsideSlot density="compact"><span>AUD</span></TextInput.InsideSlot>}
      />
    );

    expect(screen.getByText("$").closest("[data-inside-slot-density]"))
      .toHaveAttribute("data-inside-slot-placement", "before");
    expect(screen.getByText("AUD").closest("[data-inside-slot-density]"))
      .toHaveAttribute("data-inside-slot-density", "compact");
  });

  it("does not steal focus from interactive slot descendants", () => {
    render(
      <TextInput
        label="Search"
        insideAfter={<TextInput.InsideSlot><button type="button">Options</button></TextInput.InsideSlot>}
      />
    );

    const button = screen.getByRole("button", { name: "Options" });
    button.focus();
    fireEvent.mouseDown(button);

    expect(button).toHaveFocus();
  });

  it("supports the complete embedded-control treatment", () => {
    render(
      <TextInput
        label="Amount"
        align="end"
        before={<span>Before</span>}
        after={<span>After</span>}
        usage="table"
        disabled
      />
    );

    expect(screen.getByRole("textbox", { name: "Amount" })).toBeDisabled();
  });
});
