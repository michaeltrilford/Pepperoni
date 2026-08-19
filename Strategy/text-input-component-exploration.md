# Text Input Component Exploration

## Objective

Design and implement an accessible, composable text input component that
balances usability, flexibility and system reuse.

The outcome is a well-considered foundation that can be iterated on.

------------------------------------------------------------------------

# Areas to Explore

## Accessibility

Preserve native input behaviour while supporting accessible interaction
patterns.

### States

-   Passive
-   Hover
-   Focus
-   Validation
    -   Success
    -   Warning
    -   Error

Validation will be state-driven, with external conditions controlling
both the text input and its associated message.

### Native Behaviour

Support standard text input behaviour, including:

-   Label association (`for` / `id`)
-   Placeholder
-   Default input behaviour

### Labels

Labels are required for accessibility.

Support:

-   Visible label
-   Hidden label
-   Optional
-   Required

Guidelines will recommend using **Optional** rather than **Required**
where appropriate.

------------------------------------------------------------------------

## Composition

The component will support composition through slots.

Potential slot content includes:

-   Icons
-   Badges
-   Tooltips
-   Actions
-   Indicators (e.g. KG)

Supporting sub-components will be used where appropriate.

------------------------------------------------------------------------

## Validation & Messaging

Validation supports:

-   Success
-   Warning
-   Error

These states communicate with a shared Message component.

The component may also support secondary helper text beneath the
validation message.

------------------------------------------------------------------------

## Component API

The text input will support:

-   Small
-   Medium (default)
-   Large
-   Corner radius override

The corner radius override provides flexibility for table or line-item
scenarios.

Where possible, parent components should push the required prop down,
while the text input still exposes the prop when direct control is required.

------------------------------------------------------------------------

# Unknowns to Validate

## Label Composition

Validate that React supports a standalone Label atom while preserving
expected label-to-input interaction.

## Wrapper Structure

The text input internals will initially be wrapped in a higher-order
component (HOC).

Alternative approaches may be reviewed if they provide a cleaner
implementation.
