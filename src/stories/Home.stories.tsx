import type { Meta, StoryObj } from "@storybook/react";
import { HomeDoc } from "./HomeDoc";

const meta: Meta<typeof HomeDoc> = {
  title: "Pepperoni",
  component: HomeDoc,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Welcome to Pepperoni UI — the artisanal design system built with StyleX, semantic design tokens, and accessible React components.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HomeDoc>;

export const Overview: Story = {
  name: "Overview",
  render: () => <HomeDoc />,
};
