import { describe, it, expect } from "vitest";
import { VERSION } from "./index";

describe("Pepperoni UI setup", () => {
  it("exports a valid version string", () => {
    expect(VERSION).toBe("0.1.0");
  });
});
