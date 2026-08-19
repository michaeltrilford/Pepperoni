import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { Card } from ".";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Text } from "../Text";
import { TextInput } from "../TextInput";
import { Table } from "../Table";
import {
  getManifestArgTypes,
  getManifestComponentDescription,
  getStoryMetaFromManifest,
} from "../../types/guidelines";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: { component: getManifestComponentDescription("Card") },
    },
  },
  args: { size: "m", padding: true, surface: "100", surfaceDirection: "lift" },
  argTypes: getManifestArgTypes("Card"),
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Size: Story = {
  ...getStoryMetaFromManifest("Card", "size"),
  render: (args) => (
    <div>
      <Card {...args}>
        <strong>{args.size?.toUpperCase()} PIZZA BOX</strong>
        <p style={{ margin: "var(--space-200) 0 0" }}>
          Surface content with size-based radius and padding for stone-baked pizza orders.
        </p>
      </Card>
    </div>
  ),
};

export const TableComposition: Story = {
  ...getStoryMetaFromManifest("Card", "table-composition"),
  render: () => (
    <Card padding={false} data-testid="recent-payments-card">
      <Table usage="card" variant="rows" aria-label="Recent pizza orders table">
        <thead>
          <tr>
            <Table.HeaderCell>Pizza Order</Table.HeaderCell>
            <Table.HeaderCell align="end">Price</Table.HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Table.Cell>Pepperoni Supreme (Large)</Table.Cell>
            <Table.Cell align="end">$24.50</Table.Cell>
          </tr>
          <tr>
            <Table.Cell>Quattro Formaggi (Medium)</Table.Cell>
            <Table.Cell align="end">$22.00</Table.Cell>
          </tr>
        </tbody>
      </Table>
    </Card>
  ),
  play: async ({ canvas }) => {
    const card = canvas.getByTestId("recent-payments-card");
    const table = canvas.getByRole("table", { name: "Recent pizza orders table" });

    await expect(card).toHaveAttribute("data-size", "m");
    await expect(table).toHaveAttribute("data-table-usage", "card");
    const finalRowCells = table.querySelectorAll("tbody tr:last-child td");
    await expect(finalRowCells).toHaveLength(2);
    await expect(finalRowCells[0]).toHaveStyle({ borderBottomWidth: "0px" });
    await expect(finalRowCells[1]).toHaveStyle({ borderBottomWidth: "0px" });
  },
};

export const Nested: Story = {
  ...getStoryMetaFromManifest("Card", "nested"),
  render: () => (
    <div>
      <Card size="l" surface="100" surfaceDirection="lift">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-600)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-100)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-300)",
              }}
            >
              <Text size="l" weight={600}>
                Pizzeria Kitchen
              </Text>
              <Badge size="s">Wood Fired</Badge>
            </div>
            <Text size="m" variant="secondary">
              Manage oven queues, artisanal toppings, and customer orders.
            </Text>
          </div>
          <Card size="m" surface="200" surfaceDirection="lift">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-700)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) minmax(30rem, 1fr)",
                  gap: "var(--space-100)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-100)",
                  }}
                >
                  <Text size="l" weight={600}>
                    Pizzaiolo Roster
                  </Text>
                  <Text size="s" variant="secondary">
                    Check which chef is currently managing the oven station.
                  </Text>
                </div>
                <TextInput
                  label="Search chefs"
                  hideLabel
                  size="s"
                  placeholder="Search chef by name"
                />
              </div>
              <Card size="s" surface="300" surfaceDirection="depth">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-300)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--space-100)",
                    }}
                  >
                    <Text size="l" weight={600}>
                      Head Pizzaiolo
                    </Text>
                    <Text size="s" variant="secondary">
                      Master of the Neapolitan sourdough crust.
                    </Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "var(--space-300)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--space-100)",
                      }}
                    >
                      <Text size="m" weight={600}>
                        Marco Rossi
                      </Text>
                      <Badge size="s">Head Chef</Badge>
                    </div>
                    <Button size="s" variant="secondary">
                      View station
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
          <Card size="m" surface="200" surfaceDirection="lift">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(30rem, 1fr)",
                gap: "var(--space-100)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-100)",
                }}
              >
                <Text size="l" weight={600}>
                  Signature Pizza Recipe
                </Text>
                <Text size="s" variant="secondary">
                  Set default sourdough fermentation time.
                </Text>
              </div>
              <TextInput
                label="Dough recipe"
                defaultValue="48-Hour Cold Ferment"
                after={<Button usage="text-input-after">Save recipe</Button>}
              />
            </div>
          </Card>
        </div>
      </Card>
    </div>
  ),
};

export const NestedInset: Story = {
  ...getStoryMetaFromManifest("Card", "nested-inset"),
  render: () => (
    <div>
      <Card size="l" surface="100" surfaceDirection="lift">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-600)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-100)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-300)",
              }}
            >
              <Text size="l" weight={600}>
                Pizza Delivery Preferences
              </Text>
              <Badge size="s">Express</Badge>
            </div>
            <Text size="m" variant="secondary">
              Configure delivery packaging, hot bags, and driver notes.
            </Text>
          </div>
          <Card size="m" surface="200" surfaceDirection="depth">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent: "space-between",
                gap: "var(--space-700)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) minmax(30rem, 1fr)",
                  gap: "var(--space-100)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-100)",
                  }}
                >
                  <Text size="l" weight={600}>
                    Delivery Address
                  </Text>
                  <Text size="s" variant="secondary">
                    Where should we deliver your hot pizzas?
                  </Text>
                </div>
                <TextInput
                  label="Street address"
                  placeholder="123 Napoli Way, Suite 4"
                  after={<Button usage="text-input-after">Set address</Button>}
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) minmax(30rem, 1fr)",
                  gap: "var(--space-100)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-100)",
                  }}
                >
                  <Text size="l" weight={600}>
                    Pizza Box Heat Retention
                  </Text>
                  <Text size="s" variant="secondary">
                    Insulated thermal pouch packaging for long-distance deliveries.
                  </Text>
                </div>
                <Button variant="secondary">Manage packaging</Button>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  ),
};
