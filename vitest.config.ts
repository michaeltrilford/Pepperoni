import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, mergeConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import viteConfig from "./vite.config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        provider: "v8",
        include: [
          "src/components/**/*.{ts,tsx}",
          "src/index.ts"
        ],
        exclude: [
          "src/components/**/*.stories.{ts,tsx}",
          "src/components/**/Api.ts",
          "src/components/**/Doc.ts",
          "src/**/*.test.{ts,tsx}",
          "src/test/**"
        ],
        thresholds: {
          statements: 99,
          branches: 95,
          functions: 100,
          lines: 99
        }
      },
      projects: [
        {
          extends: true,
          test: {
            name: "unit",
            include: ["src/**/*.test.{ts,tsx}"],
            globals: true,
            environment: "jsdom",
            setupFiles: ["./src/test/setup.ts"],
            css: true
          }
        },
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir: path.join(dirname, ".storybook"),
              storybookScript: "npm run storybook -- --ci"
            })
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              provider: "playwright",
              headless: true,
              instances: [{ browser: "chromium" }]
            },
            setupFiles: ["./.storybook/vitest.setup.ts"]
          }
        }
      ]
    }
  })
);
