import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Heading } from "./Heading";
import { getManifestArgTypes, getManifestComponentDescription, getStoryMetaFromManifest } from "../../types/guidelines";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getManifestComponentDescription("Heading") } } },
  args: { children: "Heading content", size: "h2", level: "h2", weight: 700 },
  argTypes: getManifestArgTypes("Heading"),
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  ...getStoryMetaFromManifest("Heading", "default"),
  args: { children: "Artisan Pizza Menu", size: "h2", level: "h1" },
  render: (args) => <Heading {...args} />,
  play: async ({ canvas }) => {
    const heading = canvas.getByRole("heading", { level: 1, name: "Artisan Pizza Menu" });
    await expect(heading).toHaveAttribute("data-heading-size", "h2");
    await expect(heading).toHaveAttribute("data-heading-level", "h1");
  },
};

export const Sizes: Story = {
  ...getStoryMetaFromManifest("Heading", "sizes"),
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-300)" }}>
      <Heading size="h1" level="h2">Heading 1 — Chef's Special</Heading>
      <Heading size="h2" level="h2">Heading 2 — Wood-Fired Pies</Heading>
      <Heading size="h3" level="h2">Heading 3 — Gourmet White Pizza</Heading>
      <Heading size="h4" level="h2">Heading 4 — Calzones & Sides</Heading>
      <Heading size="h5" level="h2">Heading 5 — Fresh Dips</Heading>
      <Heading size="h6" level="h2">Heading 6 — Beverages</Heading>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("heading", { level: 2 })).toHaveLength(6);
    await expect(canvas.getByRole("heading", { level: 2, name: "Heading 6 — Beverages" }))
      .toHaveAttribute("data-heading-size", "h6");
  },
};

export const Levels: Story = {
  ...getStoryMetaFromManifest("Heading", "levels"),
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-300)" }}>
      <Heading size="h1" level="h1">Pepperoni Pizzeria</Heading>
      <Heading size="h3" level="h2">Today's Fresh Specials</Heading>
      <Heading size="h5" level="none">Wood Oven Temperature: 450°C</Heading>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("heading", { level: 1, name: "Pepperoni Pizzeria" })).toBeVisible();
    await expect(canvas.getByRole("heading", { level: 2, name: "Today's Fresh Specials" })).toBeVisible();
    await expect(canvas.getByText("Wood Oven Temperature: 450°C").tagName).toBe("DIV");
    await expect(canvas.getByText("Wood Oven Temperature: 450°C")).toHaveAttribute("data-heading-level", "none");
  },
};

export const Weight: Story = {
  ...getStoryMetaFromManifest("Heading", "weight"),
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-300)" }}>
      <Heading size="h3" level="h2" weight={400}>Regular Crust — 400</Heading>
      <Heading size="h3" level="h2" weight={500}>Medium Dough — 500</Heading>
      <Heading size="h3" level="h2" weight={600}>Semibold Sourdough — 600</Heading>
      <Heading size="h3" level="h2" weight={700}>Bold Deep Dish — 700</Heading>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("heading", { level: 2 })).toHaveLength(4);
    await expect(canvas.getByRole("heading", { level: 2, name: "Semibold Sourdough — 600" }))
      .toHaveAttribute("data-heading-weight", "600");
  },
};
