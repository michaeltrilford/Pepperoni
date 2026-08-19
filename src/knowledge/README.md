# Pepperoni component knowledge

This directory is the canonical machine-readable knowledge source for Pepperoni UI.

## Generated component manifest

`component-manifest.json` combines three sources for every component:

- React docgen output from the implementation;
- the authored public contract from `Api.ts`; and
- usage, accessibility, behaviour and composition guidance from `Doc.ts`.

Component stories consume this generated manifest for their API controls and documentation. Edit the component metadata sources and run `npm run build:manifest`; do not edit the manifest directly.

## Distribution

The build publishes the generated consumer artifacts from this directory to:

- `public/knowledge`, available locally or from Storybook at `/knowledge/...`;
- `dist/knowledge`, included in the npm package and exported as `pepperoni-ui/knowledge/*`.

Future knowledge artifacts and agent skills placed in this directory are distributed through the same paths automatically.

## Composition fragments

`fragments/*.json` captures reusable component use cases as a description, selection guidance, composition rules, participating components, and a framework-neutral JSON tree. Manifest generation validates these files and includes them under the top-level `fragments` collection.

The same build converts every fragment into the generated `skills/pepperoni-components/SKILL.md`. Add or update the source fragment rather than editing the generated skill directly.

Raw fragment files remain source-only. They are excluded from public and npm outputs because their information is already available in both the manifest and portable skill.
