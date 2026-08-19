import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn } from "storybook/test";
import { Button } from ".";
import { Icon } from "../Icon";
import { TextInput } from "../TextInput";
import {
  getManifestArgTypes,
  getManifestComponentDescription,
  getStoryMetaFromManifest,
} from "../../types/guidelines";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: { component: getManifestComponentDescription("Button") },
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    onClick: fn(),
  },
  argTypes: getManifestArgTypes("Button"),
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  ...getStoryMetaFromManifest("Button", "variant"),
  args: {
    children: "Order Pizza",
    variant: "primary",
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole("button", { name: "Order Pizza" });

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Secondary: Story = {
  ...getStoryMetaFromManifest("Button", "variant"),
  args: {
    children: "Add Extra Cheese",
    variant: "secondary",
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole("button", { name: "Add Extra Cheese" });

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Tertiary: Story = {
  ...getStoryMetaFromManifest("Button", "variant"),
  args: {
    children: "Customize Toppings",
    variant: "tertiary",
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole("button", { name: "Customize Toppings" });

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Interaction: Story = {
  args: {
    children: "Bake pizza now",
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole("button", { name: "Bake pizza now" });

    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const Disabled: Story = {
  args: {
    children: "Out of dough",
    disabled: true,
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole("button", { name: "Out of dough" });

    await userEvent.click(button);

    await expect(button).toBeDisabled();
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const IconOnly: Story = {
  ...getStoryMetaFromManifest("Button", "icon-only"),
  args: {
    children: <Icon name="counter-clockwise-triangle-circle" />,
    iconOnly: true,
    "aria-label": "Rotate pizza in oven",
    size: "m",
    variant: "secondary",
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", { name: "Rotate pizza in oven" });
    const bounds = button.getBoundingClientRect();

    await expect(button).toHaveAttribute("data-button-icon-only", "");
    await expect(bounds.width).toBe(bounds.height);
  },
};

export const Link: Story = {
  args: {
    children: "View pizza menu",
    href: "https://example.com",
    target: "_blank",
    rel: "noreferrer",
    variant: "secondary",
  },
  play: async ({ canvas }) => {
    const link = canvas.getByRole("link", { name: "View pizza menu" });

    await expect(link).toHaveAttribute("href", "https://example.com");
    await expect(link).toHaveAttribute("target", "_blank");
  },
};

export const DisabledLink: Story = {
  ...getStoryMetaFromManifest("Button", "disabled-link"),
  args: {
    children: "Unavailable daily special",
    href: "https://example.com",
    disabled: true,
    variant: "secondary",
  },
  play: async ({ canvas }) => {
    const action = canvas.getByRole("link", {
      name: "Unavailable daily special",
    });
    await expect(action).toHaveAttribute("aria-disabled", "true");
    await expect(action).not.toHaveAttribute("href");
    await expect(action).toHaveAttribute("tabindex", "-1");
  },
};

export const TextInputAttachment: Story = {
  ...getStoryMetaFromManifest("Button", "text-input-attachment"),
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-500)",
        width: "360px",
        maxWidth: "100%",
      }}
    >
      <TextInput
        label="Pizza delivery website"
        before={<Button usage="text-input-before">https://</Button>}
        placeholder="pepperoni.pizza"
      />
      <TextInput
        label="Discount coupon"
        after={<Button usage="text-input-after">Apply</Button>}
        placeholder="Enter coupon code"
      />
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("button", { name: "https://" }),
    ).toHaveAttribute("data-text-input-slot-button", "before");
    await expect(
      canvas.getByRole("button", { name: "Apply" }),
    ).toHaveAttribute("data-text-input-slot-button", "after");
  },
};
