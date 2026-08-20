import type { Meta, StoryObj } from "@storybook/react";
import { KnowledgeDoc } from "./KnowledgeDoc";

const meta: Meta<typeof KnowledgeDoc> = {
  title: "Knowledge",
  component: KnowledgeDoc,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Overview of Pepperoni UI machine-readable component knowledge, AI agent skills, and composition fragments."
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof KnowledgeDoc>;

export const Overview: Story = {
  name: "Overview",
  render: () => <KnowledgeDoc />
};
