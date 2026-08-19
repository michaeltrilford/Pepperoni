import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Icon } from ".";
import {
  getManifestArgTypes,
  getManifestComponentDescription,
  getStoryMetaFromManifest,
} from "../../types/guidelines";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: { component: getManifestComponentDescription("Icon") },
    },
  },
  args: {
    name: "search",
    size: "m",
  },
  argTypes: getManifestArgTypes("Icon"),
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Search: Story = {
  ...getStoryMetaFromManifest("Icon", "search"),
  play: async ({ canvasElement }) => {
    const icon = canvasElement.querySelector("[data-icon]");
    await expect(icon).toHaveAttribute("aria-hidden", "true");
    await expect(icon).toHaveAttribute("data-icon-name", "search");
    await expect(icon).toHaveAttribute("data-icon-size", "m");
    await expect(icon).not.toHaveAttribute("role");
  },
};

export const CounterClockwiseTriangleCircle: Story = {
  ...getStoryMetaFromManifest("Icon", "counter-clockwise-triangle-circle"),
  args: {
    name: "counter-clockwise-triangle-circle",
  },
  play: async ({ canvasElement }) => {
    const icon = canvasElement.querySelector("[data-icon]");
    await expect(icon).toHaveAttribute(
      "data-icon-name",
      "counter-clockwise-triangle-circle",
    );
    await expect(icon?.querySelector("path")).toHaveAttribute(
      "fill",
      "currentColor",
    );
  },
};

export const Labelled: Story = {
  args: {
    label: "Search pizza toppings",
  },
  play: async ({ canvas }) => {
    const icon = canvas.getByRole("img", { name: "Search pizza toppings" });
    await expect(icon).not.toHaveAttribute("aria-hidden");
    await expect(icon.querySelector("[data-icon-svg]")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  },
};

export const Size: Story = {
  ...getStoryMetaFromManifest("Icon", "size"),
  render: () => (
    <div
      style={{ display: "flex", alignItems: "center", gap: "var(--space-300)" }}
    >
      <Icon name="search" size="s" />
      <Icon name="search" size="m" />
      <Icon name="search" size="l" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    await expect(
      canvasElement.querySelectorAll("[data-icon-size='s']"),
    ).toHaveLength(1);
    await expect(
      canvasElement.querySelectorAll("[data-icon-size='m']"),
    ).toHaveLength(1);
    await expect(
      canvasElement.querySelectorAll("[data-icon-size='l']"),
    ).toHaveLength(1);
  },
};
