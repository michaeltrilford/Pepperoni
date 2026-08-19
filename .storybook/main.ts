import type { StorybookConfig } from "@storybook/react-vite";
import stylex from "@stylexjs/unplugin";
import { basename } from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal: async (config) => {
    config.plugins ??= [];
    const isDev = config.command === "serve";
    config.plugins.unshift(
      stylex.vite({
        dev: isDev,
        devMode: isDev ? "full" : "off",
        runtimeInjection: false,
        classNamePrefix: "pep-",
      }),
    );
    config.css ??= {};
    config.css.modules ??= {};
    config.css.modules.generateScopedName = (localName, filename) => {
      const componentName = basename(filename, ".module.css").replace(/[^a-zA-Z0-9_-]/g, "-");
      return localName === "root" ? `pep-${componentName}` : `pep-${componentName}-${localName}`;
    };
    return config;
  }
};

export default config;
