import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { expect } from "storybook/test";
import { getManifestArgTypes, getManifestComponentDescription, getStoryMetaFromManifest } from "../../types/guidelines";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getManifestComponentDescription("Text") } } },
  args: {
    children: "Pepperoni makes crafting delicious React interfaces simple and consistent.",
    size: "m",
    variant: "default",
    weight: 400
  },
  argTypes: getManifestArgTypes("Text")
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  ...getStoryMetaFromManifest("Text", "default"),
  play: async ({ canvas }) => {
    const text = canvas.getByText("Pepperoni makes crafting delicious React interfaces simple and consistent.");
    await expect(text).toHaveAttribute("data-text-size", "m");
    await expect(text).toHaveAttribute("data-text-variant", "default");
  },
};

export const Size: Story = {
  ...getStoryMetaFromManifest("Text", "size"),
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-300)" }}>
      <Text size="s">Small slice: Personal 10" pizza</Text>
      <Text size="m">Medium slice: Classic 12" pizza</Text>
      <Text size="l">Large slice: Sharing 16" family stone-baked pizza</Text>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Large slice: Sharing 16\" family stone-baked pizza")).toHaveAttribute("data-text-size", "l");
  },
};

export const Variant: Story = {
  ...getStoryMetaFromManifest("Text", "variant"),
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-200)" }}>
      <Text variant="default">Fresh basil & mozzarella (Default)</Text>
      <Text variant="secondary">Optional toppings: mushrooms, olives, peppers</Text>
      <Text variant="positive">Pizza baked and ready for pickup (Positive)</Text>
      <Text variant="warning">Wood-fired oven approaching 500°C (Warning)</Text>
      <Text variant="attention">Hot Calabrian chili level (Attention)</Text>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Hot Calabrian chili level (Attention)")).toHaveAttribute("data-text-variant", "attention");
  },
};

export const Weight: Story = {
  ...getStoryMetaFromManifest("Text", "weight"),
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-200)" }}>
      <Text weight={400}>Thin & Crispy Crust — 400</Text>
      <Text weight={500}>Classic Hand Tossed — 500</Text>
      <Text weight={600}>Semibold Sourdough — 600</Text>
      <Text weight={700}>Deep Dish Pan — 700</Text>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Deep Dish Pan — 700")).toHaveAttribute("data-text-weight", "700");
  },
};
