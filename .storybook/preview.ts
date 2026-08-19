import type { Decorator, Preview } from "@storybook/react";
import "../src/tokens/brand.css";
import "../src/tokens/surfaces.css";
import "../src/tokens/tokens.css";
import "./storybook-foundation.css";
import "./preview.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

const stableFocusMarker = Symbol.for("pepperoni.storybook.stable-focus");

/**
 * Storybook 10.5.5's Vitest preview patch exposes HTMLElement.focus through a
 * getter. Docs' focus manager can retain that returned function and invoke it
 * without its element receiver, which causes `Illegal invocation` and leaves
 * the Docs canvas blank. Restore a receiver-safe function after the preview
 * annotations have run, while keeping the Vitest toolbar enabled.
 */
const withStableFocus: Decorator = (Story) => {
  const prototype = window.HTMLElement.prototype;
  const descriptor = Object.getOwnPropertyDescriptor(prototype, "focus");

  if (descriptor?.get) {
    const element = document.createElement("button");
    const focus = element.focus;
    const stableFocus = function (this: HTMLElement, ...args: Parameters<typeof focus>) {
      return focus.apply(this, args);
    };

    Object.defineProperty(stableFocus, stableFocusMarker, { value: true });
    Object.defineProperty(prototype, "focus", {
      configurable: true,
      writable: true,
      value: stableFocus,
    });
  }

  return Story();
};

const preview: Preview = {
  initialGlobals: {
    theme: "light"
  },
  decorators: [
    withStableFocus,
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark"
      },
      defaultTheme: "light",
      attributeName: "data-theme",
      parentSelector: "html"
    })
  ],
  parameters: {
    backgrounds: {
      disable: true
    },
    options: {
      storySort: {
        order: ["Foundations", "Components"]
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      context: "body",
      config: {},
      options: {}
    }
  }
};

export default preview;
