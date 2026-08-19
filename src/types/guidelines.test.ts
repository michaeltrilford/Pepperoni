import { describe, expect, it } from "vitest";
import { getStoryMetaFromManifest } from "./guidelines";

describe("Storybook manifest metadata", () => {
  it("uses authored source for a custom-render story", () => {
    const meta = getStoryMetaFromManifest("TextInput", "size");

    expect(meta.parameters?.docs.source).toMatchObject({
      language: "tsx",
      code: expect.stringContaining("<Box flex direction=\"column\" gap=\"300\">")
    });
  });

  it("leaves basic stories to Storybook source generation", () => {
    const meta = getStoryMetaFromManifest("TextInput", "with-label");

    expect(meta.parameters?.docs).not.toHaveProperty("source");
  });
});
