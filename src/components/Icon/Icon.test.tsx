import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("is hidden from assistive technology when decorative", () => {
    const { container } = render(<Icon name="search" />);

    expect(container.querySelector("[data-icon]")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(container.querySelector("[data-icon]")).toHaveAttribute(
      "data-icon-size",
      "m",
    );
    expect(container.querySelector("[data-icon-svg]")).toHaveAttribute(
      "focusable",
      "false",
    );
  });

  it("uses an accessible image role when labelled", () => {
    render(<Icon name="search" label="Search" />);

    expect(screen.getByRole("img", { name: "Search" })).not.toHaveAttribute(
      "aria-hidden",
    );
  });

  it("renders the counter-clockwise triangle circle icon", () => {
    const { container } = render(
      <Icon name="counter-clockwise-triangle-circle" />,
    );

    expect(container.querySelector("[data-icon]")).toHaveAttribute(
      "data-icon-name",
      "counter-clockwise-triangle-circle",
    );
    expect(container.querySelector("path")).toHaveAttribute(
      "fill",
      "currentColor",
    );
  });

  it("forwards span attributes", () => {
    render(
      <Icon
        name="search"
        size="l"
        label="Search"
        data-testid="search-icon"
        style={{ opacity: 0.8 }}
      />,
    );

    expect(screen.getByTestId("search-icon")).toHaveAttribute("data-icon", "");
    expect(screen.getByTestId("search-icon")).toHaveAttribute(
      "data-icon-name",
      "search",
    );
    expect(screen.getByTestId("search-icon")).toHaveAttribute(
      "data-icon-size",
      "l",
    );
    expect(screen.getByTestId("search-icon")).toHaveStyle({ opacity: "0.8" });
  });
});
