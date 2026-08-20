# Knowledge Base 🧠

A structured, machine-readable foundation for design systems. Generates portable agent skills, verified component contracts, and cross-component composition recipes for developers and AI pair programmers.

## Generated Component Manifest

`component-manifest.json` combines three sources for every component into a single validated schema:

1. **Implementation Docgen**: React TypeScript docgen extracted directly from component code;
2. **Authored Public Contract**: Explicit API specifications from each component's `Api.ts`; and
3. **Usage Guidance**: Accessibility, behaviour, and composition rules from each component's `Doc.ts`.

Storybook documentation and controls consume this generated manifest. Edit the component metadata sources and run `npm run build:manifest`; do not edit the manifest directly.

## Agent Ecosystem & Extensibility

Captures reusable component use cases as descriptions, selection guidance, composition rules, participating components, and framework-neutral JSON trees.

- **Using Pepperoni (`Skills`)**: A self-contained, portable markdown guide (`skills/pepperoni-components/SKILL.md`) that equips AI assistants with verified component APIs, composition contracts, and prompt recipes to prevent hallucinations.
- **Bite-Sized Patterns (`Fragments`)**: Reusable multi-component recipes authored as structured JSON blueprints in `src/knowledge/fragments/`, automatically compiled into `SKILL.md`.
- **Create an MCP (`MCP`)**: Serve Pepperoni's manifest and skills through a Model Context Protocol (MCP) server to provide live component lookups, schema validation, and layout composition tools inside Cursor, Claude, and Antigravity.

## Distribution

The build publishes generated consumer artifacts to key distribution channels.

- `public/knowledge`: Available locally, or via Storybook and production at `https://pepperoni.fit/knowledge/component-manifest.json` and `/knowledge/skills/...`;
- `dist/knowledge`: For build distribution and bundle consumption;
- **Knowledge Repository**: Set up a build or CI script to copy generated artifacts to a dedicated repository for MCP server consumption and direct distribution to users.
