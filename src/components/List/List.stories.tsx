import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";
import { expect } from "storybook/test";
import { getManifestArgTypes, getManifestComponentDescription, getStoryMetaFromManifest } from "../../types/guidelines";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getManifestComponentDescription("List") } } },
  args: {
    type: "unordered",
    size: "m",
    gap: "100"
  },
  argTypes: getManifestArgTypes("List")
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  ...getStoryMetaFromManifest("List", "unordered"),
  render: (args) => (
    <List {...args} style={{ maxWidth: "75ch" }}>
      <List.Item>San Marzano Tomatoes</List.Item>
      <List.Item>Buffalo Mozzarella</List.Item>
      <List.Item>Fresh Basil Leaves</List.Item>
    </List>
  ),
  play: async ({ canvas }) => {
    const item = canvas.getByText("San Marzano Tomatoes");
    await expect(item).toBeInTheDocument();
  },
};

export const Ordered: Story = {
  ...getStoryMetaFromManifest("List", "ordered"),
  render: () => (
    <List type="ordered" gap="200" style={{ maxWidth: "75ch" }}>
      <List.Item>Proof pizza dough for 24 hours.</List.Item>
      <List.Item>Stretch and shape the crust.</List.Item>
      <List.Item>Bake at 450°C for 90 seconds.</List.Item>
    </List>
  ),
  play: async ({ canvas }) => {
    const step = canvas.getByText("Proof pizza dough for 24 hours.");
    await expect(step).toBeInTheDocument();
  },
};

export const Sizes: Story = {
  ...getStoryMetaFromManifest("List", "sizes"),
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-400)", maxWidth: "75ch" }}>
      <List size="s">
        <List.Item>Small list item</List.Item>
        <List.Item>Small supporting note</List.Item>
      </List>
      <List size="m">
        <List.Item>Medium standard item</List.Item>
        <List.Item>Medium body list</List.Item>
      </List>
      <List size="l">
        <List.Item>Large list item</List.Item>
        <List.Item>Large prominent text</List.Item>
      </List>
    </div>
  ),
};
