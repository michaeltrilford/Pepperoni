import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("uses a semantic h2 when no document level is supplied", () => {
    render(<Heading>Account details</Heading>);

    expect(screen.getByRole("heading", { level: 2, name: "Account details" })).toHaveAttribute("data-heading-level", "h2");
    expect(screen.getByText("Account details")).toHaveAttribute("data-heading-size", "h2");
  });

  it("renders the requested semantic level and forwards its ref", () => {
    const ref = createRef<HTMLElement>();
    render(<Heading ref={ref} level="h3" size="h1" weight={500} style={{ opacity: 0.8 }}>Account details</Heading>);

    const heading = screen.getByRole("heading", { level: 3, name: "Account details" });
    expect(ref.current).toBe(heading);
    expect(heading).toHaveAttribute("data-heading-weight", "500");
    expect(heading).toHaveStyle({ opacity: "0.8" });
  });
});
