# Pepperoni 🍕

> An opinionated React design system foundation.

Pepperoni is a starting point for building scalable design systems with React. It demonstrates an approach to tokens, theming, component architecture, accessibility, and structured design system knowledge.

Built with [StyleX](https://stylexjs.com/) and [Style Dictionary](https://amzn.github.io/style-dictionary/), it includes a small set of components designed to demonstrate the foundations and patterns needed to grow a larger system.

---

## Why a Foundation?

- **A Baseline for Growth**: A focused set of core primitives (Button, Field, Table, Box, Card) demonstrating the patterns, accessibility conventions, and token relationships needed to build a comprehensive system.
- **Agent-Ready by Design**: Machine-readable component manifests (`/knowledge/component-manifest.json`) and portable agent skills (`pepperoni-components/SKILL.md`) allow AI coding assistants to compose accessible UI with zero hallucination.
- **Strict Composition Contracts**: Child-to-parent layout interaction is managed through explicit semantic DOM state (e.g. `[data-table-cell-control]`), eliminating fragile CSS overrides.
- **Token-Driven & Zero-Runtime**: StyleX compiles to atomic CSS ahead of time, while Style Dictionary allows Figma tokens to swap themes (light, dark, brand) effortlessly.

## Getting Started

Clone the repository and install dependencies:

```bash
# Use the required Node version
nvm use

# Install dependencies
npm install
```

### Usage Example

```tsx
import "@stylexjs/stylex";
import "./src/tokens/tokens.css";
import "./src/styles/foundation.css";
import { Button, Box, Heading, Text, Field, TextInput } from "./src";

export function App() {
  return (
    <Box direction="column" gap="400" padding="400">
      <Heading level="h1" size="h1">Pepperoni Pizzeria</Heading>
      <Text size="m" variant="secondary">
        A React design system foundation.
      </Text>

      <Field label="Special Instructions" required>
        <TextInput placeholder="e.g. Extra crispy stone-baked crust" />
      </Field>

      <Button variant="primary" size="m">
        Order Pizza Now
      </Button>
    </Box>
  );
}
```

---

## Components

| Component | Description |
| :--- | :--- |
| **`Badge`** | Status indicators and tags with various styles. |
| **`Box`** | Layout container for flexbox-based direction, alignment, gap, and padding. |
| **`Button`** | Action buttons with primary, secondary, subtle variants and usage contracts. |
| **`Card`** | Container surface for grouping content with elevation and surface tokens. |
| **`Field`** | Form control wrapper providing labels, hints, validation, and error messages. |
| **`Heading`** | Semantic heading typography (h1–h6) with consistent scale. |
| **`Icon`** | SVG icon system support. |
| **`Label`** | Standalone label element for accessible inputs. |
| **`Table`** | Dense and comfortable data tables with nested control contract support. |
| **`Text`** | Typography body text with sizes, weights, and color variants. |
| **`TextInput`** | Form text input supporting slots (leading/trailing icons) and table modes. |

---

## Development & Scripts

Pepperoni requires **Node >= 20.19.5** (managed via `.nvmrc` and `volta`).

```bash
# Ensure correct Node version
nvm use

# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Start Vite dev playground
npm run dev

# Build tokens (Light theme default)
npm run build:tokens

# Build tokens for specific Figma themes
FIGMA_THEME=light npm run build:tokens
FIGMA_THEME=dark npm run build:tokens
FIGMA_THEME=both npm run build:tokens

# Generate component knowledge manifest & agent skills
npm run build:manifest

# Build library and Storybook
npm run build

# Run unit tests
npm run test:run

# Run Storybook browser tests (Playwright Chromium)
npm run test:storybook

# One-time install for Storybook test browser
npx playwright install chromium

# Run full CI check (build + unit tests)
npm run check
```

---

## Structured Knowledge Base & Agent Skills

Pepperoni publishes a machine-readable knowledge base and exportable skills so human developers, tooling, and AI coding agents have authoritative, validated guidelines without hallucination:

- **Component Manifest** (`/knowledge/component-manifest.json`): Single unified artifact combining docgen types, API metadata, component rules, and authored composition fragments.
- **Agent Skill** (`/knowledge/skills/pepperoni-components/SKILL.md`): Portable, self-contained single-file markdown skill containing component APIs, composition contracts, and prompt recipes for LLMs.

### Accessing Knowledge
- **Source Artifact**: `src/knowledge/component-manifest.json`
- **Static / HTTP Access**:
  - `/knowledge/component-manifest.json`
  - `/knowledge/skills/pepperoni-components/SKILL.md`

---

## Design Tokens & Multi-Platform Assets

Tokens are authored in `tokens/base.json` and transformed via [Style Dictionary](https://amzn.github.io/style-dictionary/) into runtime CSS and multi-platform artifacts served statically from `public/tokens/`:

| Platform / Format | Public File Path | Description |
| :--- | :--- | :--- |
| **Web CSS** | `/tokens/tokens.css`, `/tokens/brand.css`, `/tokens/surfaces.css` | CSS custom properties with light/dark theme support |
| **iOS** | `/tokens/Tokens.swift` | Swift `PepperoniTokens` struct for iOS applications |
| **Android** | `/tokens/colors.xml` | XML color resources for Android native UI |
| **Figma (CSS keys)** | `/tokens/figma-css.json` | Token values with `--kebab-case` keys for Figma token plugins |
| **Figma (iOS keys)** | `/tokens/figma-ios.json` | Token values with `camelCase` keys for Figma iOS mapping |

To recompile tokens across platforms:

```bash
# Default light theme build
npm run build:tokens

# Build with specific theme modes
FIGMA_THEME=both npm run build:tokens
```

---

## Token Architecture: Surfaces vs. Core Greys

Pepperoni separates **Surface Tonal Ramps** (`--surface-tone-*`) from **Core Greys** (`--grey-*`) because UI backgrounds and content foregrounds have fundamentally different distribution needs:

```
LIGHTNESS SPECTRUM (100% ──────────────────────────► 0%)

1. Core Greys (Linear Distribution)
   [100]───[200]───[300]───[400]───[500]───[600]───[700]───[800]───[900]───[1000]
   98%     91%     80%     62%     50%     40%     31%     23%     16%     12%
   ▲                                                                       ▲
   └──────────────────────── EVEN DISTRIBUTION ────────────────────────────┘
   (Purpose: Text contrast, borders, icons, form controls, disabled states)

2. Surface Tonal Ramp (Inverted Bell Curve / Bimodal Distribution)
   LIGHT SURFACES (High Density)                    DARK SURFACES (High Density)
   ██████████                                                        ██████████
   ████████                                                            ████████
   ██████                                                                ██████
   ████                                                                    ████
   [100 ➔ 500]                                                     [600 ➔ 1100]
   100% ➔ 86%                MIDTONE VOID (85% - 25%)                 24% ➔ 4%
                            (No readable UI surfaces)
   ▲                                                                       ▲
   └─ Tight micro-steps for Canvas,                 Tight micro-steps for Dark ──┘
      Cards, Modals, & Elevation                    Canvas, Panels, & Elevation
```

### Why They Are Independent:

1. **Inverted Bell Curve Concentration**: Surfaces only exist at the extreme light end (100%–86%) and dark end (24%–4%). Midtones (30%–70%) cannot serve as readable surface containers because text fails WCAG 4.5:1 contrast against them.
2. **Granular Micro-Steps for Elevation**: UI elevation requires subtle 2%–4% lightness deltas to distinguish nested card layers, floating popovers, and sunken wells without harsh visual breaks.
3. **Decoupled Theme Tuning**: Adjusting surface elevation depth or canvas contrast in `tokens/surface.json` never breaks typography or border contrast tokens in `tokens/base.json`.


