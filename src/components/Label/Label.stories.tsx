import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Label } from "./Label";
import { getManifestArgTypes, getManifestComponentDescription, getStoryMetaFromManifest } from "../../types/guidelines";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: getManifestComponentDescription("Label")
      }
    }
  },
  argTypes: getManifestArgTypes("Label")
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  ...getStoryMetaFromManifest("Label", "default"),
  args: {
    label: "Pizza Dough Type",
    htmlFor: "dough-input"
  },
  play: async ({ canvas }) => {
    const label = canvas.getByText("Pizza Dough Type").closest("label");

    await expect(label).toHaveAttribute("for", "dough-input");
    await expect(label).toHaveAttribute("data-label-size", "m");
  }
};

export const Size: Story = {
  ...getStoryMetaFromManifest("Label", "size"),
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-300)" }}>
      <Label label="Small pizza (10 inch)" size="s" />
      <Label label="Medium pizza (12 inch)" size="m" />
      <Label label="Large pizza (16 inch)" size="l" />
    </div>
  )
};

export const OptionalLabel: Story = {
  ...getStoryMetaFromManifest("Label", "optional-label"),
  args: {
    label: "Extra Grated Parmesan",
    optional: true
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("(Optional)")).toHaveAttribute("data-label-optional", "");
  },
};

export const RequiredLabel: Story = {
  ...getStoryMetaFromManifest("Label", "required-label"),
  args: {
    label: "Select Pizza Crust",
    required: true
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("*")).toHaveAttribute("data-label-required", "");
  },
};

export const VisuallyHidden: Story = {
  ...getStoryMetaFromManifest("Label", "visually-hidden"),
  args: {
    label: "Search Pizza Menu (Accessible to Screen Readers Only)",
    hideLabel: true
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Search Pizza Menu (Accessible to Screen Readers Only)").closest("label"))
      .toHaveAttribute("data-label-hidden", "true");
  },
};
