export const brandSnippets = {
  css: `/**
 * Web CSS Variables: public/tokens/brand.css
 */
:root {
  --black: oklch(10% 0.0312 239.31);
  --grey-100: oklch(98% 0 0);
  --grey-500: oklch(69% 0 0);
  --space-100: 0.6rem;
  --radius-100: 4px;
  --font-size-100: 1.2rem;
  --line-height-100: 1.33333333;
  --font-weight-400: 400;
  --letter-spacing-100: 0.1px;
  --speed-100: 0.1s;
}`,
  ios: `//
// iOS Swift Class: public/tokens/Tokens.swift
//
import UIKit

public class PepperoniTokens {
    public static let black = oklch(10% 0.0312 239.31)
    public static let grey100 = oklch(98% 0 0)
    public static let grey500 = oklch(69% 0 0)
    public static let space100 = 0.6rem
    public static let radius100 = 4px
    public static let fontSize100 = CGFloat(19.20)
}`,
  android: `<!--
  Android Resources: public/tokens/colors.xml
-->
<resources>
  <color name="black">oklch(10% 0.0312 239.31)</color>
  <color name="grey_100">oklch(98% 0 0)</color>
  <color name="grey_500">oklch(69% 0 0)</color>
</resources>`,
  figmaCss: `{
  "--black": {
    "$value": {
      "colorSpace": "srgb",
      "components": [0.00001, 0.03921, 0.07841],
      "alpha": 1,
      "hex": "#000a14"
    },
    "$type": "color"
  },
  "--speed-100": {
    "$value": { "value": 0.1, "unit": "s" },
    "$type": "duration"
  }
}`,
  figmaIos: `{
  "black": {
    "$value": {
      "colorSpace": "srgb",
      "components": [0.00001, 0.03921, 0.07841],
      "alpha": 1,
      "hex": "#000a14"
    },
    "$type": "color"
  },
  "grey100": {
    "$value": {
      "colorSpace": "srgb",
      "components": [0.976, 0.976, 0.976],
      "alpha": 1,
      "hex": "#f8f8f8"
    },
    "$type": "color"
  },
  "speed100": {
    "$value": { "value": 0.1, "unit": "s" },
    "$type": "duration"
  }
}`,
} as const;
