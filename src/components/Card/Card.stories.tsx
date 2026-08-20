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

export const NestedLifted: Story = {
  ...getStoryMetaFromManifest("Card", "nested-lifted"),
  render: () => (
    <div style={{ maxWidth: "48rem" }}>
      <Card size="l" surface="100" surfaceDirection="lift">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-500)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <Text size="l" weight={600}>
                Pizzeria Production Floor
              </Text>
              <Text size="m" variant="secondary">
                Level 1 Lifted Surface (100)
              </Text>
            </div>
            <Badge variant="positive">Kitchen Open</Badge>
          </div>

          <Card size="m" surface="200" surfaceDirection="lift">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-400)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <Text size="m" weight={600}>
                    Artisanal Dough Mixing Station
                  </Text>
                  <Text size="s" variant="secondary">
                    Level 2 Lifted Surface (200)
                  </Text>
                </div>
                <Badge variant="caution">Preheating</Badge>
              </div>

              <Card size="s" surface="300" surfaceDirection="lift">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <Text size="s" weight={600}>
                      Fermentation Vault 04
                    </Text>
                    <Text size="s" variant="secondary">
                      Level 3 Lifted Surface (300)
                    </Text>
                  </div>
                  <Button size="s" variant="secondary">
                    Check temperature
                  </Button>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Pizzeria Production Floor")).toBeInTheDocument();
    await expect(canvas.getByText("Artisanal Dough Mixing Station")).toBeInTheDocument();
    await expect(canvas.getByText("Fermentation Vault 04")).toBeInTheDocument();
  },
};

export const NestedDepth: Story = {
  ...getStoryMetaFromManifest("Card", "nested-depth"),
  render: () => (
    <div style={{ maxWidth: "48rem" }}>
      <Card size="l" surface="100" surfaceDirection="depth">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-500)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <Text size="l" weight={600}>
                Oven Pit Diagnostics
              </Text>
              <Text size="m" variant="secondary">
                Level 1 Depth Inset (100)
              </Text>
            </div>
            <Badge variant="attention">High Temp Area</Badge>
          </div>

          <Card size="m" surface="200" surfaceDirection="depth">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-400)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <Text size="m" weight={600}>
                    Refractory Stone Hearth
                  </Text>
                  <Text size="s" variant="secondary">
                    Level 2 Depth Inset (200)
                  </Text>
                </div>
                <Badge color="pepperoni">Wood Burning</Badge>
              </div>

              <Card size="s" surface="300" surfaceDirection="depth">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <Text size="s" weight={600}>
                      Internal Flame Sensor Well
                    </Text>
                    <Text size="s" variant="secondary">
                      Level 3 Depth Inset (300)
                    </Text>
                  </div>
                  <Button size="s" variant="attention">
                    Recalibrate sensor
                  </Button>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Oven Pit Diagnostics")).toBeInTheDocument();
    await expect(canvas.getByText("Refractory Stone Hearth")).toBeInTheDocument();
    await expect(canvas.getByText("Internal Flame Sensor Well")).toBeInTheDocument();
  },
};
