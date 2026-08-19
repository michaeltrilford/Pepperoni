import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { TextInput } from "../TextInput";
import { Table } from ".";
import {
  getManifestArgTypes,
  getManifestComponentDescription,
  getStoryMetaFromManifest,
} from "../../types/guidelines";
import { Text } from "../Text";
import { Badge } from "../Badge";
import { Icon } from "../Icon";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: { component: getManifestComponentDescription("Table") },
    },
  },
  argTypes: getManifestArgTypes("Table"),
};

export default meta;
type Story = StoryObj<typeof Table>;

const sanitizeAmount = (value: string) => {
  const cleaned = value.replace(/[^\d.,]/g, "");
  const [whole, ...fraction] = cleaned.split(".");
  return fraction.length ? `${whole}.${fraction.join("")}` : whole;
};

export const Rows: Story = {
  ...getStoryMetaFromManifest("Table", "rows"),
  render: (args) => (
    <Table {...args}>
      <thead>
        <tr>
          <Table.HeaderCell>Pizza</Table.HeaderCell>
          <Table.HeaderCell>Crust & Size</Table.HeaderCell>
          <Table.HeaderCell align="end">Price</Table.HeaderCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Table.Cell>Pepperoni Supreme</Table.Cell>
          <Table.Cell>Wood-fired (12")</Table.Cell>
          <Table.Cell align="end">$24.50</Table.Cell>
        </tr>
        <tr>
          <Table.Cell>Truffle Mushroom</Table.Cell>
          <Table.Cell>Thin & Crispy (12")</Table.Cell>
          <Table.Cell align="end">$26.00</Table.Cell>
        </tr>
      </tbody>
    </Table>
  ),
  args: { variant: "rows" },
  play: async ({ canvas, userEvent }) => {
    const table = canvas.getByRole("table");
    const row = canvas.getByRole("cell", { name: "Pepperoni Supreme" }).closest("tr");
    const highlight = table.previousElementSibling;

    await userEvent.hover(row as HTMLTableRowElement);
    await expect(highlight).toHaveAttribute("data-visible", "true");
    await expect(highlight).toHaveAttribute("data-animate", "false");
    await expect(highlight).toHaveStyle({ overflow: "hidden" });
    await expect(canvas.getByRole("cell", { name: "$24.50" })).toHaveStyle({
      fontVariantNumeric: "tabular-nums",
      textAlign: "end",
    });

    await userEvent.unhover(table);
    await expect(highlight).toHaveAttribute("data-visible", "false");
  },
};

export const Grid: Story = {
  ...Rows,
  ...getStoryMetaFromManifest("Table", "grid"),
  args: { variant: "grid" },
  play: async ({ canvas }) => {
    const table = canvas.getByRole("table");
    await expect(table).toHaveAttribute("data-table-variant", "grid");
    await expect(table.previousElementSibling).toBeNull();
  },
};

export const HeaderAction: Story = {
  ...getStoryMetaFromManifest("Table", "header-action"),
  render: () => {
    const [showComputed, setShowComputed] = useState(false);

    return (
      <Table aria-label="Token values" columns={[{ ratio: 1 }, { ratio: 2 }]}>
        <thead>
          <tr>
            <Table.HeaderCell>Token</Table.HeaderCell>
            <Table.HeaderCell
              onAction={() => setShowComputed((current) => !current)}
              actionLabel={
                showComputed ? "Show token names" : "Show computed values"
              }
            >
              {showComputed ? "Computed Value" : "Token Name"}
              <Icon name="counter-clockwise-triangle-circle" />
            </Table.HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Table.Cell>--text-color</Table.Cell>
            <Table.Cell>
              {showComputed ? "oklch(10% 0.0312 239.31)" : "--grey-900"}
            </Table.Cell>
          </tr>
        </tbody>
      </Table>
    );
  },
  play: async ({ canvas, userEvent }) => {
    const action = canvas.getByRole("button", { name: "Show computed values" });

    await expect(action.closest("th")).toHaveAttribute("scope", "col");
    await userEvent.click(action);
    await expect(
      canvas.getByRole("button", { name: "Show token names" }),
    ).toBeVisible();
    await expect(
      canvas.getByRole("cell", { name: "oklch(10% 0.0312 239.31)" }),
    ).toBeVisible();
  },
};

export const GridInputUsage: Story = {
  ...getStoryMetaFromManifest("Table", "grid-input-usage"),
  render: (args) => {
    const [amount, setAmount] = useState("24.50");

    return (
      <Table
        {...args}
        variant="grid"
        layout="fixed"
        columns={[{ ratio: 2 }, { ratio: 1 }, { width: "12rem" }]}
        aria-label="Editable pizza order line item"
      >
      <thead>
        <tr>
          <Table.HeaderCell>Pizza</Table.HeaderCell>
          <Table.HeaderCell>Order Ref</Table.HeaderCell>
          <Table.HeaderCell align="end">Price</Table.HeaderCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Table.Cell>
            <TextInput
              usage="table"
              label="Pizza"
              hideLabel
              defaultValue="Pepperoni Feast"
            />
          </Table.Cell>
          <Table.Cell>
            <TextInput
              usage="table"
              label="Order Ref"
              hideLabel
              defaultValue="PIZZA-1042"
            />
          </Table.Cell>
          <Table.Cell>
            <TextInput
              usage="table"
              label="Price"
              hideLabel
              align="end"
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(event) => setAmount(sanitizeAmount(event.target.value))}
              insideBefore={
                <TextInput.InsideSlot density="text">
                  <Text variant="secondary">$</Text>
                </TextInput.InsideSlot>
              }
            />
          </Table.Cell>
        </tr>
      </tbody>
      </Table>
    );
  },
  args: { size: "m" },
  play: async ({ canvas, userEvent }) => {
    const table = canvas.getByRole("table", {
      name: "Editable pizza order line item",
    });
    const columns = table.querySelectorAll("col");
    const initialWidth = table.getBoundingClientRect().width;

    await expect(columns).toHaveLength(3);
    await expect(columns[2].style.width).toBe("12rem");
    const amount = canvas.getByRole("textbox", { name: "Price" });
    await expect(amount).toHaveStyle({
      textAlign: "end",
    });
    await expect(amount).toHaveAttribute("inputmode", "decimal");
    await userEvent.clear(amount);
    await userEvent.type(amount, "98xyz.76");
    await expect(amount).toHaveValue("98.76");
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });
    await expect(table.getBoundingClientRect().width).toBeCloseTo(
      initialWidth,
      1,
    );
  },
};

export const Columns: Story = {
  ...getStoryMetaFromManifest("Table", "columns"),
  render: () => (
    <Table
      variant="rows"
      size="m"
      aria-label="Column widths and overflow"
      layout="fixed"
      overflow="auto"
      overflowLabel="Column widths and overflow"
      columns={[{ width: "20rem" }, { ratio: 1 }, { ratio: 2 }]}
    >
      <thead>
        <tr>
          <Table.HeaderCell>Fixed — 20rem</Table.HeaderCell>
          <Table.HeaderCell>One ratio share</Table.HeaderCell>
          <Table.HeaderCell align="end">Preview</Table.HeaderCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Table.Cell>Pepperoni Diablo</Table.Cell>
          <Table.Cell>San Marzano sauce, fresh mozzarella, hot honey</Table.Cell>
          <Table.Cell align="end">
            <span>🍕</span>
          </Table.Cell>
        </tr>
      </tbody>
    </Table>
  ),
  play: async ({ canvas }) => {
    const table = canvas.getByRole("table", {
      name: "Column widths and overflow",
    });

    await expect(table.style.tableLayout).toBe("fixed");
    await expect(table.style.minWidth).toBe("");
    await expect(table.querySelectorAll("col")).toHaveLength(3);
    await expect(table.parentElement).toHaveAttribute("role", "region");
    await expect(table.parentElement).toHaveAttribute(
      "aria-label",
      "Column widths and overflow",
    );
    await expect(table.parentElement).toHaveAttribute("tabindex", "0");
    await expect(table.querySelector("col")?.style.width).toBe("20rem");
    await expect(
      canvas.getByRole("columnheader", { name: "Fixed — 20rem" }),
    ).toBeVisible();
    await expect(
      canvas.getByRole("columnheader", { name: "Preview" }),
    ).toHaveAttribute("data-table-cell-align", "end");
    await expect(canvas.getByRole("cell", { name: "🍕" })).toHaveAttribute(
      "data-table-cell-align",
      "end",
    );
    await expect(
      canvas.getByRole("cell", { name: "🍕" }).firstElementChild,
    ).toHaveAttribute("data-table-cell-content-align", "end");
  },
};

export const CellContent: Story = {
  ...getStoryMetaFromManifest("Table", "cell-content"),
  parameters: {
    ...getStoryMetaFromManifest("Table", "cell-content").parameters,
    layout: "fullscreen",
  },
  render: () => (
    <Table
      variant="rows"
      size="m"
      aria-label="Cell content behaviour"
      layout="fixed"
      columns={[{ width: "24rem" }, { ratio: 1 }, { ratio: 1 }]}
    >
      <thead>
        <tr>
          <Table.HeaderCell ellipsis>Signature Pizza Name</Table.HeaderCell>
          <Table.HeaderCell>Artisanal Ingredients</Table.HeaderCell>
          <Table.HeaderCell align="end">Oven Status</Table.HeaderCell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Table.Cell
            ellipsis
            title="Smoked Mozzarella, Hot Soppressata and Calabrian Chili Pizza"
          >
            Smoked Mozzarella, Hot Soppressata and Calabrian Chili Pizza
          </Table.Cell>
          <Table.Cell clamp={2}>
            Stone-baked sourdough crust topped with San Marzano tomatoes, fresh basil, and chili-infused honey.
          </Table.Cell>
          <Table.Cell align="end">
            <Badge>Baking (450°C)</Badge>
          </Table.Cell>
        </tr>
      </tbody>
    </Table>
  ),
  play: async ({ canvas }) => {
    await expect(
      canvas.getByRole("cell", { name: /Smoked Mozzarella/i }).firstElementChild,
    ).toHaveAttribute("data-table-cell-content-ellipsis", "");
    await expect(
      canvas.getByRole("cell", { name: /Stone-baked sourdough/i }).firstElementChild,
    ).toHaveAttribute("data-table-cell-content-clamp", "2");
    await expect(
      canvas.getByText("Baking (450°C)").parentElement,
    ).toHaveAttribute("data-table-cell-content-align", "end");
  },
};
