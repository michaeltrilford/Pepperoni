import type { Meta, StoryObj } from "@storybook/react";
import { Field } from ".";
import { TextInput } from "../TextInput";
import { getManifestArgTypes, getManifestComponentDescription, getStoryMetaFromManifest } from "../../types/guidelines";
import { Text } from "../Text";
import { expect } from "storybook/test";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: getManifestComponentDescription("Field"),
      },
    },
  },
  argTypes: getManifestArgTypes("Field"),
};

export default meta;
type Story = StoryObj<typeof Field>;
const fieldSizes = ["s", "m", "l"] as const;

// --- Empty Field Stories ---

export const EmptyDefault: Story = {
  ...getStoryMetaFromManifest("Field", "empty-default"),
  args: {
    id: "empty-field-1",
    label: "Pizza Crust Instructions",
    message: "Tell the pizzaiolo how crispy you would like your crust baked.",
    children: <TextInput placeholder="e.g. Extra crispy stone-baked" />,
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /Pizza Crust Instructions/ });
    await expect(input.closest("[data-field-size]")).toHaveAttribute("data-field-size", "m");
    await expect(canvas.getByText("Tell the pizzaiolo how crispy you would like your crust baked.")).toHaveAttribute(
      "data-field-message", "",
    );
    await userEvent.type(input, "Ready");
    await expect(input).toHaveValue("Ready");
  },
};

export const EmptyWithOptional: Story = {
  ...getStoryMetaFromManifest("Field", "empty-with-optional"),
  args: {
    id: "empty-field-2",
    label: "Dipping Sauce",
    optional: true,
    message: "Optional garlic herb dip or spicy marinara.",
    children: <TextInput placeholder="e.g. Garlic herb dip" />,
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /Dipping Sauce/ });
    await userEvent.type(input, "Optional");
    await expect(input).toHaveValue("Optional");
  },
};

export const EmptyWithRequired: Story = {
  ...getStoryMetaFromManifest("Field", "empty-with-required"),
  args: {
    id: "empty-field-3",
    label: "Pizza Size Selection",
    required: true,
    message: "Required pizza diameter (10\", 12\", or 16\").",
    children: <TextInput placeholder="e.g. 12 inch Medium" />,
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: /Pizza Size Selection/ });
    await userEvent.type(input, "Required");
    await expect(input).toHaveValue("Required");
  },
};

export const EmptyErrorMessage: Story = {
  ...getStoryMetaFromManifest("Field", "empty-error-message"),
  args: {
    id: "empty-field-4",
    label: "Table or Seat Number",
    variant: "error",
    message: "Table number not found in pizzeria dining room.",
    children: <TextInput variant="error" defaultValue="Table 99" />,
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole("textbox", { name: /Table or Seat Number/ });
    const message = canvas.getByText("Table number not found in pizzeria dining room.");
    await expect(input).toHaveValue("Table 99");
    await expect(input).toHaveAttribute("aria-describedby", message.id);
    await expect(input).toHaveAttribute("aria-errormessage", message.id);
    await expect(input).toHaveAttribute("aria-invalid", "true");
    await expect(message).toBeVisible();
    await expect(canvas.getByText("Table number not found in pizzeria dining room.").parentElement).toHaveAttribute(
      "data-field-variant", "error",
    );
  },
};

// --- Field Composed with TextInput Stories ---

export const ComposedDefault: Story = {
  ...getStoryMetaFromManifest("Field", "composed-default"),
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-500)" }}>
      {fieldSizes.map((size) => (
        <Field
          {...args}
          key={size}
          id={`pizza-order-${size}`}
          size={size}
          label={`Pizza order details — ${size}`}
          message="Enter the pizza price and special request for the kitchen."
        >
          <div style={{ display: "flex", gap: "var(--space-200)" }}>
            <TextInput
              id={`pizza-order-${size}`}
              size={size}
              placeholder="Price"
              insideBefore={
                <TextInput.InsideSlot density="text">
                  <Text variant="secondary">$</Text>
                </TextInput.InsideSlot>
              }
            />
            <TextInput
              id={`pizza-note-${size}`}
              size={size}
              label="Special Request"
              hideLabel
              placeholder="e.g. Extra basil"
            />
          </div>
        </Field>
      ))}
    </div>
  ),
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getAllByRole("textbox")).toHaveLength(6);
    const amount = canvas.getByRole("textbox", { name: "Pizza order details — s" });
    await userEvent.type(amount, "100");
    await expect(amount).toHaveValue("100");
  },
};

export const ComposedSuccessValidation: Story = {
  ...getStoryMetaFromManifest("Field", "composed-success-validation"),
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-500)" }}>
      {fieldSizes.map((size) => (
        <Field
          {...args}
          key={size}
          id={`promo-code-${size}`}
          size={size}
          label={`Promo Code — ${size}`}
          variant="success"
          message="Promo code PEPPERONI2026 successfully applied! ($5.00 off)"
        >
          <TextInput
            id={`promo-code-${size}`}
            size={size}
            variant="success"
            defaultValue="PEPPERONI2026"
          />
        </Field>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("textbox")).toHaveLength(3);
    await expect(canvas.getAllByDisplayValue("PEPPERONI2026")).toHaveLength(3);
    await expect(canvas.getAllByText("Promo code PEPPERONI2026 successfully applied! ($5.00 off)")).toHaveLength(3);
  },
};

export const ComposedWarningValidation: Story = {
  ...getStoryMetaFromManifest("Field", "composed-warning-validation"),
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-500)" }}>
      {fieldSizes.map((size) => (
        <Field
          {...args}
          key={size}
          id={`oven-temp-${size}`}
          size={size}
          label={`Oven Temperature — ${size}`}
          variant="warning"
          message="Oven heat is below 400°C. Sourdough crust may bake slowly."
        >
          <TextInput
            id={`oven-temp-${size}`}
            size={size}
            variant="warning"
            defaultValue="350°C"
          />
        </Field>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByDisplayValue("350°C")).toHaveLength(3);
    await expect(canvas.getAllByText("Oven heat is below 400°C. Sourdough crust may bake slowly.")).toHaveLength(3);
  },
};

export const ComposedErrorValidation: Story = {
  ...getStoryMetaFromManifest("Field", "composed-error-validation"),
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-500)" }}>
      {fieldSizes.map((size) => (
        <Field
          {...args}
          key={size}
          id={`phone-field-${size}`}
          size={size}
          label={`Driver Phone Number — ${size}`}
          required
          variant="error"
          message="Please enter a valid phone number for the pizza courier."
        >
          <TextInput
            id={`phone-field-${size}`}
            size={size}
            variant="error"
            defaultValue="12345"
          />
        </Field>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("textbox")).toHaveLength(3);
    await expect(canvas.getByRole("textbox", { name: /Driver Phone Number — s/ })).toHaveValue("12345");
    await expect(canvas.getAllByText("Please enter a valid phone number for the pizza courier.")).toHaveLength(3);
  },
};
