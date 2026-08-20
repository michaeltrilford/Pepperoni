# Pepperoni UI agent guidance

## Runtime

Use Node `20.19.5` for this repository (`.nvmrc`). Storybook 10 requires Node `20.19+` or newer. Run `nvm use` before installing dependencies or running build and Storybook commands.

Storybook stories are tested through `@storybook/addon-vitest` in a dedicated Vitest browser project. Use `npm run test:run` for unit tests and `npm run test:storybook` for browser-based story, interaction, and accessibility tests. The Storybook test project uses Playwright Chromium.

## Component composition contracts

Use explicit usage props together with stable data attributes when a child component needs to affect its parent layout.

TextInput embedded in Table is the reference pattern:

- `usage="table"` is the public composition API. It opts TextInput into table behaviour and allows it to inherit the nearest Table size through `TableSizeContext`.
- TextInput emits `data-table-cell-control` only while that usage is active.
- Table detects the descendant through `td:has([data-table-cell-control])` and removes its own cell padding, allowing the control to fill the cell.

```css
.table td:has([data-table-cell-control]) {
  padding: 0;
}
```

This separates responsibilities cleanly: the child declares its intended usage, while the parent responds through semantic DOM state. Prefer this pattern over generated CSS-module class names, parent-specific class props, DOM traversal in JavaScript, or duplicated layout flags.

Keep data attributes stable and descriptive because they form an internal styling contract. Emit them only when the corresponding public usage prop is active.

## Component knowledge

The component knowledge artifact is generated at `src/knowledge/component-manifest.json` by `npm run build:manifest`. It combines docgen output, each component's `Api.ts`, and each component's `Doc.ts` into one validated source for Storybook and knowledge tooling.

Treat `Api.ts` and `Doc.ts` as authoring inputs only. Storybook controls, descriptions, and external knowledge consumers must read the generated manifest rather than importing those working metadata files directly. The Storybook development and production commands regenerate the manifest before starting.

Do not edit the generated manifest directly. Update the component, `Api.ts`, or `Doc.ts`, then rebuild it. Manifest generation fails when component documentation or custom API metadata is missing.

`src/knowledge` is the canonical knowledge directory. Manifest generation publishes its generated consumer artifacts to:

- `public/knowledge` for Storybook, local static access, and direct downloads such as `/knowledge/component-manifest.json`.
- `dist/knowledge` for distribution artifacts and bundle consumption.

Place future distributable agent skills and supporting knowledge files under `src/knowledge`. Do not author separate public or package copies; the build replaces those mirrors so they cannot drift from the source knowledge.

Author reusable cross-component use cases as JSON files under `src/knowledge/fragments`. Each fragment must provide an id, title, description, useWhen guidance, participating components, composition rules, and a `{ type, props, children }` JSON example. Manifest generation adds these to the top-level `fragments` collection and regenerates `src/knowledge/skills/pepperoni-components/SKILL.md` from all available fragments. Raw fragment files are source-only build inputs and are excluded from public and npm mirrors.
