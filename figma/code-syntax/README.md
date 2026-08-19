# Pepperoni token code syntax

Figma's native DTCG JSON importer does not import variable Code syntax. Run this
local development plugin after importing a generated token file.

1. In Figma, open **Plugins → Development → Import plugin from manifest**.
2. Select this folder's `manifest.json`.
3. Import `figma-css.json` into the web workspace, or `figma-ios.json` into the
   mobile workspace.
4. Run **Pepperoni token code syntax**.

Variables beginning with `--` receive Web syntax such as `var(--grey-100)`.
Other variables receive iOS syntax such as `PepperoniTokens.grey100`.
