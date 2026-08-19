import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Table } from "./Table";

describe("Table", () => {
  it("renders native cells with stable alignment state and content behaviour", () => {
    render(
      <Table
        variant="grid"
        layout="fixed"
        columns={[{ width: "8rem" }, { ratio: 1 }]}
      >
        <thead>
          <tr>
            <Table.HeaderCell align="end">Amount</Table.HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Table.Cell wrap={false} ellipsis>
              1,000
            </Table.Cell>
          </tr>
        </tbody>
      </Table>,
    );

    expect(screen.getByRole("table")).toHaveStyle({ tableLayout: "fixed" });
    expect(
      screen.getByRole("columnheader", { name: "Amount" }),
    ).toHaveAttribute("data-table-cell-align", "end");
    expect(
      screen.getByRole("columnheader", { name: "Amount" }),
    ).toHaveAttribute("scope", "col");
    expect(
      screen.getByRole("cell", { name: "1,000" }).firstElementChild,
    ).toBeInstanceOf(HTMLDivElement);
    expect(
      screen.getByRole("cell", { name: "1,000" }).firstElementChild,
    ).toHaveAttribute("data-table-cell-content-ellipsis", "");
    expect(screen.getByRole("table").querySelectorAll("col")).toHaveLength(2);
  });

  it("covers each content alignment and truncation mode", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <Table.Cell align="start">Start</Table.Cell>
            <Table.Cell align="center">Centre</Table.Cell>
            <Table.Cell align="end">End</Table.Cell>
            <Table.Cell clamp={2}>Clamped</Table.Cell>
          </tr>
        </tbody>
      </Table>,
    );

    expect(
      screen.getByRole("cell", { name: "Start" }).firstElementChild,
    ).toHaveAttribute("data-table-cell-content-align", "start");
    expect(
      screen.getByRole("cell", { name: "Centre" }).firstElementChild,
    ).toHaveAttribute("data-table-cell-content-align", "center");
    expect(
      screen.getByRole("cell", { name: "End" }).firstElementChild,
    ).toHaveAttribute("data-table-cell-content-align", "end");
    expect(
      screen.getByRole("cell", { name: "Clamped" }).firstElementChild,
    ).toHaveAttribute("data-table-cell-content-clamp", "2");
  });

  it("keeps header semantics while rendering a native header action", () => {
    const onAction = vi.fn();
    render(
      <Table>
        <thead>
          <tr>
            <Table.HeaderCell
              onAction={onAction}
              actionLabel="Show token names"
            >
              Computed Value
            </Table.HeaderCell>
          </tr>
        </thead>
      </Table>,
    );

    const action = screen.getByRole("button", { name: "Show token names" });
    fireEvent.click(action);

    expect(action.closest("th")).toHaveAttribute("scope", "col");
    expect(action).toHaveAttribute("type", "button");
    expect(onAction).toHaveBeenCalledOnce();
  });

  it("makes horizontal overflow keyboard accessible and names the region", () => {
    render(
      <Table overflow="auto" overflowLabel="Payments table scroll area">
        <tbody>
          <tr>
            <Table.Cell>Payment</Table.Cell>
          </tr>
        </tbody>
      </Table>,
    );

    expect(
      screen.getByRole("region", { name: "Payments table scroll area" }),
    ).toHaveAttribute("tabindex", "0");
  });

  it("forwards pointer events while maintaining row highlight state", () => {
    const onPointerOver = vi.fn();
    const onPointerLeave = vi.fn();
    render(
      <Table onPointerOver={onPointerOver} onPointerLeave={onPointerLeave}>
        <tbody>
          <tr>
            <Table.Cell>Payment</Table.Cell>
          </tr>
        </tbody>
      </Table>,
    );

    fireEvent.pointerOver(screen.getByRole("cell", { name: "Payment" }));
    fireEvent.pointerOver(screen.getByRole("cell", { name: "Payment" }));
    fireEvent.pointerLeave(screen.getByRole("table"));

    expect(onPointerOver).toHaveBeenCalledTimes(2);
    expect(onPointerLeave).toHaveBeenCalledOnce();
  });

  it("ignores hover highlighting for grid tables and non-row targets", () => {
    const { rerender } = render(
      <Table variant="grid">
        <tbody>
          <tr>
            <Table.Cell>Payment</Table.Cell>
          </tr>
        </tbody>
      </Table>,
    );
    fireEvent.pointerOver(screen.getByRole("cell", { name: "Payment" }));

    rerender(
      <Table>
        <tbody>
          <tr>
            <Table.Cell>Payment</Table.Cell>
          </tr>
        </tbody>
      </Table>,
    );
    fireEvent.pointerOver(screen.getByRole("table"));
    fireEvent.pointerLeave(screen.getByRole("table"));

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("owns the edge treatment for a full-bleed Card composition", () => {
    const { container } = render(
      <Table usage="card">
        <tbody>
          <tr>
            <Table.Cell>Payment</Table.Cell>
          </tr>
        </tbody>
      </Table>,
    );

    expect(screen.getByRole("table")).toHaveAttribute(
      "data-table-usage",
      "card",
    );
    expect(
      container.querySelector("[data-table-card-edge-mask]"),
    ).not.toBeInTheDocument();
  });
});
