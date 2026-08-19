import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Text } from "../Text";
import { Box } from "./Box";
import { getManifestArgTypes, getManifestComponentDescription, getStoryMetaFromManifest } from "../../types/guidelines";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getManifestComponentDescription("Box") } } },
  args: { children: "A freshly baked pizza box container", flex: false },
  argTypes: getManifestArgTypes("Box"),
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  ...getStoryMetaFromManifest("Box", "default"),
  render: (args) => <Box {...args} data-testid="box" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("box")).toHaveStyle({ display: "block" });
  },
};

export const Flex: Story = {
  ...getStoryMetaFromManifest("Box", "flex"),
  render: () => (
    <Box flex direction="column" gap="300" data-testid="box">
      <Text size="m" weight={600}>Pizza order summary</Text>
      <Text size="s" variant="secondary">Choose crust, toppings, and delivery instructions.</Text>
      <Text size="s" variant="secondary">Baking starts once confirmed.</Text>
    </Box>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByTestId("box")).toHaveStyle({ display: "flex", flexDirection: "column" });
  },
};

export const Alignment: Story = {
  ...getStoryMetaFromManifest("Box", "alignment"),
  render: () => (
    <Box flex align="center" justify="between" gap="300" style={{ minHeight: "120px", padding: "var(--space-300)", border: "var(--stroke-100) solid var(--border-color)" }}>
      <Text size="m" weight={600}>Pepperoni Deluxe</Text>
      <Text size="s" variant="secondary">2 pizzas in box</Text>
    </Box>
  ),
};
