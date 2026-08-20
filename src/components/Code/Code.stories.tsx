import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";
import { Text } from "../Text";
import { List } from "../List";
import { expect } from "storybook/test";
import { getManifestArgTypes, getManifestComponentDescription, getStoryMetaFromManifest } from "../../types/guidelines";

const meta: Meta<typeof Code> = {
  title: "Components/Code",
  component: Code,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getManifestComponentDescription("Code") } } },
  args: {
    children: "npm run build:manifest",
    variant: "inline",
    size: "inherit"
  },
  argTypes: getManifestArgTypes("Code")
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  ...getStoryMetaFromManifest("Code", "inline"),
  render: (args) => (
    <Text>
      Run <Code {...args} /> to regenerate the component manifest.
    </Text>
  ),
  play: async ({ canvas }) => {
    const code = canvas.getByText("npm run build:manifest");
    await expect(code).toBeInTheDocument();
  },
};

export const Block: Story = {
  ...getStoryMetaFromManifest("Code", "block"),
  render: () => (
    <Code.Block>
      {`// Example component API configuration:
export const api = {
  name: "Button",
  element: "button",
  props: {
    variant: { type: "primary | secondary" }
  }
};`}
    </Code.Block>
  ),
  play: async ({ canvas }) => {
    const block = canvas.getByText(/\/\/ Example component API configuration:/);
    await expect(block).toBeInTheDocument();
  },
};

export const ContextualSizing: Story = {
  ...getStoryMetaFromManifest("Code", "contextualSizing"),
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-400)" }}>
      <Text size="s">
        Small text: <Code>npm test</Code> inherits small scale.
      </Text>
      <Text size="m">
        Medium text: <Code>npm test</Code> inherits medium scale.
      </Text>
      <Text size="l">
        Large text: <Code>npm test</Code> inherits large scale.
      </Text>
      <List size="s">
        <List.Item>
          List size S with <Code>inline-code</Code>
        </List.Item>
      </List>
      <List size="l">
        <List.Item>
          List size L with <Code>inline-code</Code>
        </List.Item>
      </List>
    </div>
  ),
};
