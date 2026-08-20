import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from ".";
import {
  getManifestArgTypes,
  getManifestComponentDescription,
  getStoryMetaFromManifest,
} from "../../types/guidelines";
import { Icon } from "../Icon";
import { Table } from "../Table";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Text } from "../Text";
import { Field } from "../Field";
import { Box } from "../Box";
import { expect } from "storybook/test";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: getManifestComponentDescription("TextInput"),
      },
    },
  },
  argTypes: getManifestArgTypes("TextInput"),
};

export default meta;
type Story = StoryObj<typeof TextInput>;

const sanitizeAmount = (value: string) => {
  const cleaned = value.replace(/[^\d.,]/g, "");
  const [whole, ...fraction] = cleaned.split(".");
  return fraction.length ? `${whole}.${fraction.join("")}` : whole;
};

export const WithLabel: Story = {
  ...getStoryMetaFromManifest("TextInput", "with-label"),
  args: {
    label: "Pizza Order Reference",
    defaultValue: "PIZZA-1042",
    placeholder: "e.g. PIZZA-1042",
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole("textbox", { name: "Pizza Order Reference" });
    await expect(input).toHaveValue("PIZZA-1042");
  },
};

export const AutomaticLabelConnection: Story = {
  ...getStoryMetaFromManifest("TextInput", "automatic-label-connection"),
  args: {
    label: "Pizza Table Number",
    placeholder: "e.g. Table 14",
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: "Pizza Table Number" });
    const label = canvas.getByText("Pizza Table Number").closest("label");

    await expect(input.id).not.toBe("");
    await expect(label).toHaveAttribute("for", input.id);
    await userEvent.click(label as HTMLLabelElement);
    await expect(input).toHaveFocus();
  },
};

export const FieldErrorRelationship: Story = {
  ...getStoryMetaFromManifest("TextInput", "field-error-relationship"),
  render: () => (
    <Field
      label="Kitchen Order Ticket"
      variant="error"
      message="Enter an order ticket containing 6 to 12 letters or numbers."
    >
      <TextInput variant="error" defaultValue="A-1" />
    </Field>
  ),
  play: async ({ canvas }) => {
    const input = canvas.getByRole("textbox", { name: "Kitchen Order Ticket" });
    const message = canvas.getByText(
      "Enter an order ticket containing 6 to 12 letters or numbers.",
    );

    await expect(canvas.getAllByText("Kitchen Order Ticket")).toHaveLength(1);
    await expect(input).toHaveAttribute("aria-describedby", message.id);
    await expect(input).toHaveAttribute("aria-errormessage", message.id);
    await expect(input).toHaveAttribute("aria-invalid", "true");
  },
};

export const VisuallyHiddenLabel: Story = {
  ...getStoryMetaFromManifest("TextInput", "visually-hidden-label"),
  args: {
    label: "Search Pizza Menu",
    hideLabel: true,
    defaultValue: "Pepperoni Supreme",
    placeholder: "Search toppings, crusts...",
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole("textbox", { name: "Search Pizza Menu" });
    await expect(input).toHaveValue("Pepperoni Supreme");
  },
};

export const Optional: Story = {
  ...getStoryMetaFromManifest("TextInput", "optional"),
  args: {
    label: "Artisanal Crust Finishing Notes",
    optional: true,
    placeholder: "e.g. Extra virgin olive oil drizzle",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("textbox", { name: /Artisanal Crust Finishing Notes/i }),
    ).not.toBeRequired();
    await expect(canvas.getByText("(Optional)")).toBeVisible();
  },
};

export const Size: Story = {
  ...getStoryMetaFromManifest("TextInput", "size"),
  render: () => (
    <Box
      flex
      direction="column"
      gap="300"
      style={{ width: "320px", maxWidth: "100%" }}
    >
      <TextInput
        size="s"
        label="Pizza Table Number — Small"
        placeholder="e.g. Table 14"
      />
      <TextInput
        size="m"
        label="Pizza Table Number — Medium"
        placeholder="e.g. Table 14"
      />
      <TextInput
        size="l"
        label="Pizza Table Number — Large"
        placeholder="e.g. Table 14"
      />
    </Box>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("textbox")).toHaveLength(3);
    await expect(
      canvas.getByRole("textbox", { name: "Pizza Table Number — Small" }),
    ).toBeVisible();
    await expect(
      canvas.getByRole("textbox", { name: "Pizza Table Number — Medium" }),
    ).toBeVisible();
    await expect(
      canvas.getByRole("textbox", { name: "Pizza Table Number — Large" }),
    ).toBeVisible();
  },
};

export const VariantSuccess: Story = {
  ...getStoryMetaFromManifest("TextInput", "variant-success"),
  args: {
    label: "Pizza Promo Code",
    variant: "success",
    defaultValue: "PEPPERONI2026",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("textbox", { name: "Pizza Promo Code" }),
    ).toHaveValue("PEPPERONI2026");
  },
};

export const VariantWarning: Story = {
  ...getStoryMetaFromManifest("TextInput", "variant-warning"),
  args: {
    label: "Wood Fired Oven Temperature",
    variant: "warning",
    defaultValue: "Heat nearing 480°C maximum",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("textbox", { name: "Wood Fired Oven Temperature" }),
    ).toHaveValue("Heat nearing 480°C maximum");
  },
};

export const VariantError: Story = {
  ...getStoryMetaFromManifest("TextInput", "variant-error"),
  args: {
    label: "Customer Order Email",
    variant: "error",
    defaultValue: "invalid-email@pizzaspot",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("textbox", { name: "Customer Order Email" }),
    ).toHaveValue("invalid-email@pizzaspot");
  },
};

const InsideSlotDensityStory = () => {
  const [amount, setAmount] = useState("42.75");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-500)",
        width: "320px",
        maxWidth: "100%",
      }}
    >
      <TextInput
        label="Pizza Price"
        type="text"
        inputMode="decimal"
        align="end"
        value={amount}
        onChange={(event) => setAmount(sanitizeAmount(event.target.value))}
        insideBefore={
          <TextInput.InsideSlot density="text">
            <Text>$</Text>
          </TextInput.InsideSlot>
        }
        insideAfter={
          <TextInput.InsideSlot density="text">
            <Text>AUD</Text>
          </TextInput.InsideSlot>
        }
        placeholder="0.00"
      />
      <TextInput
        label="Search pizza menu"
        defaultValue="Margherita"
        insideBefore={
          <TextInput.InsideSlot density="compact">
            <Icon name="search" />
          </TextInput.InsideSlot>
        }
        insideAfter={
          <TextInput.InsideSlot density="compact">
            <Badge>⌘K</Badge>
          </TextInput.InsideSlot>
        }
        placeholder="Search pizza menu..."
      />
    </div>
  );
};

export const InsideSlotDensity: Story = {
  ...getStoryMetaFromManifest("TextInput", "inside-slot-density"),
  render: () => <InsideSlotDensityStory />,
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("textbox")).toHaveLength(2);
    await expect(
      canvas.getAllByText("$")[0].closest("[data-inside-slot-density]"),
    ).toHaveAttribute("data-inside-slot-density", "text");
    await expect(
      canvas.getByText("⌘K").closest("[data-inside-slot-density]"),
    ).toHaveAttribute("data-inside-slot-density", "compact");
    const amount = canvas.getByRole("textbox", { name: "Pizza Price" });
    await expect(amount).toHaveValue("42.75");
  },
};

export const InsideSlotsBefore: Story = {
  ...getStoryMetaFromManifest("TextInput", "inside-slots-before"),
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-500)",
        width: "320px",
        maxWidth: "100%",
      }}
    >
      {(["s", "m", "l"] as const).map((size) => (
        <TextInput
          key={size}
          size={size}
          label={`Search Pizzas — ${size}`}
          insideBefore={
            <TextInput.InsideSlot density="compact">
              <Icon name="search" size={size} />
            </TextInput.InsideSlot>
          }
          placeholder="Search pizzas..."
        />
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("textbox")).toHaveLength(3);
    await expect(
      canvas.getByRole("textbox", { name: "Search Pizzas — s" }),
    ).toBeVisible();
  },
};

export const InsideSlotsAfter: Story = {
  ...getStoryMetaFromManifest("TextInput", "inside-slots-after"),
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-500)",
        width: "320px",
        maxWidth: "100%",
      }}
    >
      {(["s", "m", "l"] as const).map((size) => (
        <TextInput
          key={size}
          size={size}
          label={`Filter Toppings — ${size}`}
          insideAfter={
            <TextInput.InsideSlot density="compact">
              <Icon name="search" size={size} />
            </TextInput.InsideSlot>
          }
          placeholder="Filter toppings..."
        />
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("textbox")).toHaveLength(3);
    await expect(
      canvas.getByRole("textbox", { name: "Filter Toppings — m" }),
    ).toBeVisible();
  },
};

export const InsideSlotsBadge: Story = {
  ...getStoryMetaFromManifest("TextInput", "inside-slots-badge"),
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-500)",
      }}
    >
      {(["s", "m", "l"] as const).map((size) => (
        <div
          key={size}
          style={{ display: "flex", gap: "var(--space-300)", flexWrap: "wrap" }}
        >
          <div style={{ width: "320px", maxWidth: "100%" }}>
            <TextInput
              size={size}
              label={`Pizza price with leading badge — ${size}`}
              insideBefore={
                <TextInput.InsideSlot density="compact">
                  <Badge size={size}>USD</Badge>
                </TextInput.InsideSlot>
              }
              placeholder="Price"
            />
          </div>
          <div style={{ width: "320px", maxWidth: "100%" }}>
            <TextInput
              size={size}
              label={`Order status with trailing badge — ${size}`}
              insideAfter={
                <TextInput.InsideSlot density="compact">
                  <Badge size={size} variant="positive">
                    Ready
                  </Badge>
                </TextInput.InsideSlot>
              }
              placeholder="Order reference"
            />
          </div>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("textbox")).toHaveLength(6);
    await expect(
      canvas.getByRole("textbox", { name: "Pizza price with leading badge — s" }),
    ).toBeVisible();
    await expect(
      canvas.getByRole("textbox", {
        name: "Order status with trailing badge — l",
      }),
    ).toBeVisible();
    await expect(canvas.getAllByText("Ready")[0]).toHaveAttribute("data-badge-variant", "positive");
  },
};

export const OutsideSlotsBefore: Story = {
  ...getStoryMetaFromManifest("TextInput", "outside-slots-before"),
  args: {
    label: "Pizzeria Website URL",
    before: <Button usage="text-input-before">https://</Button>,
    defaultValue: "pepperoni.pizza",
    placeholder: "pepperoni.pizza",
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: "Pizzeria Website URL" });
    await userEvent.click(canvas.getByRole("button", { name: "https://" }));
    await expect(input).toHaveValue("pepperoni.pizza");
  },
};

export const OutsideSlotsAfter: Story = {
  ...getStoryMetaFromManifest("TextInput", "outside-slots-after"),
  args: {
    label: "VIP Pizza Club Code",
    after: <Button usage="text-input-after">Apply</Button>,
    defaultValue: "PIZZACLUB",
    placeholder: "PIZZACLUB",
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: "VIP Pizza Club Code" });
    await userEvent.click(canvas.getByRole("button", { name: "Apply" }));
    await expect(input).toHaveValue("PIZZACLUB");
  },
};

const AlignRightNumbersStory = () => {
  const [amounts, setAmounts] = useState<Record<"s" | "m" | "l", string>>({
    s: "18.50",
    m: "24.50",
    l: "32.00",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-500)",
        width: "320px",
        maxWidth: "100%",
      }}
    >
      {(["s", "m", "l"] as const).map((size) => (
        <TextInput
          key={size}
          size={size}
          label={`Pizza Subtotal — ${size}`}
          align="end"
          type="text"
          inputMode="decimal"
          value={amounts[size]}
          onChange={(event) => {
            const value = sanitizeAmount(event.target.value);
            setAmounts((current) => ({ ...current, [size]: value }));
          }}
          insideBefore={
            <TextInput.InsideSlot density="text">
              <Text size="l" variant="default">
                $
              </Text>
            </TextInput.InsideSlot>
          }
          insideAfter={
            <TextInput.InsideSlot density="text">
              <Text size="s" variant="positive">
                AUD
              </Text>
            </TextInput.InsideSlot>
          }
        />
      ))}
    </div>
  );
};

export const AlignRightNumbers: Story = {
  ...getStoryMetaFromManifest("TextInput", "align-right-numbers"),
  render: () => <AlignRightNumbersStory />,
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: "Pizza Subtotal — s" });
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await expect(input).toHaveStyle({ textAlign: "end" });
    await expect(input).toHaveStyle({ fontVariantNumeric: "tabular-nums" });
    await expect(
      canvas.getByRole("textbox", { name: "Pizza Subtotal — m" }),
    ).toHaveValue("24.50");
  },
};

const InputModeStory = () => {
  const [amount, setAmount] = useState("15.25");

  return (
    <Box
      flex
      direction="column"
      gap="300"
      style={{ width: "320px", maxWidth: "100%" }}
    >
      <TextInput
        label="Pizza Total Price"
        type="text"
        inputMode="decimal"
        align="end"
        value={amount}
        onChange={(event) => setAmount(sanitizeAmount(event.target.value))}
        placeholder="0.00"
      />
      <TextInput
        label="Pizza Pickup PIN"
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        defaultValue="849201"
        placeholder="6-digit PIN"
      />
      <TextInput
        label="Customer Order Email"
        type="email"
        inputMode="email"
        autoComplete="email"
        defaultValue="chef@pepperoni.pizza"
        placeholder="chef@pepperoni.pizza"
      />
      <TextInput
        label="Pizza Courier Mobile"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        defaultValue="0400 123 456"
        placeholder="0400 000 000"
      />
    </Box>
  );
};

export const InputMode: Story = {
  ...getStoryMetaFromManifest("TextInput", "input-mode"),
  render: () => <InputModeStory />,
  play: async ({ canvas }) => {
    const amount = canvas.getByRole("textbox", { name: "Pizza Total Price" });
    const code = canvas.getByRole("textbox", { name: "Pizza Pickup PIN" });
    const email = canvas.getByRole("textbox", { name: "Customer Order Email" });
    const telephone = canvas.getByRole("textbox", { name: "Pizza Courier Mobile" });

    await expect(amount).toHaveAttribute("inputmode", "decimal");
    await expect(amount).toHaveAttribute("type", "text");
    await expect(amount).toHaveStyle({ textAlign: "end" });
    await expect(amount).toHaveValue("15.25");
    await expect(code).toHaveAttribute("inputmode", "numeric");
    await expect(code).toHaveAttribute("autocomplete", "one-time-code");
    await expect(code).toHaveValue("849201");
    await expect(email).toHaveAttribute("type", "email");
    await expect(email).toHaveAttribute("autocomplete", "email");
    await expect(email).toHaveValue("chef@pepperoni.pizza");
    await expect(telephone).toHaveAttribute("type", "tel");
    await expect(telephone).toHaveAttribute("autocomplete", "tel");
    await expect(telephone).toHaveValue("0400 123 456");
  },
};

const TableCellEmbeddingStory = () => {
  const [amounts, setAmounts] = useState<Record<"s" | "m" | "l", string>>({
    s: "12.50",
    m: "24.50",
    l: "32.00",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-500)",
      }}
    >
      {(["s", "m", "l"] as const).map((size) => (
        <Table
          key={size}
          variant="grid"
          size={size}
          aria-label={`${size} pizza order line item`}
          columns={[
            { ratio: 1 },
            { ratio: 2 },
            { width: { s: "16rem", m: "21rem", l: "24rem" }[size] },
          ]}
        >
          <thead>
            <tr>
              <Table.HeaderCell>Pizza</Table.HeaderCell>
              <Table.HeaderCell>Customization</Table.HeaderCell>
              <Table.HeaderCell align="end">Price</Table.HeaderCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Table.Cell>
                <TextInput
                  usage="table"
                  label={`${size} pizza description`}
                  hideLabel
                  defaultValue="Pepperoni Feast"
                />
              </Table.Cell>
              <Table.Cell>
                <TextInput
                  usage="table"
                  label={`${size} order reference`}
                  hideLabel
                  defaultValue="PIZZA-1042"
                />
              </Table.Cell>
              <Table.Cell>
                <TextInput
                  usage="table"
                  label={`${size} amount`}
                  hideLabel
                  type="text"
                  inputMode="decimal"
                  value={amounts[size]}
                  onChange={(event) => {
                    const value = sanitizeAmount(event.target.value);
                    setAmounts((current) => ({ ...current, [size]: value }));
                  }}
                  align="end"
                  insideBefore={
                    <TextInput.InsideSlot density="text">
                      <Text variant="secondary">$</Text>
                    </TextInput.InsideSlot>
                  }
                  placeholder="0.00"
                />
              </Table.Cell>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export const TableCellEmbedding: Story = {
  ...getStoryMetaFromManifest("TextInput", "table-cell-embedding"),
  render: () => <TableCellEmbeddingStory />,
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole("textbox")).toHaveLength(9);
    await expect(
      canvas
        .getByRole("table", { name: "s pizza order line item" })
        .querySelectorAll("col")[2].style.width,
    ).toBe("16rem");
    await expect(
      canvas
        .getByRole("table", { name: "m pizza order line item" })
        .querySelectorAll("col")[2].style.width,
    ).toBe("21rem");
    await expect(
      canvas
        .getByRole("table", { name: "l pizza order line item" })
        .querySelectorAll("col")[2].style.width,
    ).toBe("24rem");
    await expect(
      canvas.getByRole("textbox", { name: "m pizza description" }),
    ).toHaveValue("Pepperoni Feast");
    await expect(canvas.getByRole("textbox", { name: "s amount" })).toHaveValue(
      "12.50",
    );
    await expect(canvas.getByRole("textbox", { name: "l amount" })).toHaveValue(
      "32.00",
    );
    await expect(canvas.getByRole("textbox", { name: "l amount" })).toHaveStyle(
      {
        textAlign: "end",
      },
    );
    await expect(canvas.getByRole("textbox", { name: "s amount" })).toHaveAttribute("inputmode", "decimal");
  },
};
