# Design System Foundations

## Design Tokens

Refer to the ./tokens-thinking.md for the token direction for our Styled Dictionary approach. For web, we will expect a CSS Variable output, then for iOS, Android we will expect appropriate mappings to pt and required colour formats.

### Semantic Mapping

Component states map through semantic tokens rather than directly to
colour values.

Note: The semantic layer helps setup the light/dark mode in our semantic ranges also.

- `--green-400` → `--positive` → Success
- `--yellow-400` → `--caution` → Warning
- `--red-400` → `--attention` → Error

An information state is not expected for form elements.

### Tone Ranges

Positive, Attention and Caution will each support a five-tone range.

### Focus

Focus will use dedicated outline semantic tokens.

### Neutral Tokens

Neutral colours (grey tone ranges and form colours) will map to shared
semantic form tokens.

Component-level colour tokens are not expected for these.

---

# Documentation Outputs

## API.doc

- Props
- Descriptions

## Usage.doc

- Accessibility
- Anatomy
- Behaviour
- Do & Don't guidance
- Story metadata
  - Title
  - Description
  - Usage
  - Related

---

# Guidance

## Do

- Stack text inputs vertically.
- Prefer Optional over Required indicators.
- Use a visible label on the primary text input and hide the label on
  secondary text inputs where appropriate.

## Don't

- Use column-based layouts unless required.

---

# Boundaries

Leverage:

- Storybook stories
- Guru Guides

A storefront/marketing site is out of scope for the initial implementation but remains the preferred future direction for published documentation.

### Storybook versus storefront

Storybook remains valuable for component development, interactive examples,
controls, and automated accessibility checks. It is not the ideal final
documentation storefront because its generated docs layout and typography
are difficult to control precisely. Small presentation changes, such as
spacing around engineering guidance or the density of accessibility lists,
require Storybook-specific overrides and can still be affected by Storybook's
own renderer styles.

A standalone storefront should become the primary builder-facing experience
when the documentation matures. It will allow the design system to control
navigation, layout, responsive behaviour, accessibility guidance, search,
and content hierarchy directly, while continuing to use Storybook as the
component workshop and validation environment.

The documentation model will mirror the manifest structure so it can
power Storybook and Guru Guides.
