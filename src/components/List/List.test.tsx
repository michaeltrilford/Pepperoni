import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { List } from "./List";

describe("List", () => {
  it("renders an unordered list by default", () => {
    render(
      <List data-testid="list">
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List>
    );

    const list = screen.getByTestId("list");
    expect(list.tagName).toBe("UL");
    expect(list.getAttribute("data-list-type")).toBe("unordered");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("renders an ordered list when type is 'ordered'", () => {
    render(
      <List type="ordered" data-testid="ordered-list">
        <List.Item>Step 1</List.Item>
        <List.Item>Step 2</List.Item>
      </List>
    );

    const list = screen.getByTestId("ordered-list");
    expect(list.tagName).toBe("OL");
    expect(list.getAttribute("data-list-type")).toBe("ordered");
  });

  it("applies size and gap attributes", () => {
    render(
      <List size="s" gap="300" data-testid="styled-list">
        <List.Item>Small item</List.Item>
      </List>
    );

    const list = screen.getByTestId("styled-list");
    expect(list.getAttribute("data-list-size")).toBe("s");
    expect(list.getAttribute("data-list-gap")).toBe("300");
  });
});
