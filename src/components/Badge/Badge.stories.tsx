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

export const TextInputSlot: Story = {
  ...getStoryMetaFromManifest("Badge", "text-input-slot"),
  render: () => (
    <div style={{ maxWidth: "28rem" }}>
      <TextInput
        label="Pizza Special"
        defaultValue="24.50"
        insideBefore={
          <TextInput.InsideSlot density="compact">
            <Badge size="m">HOT</Badge>
          </TextInput.InsideSlot>
        }
      />
    </div>
  ),
  play: async ({ canvas }) => {
    const badge = canvas.getByText("HOT");
    await expect(badge.closest("[data-inside-slot-density]"))
      .toHaveAttribute("data-inside-slot-density", "compact");
  },
};
