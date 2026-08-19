import type { Meta, StoryObj } from "@storybook/react";
import { BrandDoc } from "./BrandDoc";
import { SemanticDoc } from "./SemanticDoc";

const meta: Meta<typeof BrandDoc> = {
  title: "Design Tokens",
  component: BrandDoc,
  parameters: {
    docs: {
      description: {
        component: "Visual documentation of base and theme-aware semantic design tokens. Semantic values resolve dynamically for the active Light or Dark Storybook theme."
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof BrandDoc>;

export const BrandTokens: Story = {
  name: "Brand",
  render: () => <BrandDoc />
};

export const SemanticTokens: Story = {
  name: "Semantic",
  render: () => <SemanticDoc />
};

export const ComponentTokens: Story = {
  name: "Component",
  render: () => <SemanticDoc kind="component" />
};
