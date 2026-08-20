import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { TextInput } from "../TextInput";
import { expect } from "storybook/test";
import { getManifestArgTypes, getManifestComponentDescription, getStoryMetaFromManifest } from "../../types/guidelines";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getManifestComponentDescription("Badge") } } },
  args: {
    children: "Wood Fired",
    size: "m"
  },
  argTypes: getManifestArgTypes("Badge")
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Small: Story = {
  ...getStoryMetaFromManifest("Badge", "small"),
  args: {
    children: "Small",
    size: "s"
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Small")).toHaveAttribute("data-badge-size", "s");
  },
};

export const Medium: Story = {
  ...getStoryMetaFromManifest("Badge", "medium"),
  args: {
    children: "Medium",
    size: "m"
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Medium")).toHaveAttribute("data-badge-size", "m");
  },
};

export const Large: Story = {
  ...getStoryMetaFromManifest("Badge", "large"),
  args: {
    children: "Large",
    size: "l"
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Large")).toHaveAttribute("data-badge-size", "l");
  },
};

export const Variants: Story = {
  ...getStoryMetaFromManifest("Badge", "variants"),
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-300)", flexWrap: "wrap", alignItems: "center" }}>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="positive">Ready for Oven</Badge>
      <Badge variant="caution">Oven Preheating</Badge>
      <Badge variant="attention">High Heat Warning</Badge>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Neutral")).toHaveAttribute("data-badge-variant", "neutral");
    await expect(canvas.getByText("Ready for Oven")).toHaveAttribute("data-badge-variant", "positive");
    await expect(canvas.getByText("Oven Preheating")).toHaveAttribute("data-badge-variant", "caution");
    await expect(canvas.getByText("High Heat Warning")).toHaveAttribute("data-badge-variant", "attention");
  },
};

export const Colors: Story = {
  ...getStoryMetaFromManifest("Badge", "colors"),
  render: () => (
    <div style={{ display: "flex", gap: "var(--space-300)", flexWrap: "wrap", alignItems: "center" }}>
      <Badge color="pepperoni">Pepperoni Slice</Badge>
      <Badge color="green">Fresh Basil</Badge>
      <Badge color="orange">Cheddar Crust</Badge>
      <Badge color="red">Chili Flakes</Badge>
      <Badge color="grey">Cast Iron</Badge>
      <Badge color="var(--pepperoni-500)">Custom Token</Badge>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Pepperoni Slice")).toHaveAttribute("data-badge-color", "pepperoni");
    await expect(canvas.getByText("Fresh Basil")).toHaveAttribute("data-badge-color", "green");
    await expect(canvas.getByText("Cheddar Crust")).toHaveAttribute("data-badge-color", "orange");
    await expect(canvas.getByText("Chili Flakes")).toHaveAttribute("data-badge-color", "red");
    await expect(canvas.getByText("Cast Iron")).toHaveAttribute("data-badge-color", "grey");
    await expect(canvas.getByText("Custom Token")).toHaveAttribute("data-badge-color", "var(--pepperoni-500)");
  },
};

export const TextInputSlot: Story = {
  ...getStoryMetaFromManifest("Badge", "text-input-slot"),
  render: () => (
    <div style={{ maxWidth: "28rem" }}>
      <TextInput
        label="Pizza Special"
        defaultValue="24.50"
        insideBefore={
          <TextInput.InsideSlot density="compact">
            <Badge size="m" variant="attention">
              HOT
            </Badge>
          </TextInput.InsideSlot>
        }
      />
    </div>
  ),
  play: async ({ canvas }) => {
    const badge = canvas.getByText("HOT");
    await expect(badge.closest("[data-inside-slot-density]"))
      .toHaveAttribute("data-inside-slot-density", "compact");
    await expect(badge).toHaveAttribute("data-badge-variant", "attention");
  },
};
