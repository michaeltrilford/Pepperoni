# Token strategy

- We will use styled-dictionary
- styled dictionary will handle the base tokens
- The reason why base only, is because semantic and component tokens for web don't often map well to other outputs, and it is better to focus on the base level.
- There will be a transformer in styled dictionary, to control the values. E.g. rem is for web, pt is for iOS etc.

```

Font Family:

--font-family: sans-serif;

Colours:


  --black: oklch(13.784% 0.0312 239.31); /* #000a14 */
  --black-opacity-10: oklch(13.784% 0.0312 239.31 / 10%);
  --black-opacity-20: oklch(13.784% 0.0312 239.31 / 20%);
  --black-opacity-30: oklch(13.784% 0.0312 239.31 / 30%);
  --black-opacity-40: oklch(13.784% 0.0312 239.31 / 40%);
  --black-opacity-50: oklch(13.784% 0.0312 239.31 / 50%);
  --black-opacity-60: oklch(13.784% 0.0312 239.31 / 60%);
  --black-opacity-70: oklch(13.784% 0.0312 239.31 / 70%);
  --black-opacity-80: oklch(13.784% 0.0312 239.31 / 80%);
  --black-opacity-90: oklch(13.784% 0.0312 239.31 / 90%);

  --white: oklch(100% 0 0);
  --white-opacity-10: oklch(100% 0 0 / 10%);
  --white-opacity-20: oklch(100% 0 0 / 20%);
  --white-opacity-30: oklch(100% 0 0 / 30%);
  --white-opacity-40: oklch(100% 0 0 / 40%);
  --white-opacity-50: oklch(100% 0 0 / 50%);
  --white-opacity-60: oklch(100% 0 0 / 60%);
  --white-opacity-70: oklch(100% 0 0 / 70%);
  --white-opacity-80: oklch(100% 0 0 / 80%);
  --white-opacity-90: oklch(100% 0 0 / 90%);

  --grey-100: oklch(98% 0 0);
  --grey-200: oklch(94% 0 0);
  --grey-300: oklch(88% 0 0);
  --grey-400: oklch(79% 0 0);
  --grey-500: oklch(69% 0 0);
  --grey-600: oklch(58% 0 0);
  --grey-700: oklch(47% 0 0);
  --grey-800: oklch(36% 0 0);
  --grey-900: oklch(24% 0 0);
  --grey-1000: oklch(14% 0 0);

  --grey-100: oklch(97% 0.003 250);
  --grey-200: oklch(92.749% 0.0017 247.84); /* #e6e7e8 */
  --grey-300: oklch(77.477% 0.0054 247.89); /* #b3b6b9 */
  --grey-400: oklch(55% 0.0096 247.98);
  --grey-500: oklch(49% 0.015 248);
  --grey-600: oklch(40% 0.018 248);
  --grey-700: oklch(32% 0.020 248);
  --grey-800: oklch(25.163% 0.0214 248.69); /* #1a232c */
  --grey-900: oklch(19% 0.026 244);
  --grey-1000: oklch(13.784% 0.0312 239.31); /* #000a14 */

  --turquoise-100: oklch(97.5% 0.020 200);
  --turquoise-200: oklch(94.903% 0.0451 199.83); /* #ccf8fa */
  --turquoise-300: oklch(88.310% 0.1008 199.40); /* #80edf2 */
  --turquoise-400: oklch(83.358% 0.1327 199.76); /* #34e2ea */
  --turquoise-500: oklch(81.068% 0.1378 200.67); /* #01dbe5 */
  --turquoise-600: oklch(68.569% 0.1165 200.60); /* #01afb7 */
  --turquoise-700: oklch(59% 0.100 200.5);
  --turquoise-800: oklch(48.943% 0.0830 200.33); /* #016e73 */
  --turquoise-900: oklch(37% 0.064 200);
  --turquoise-1000: oklch(26.633% 0.0453 199.51); /* #002c2e */

  --green-100: oklch(97% 0.025 144);
  --green-200: oklch(91% 0.050 144);
  --green-300: oklch(84% 0.080 144);
  --green-400: oklch(72% 0.120 144);
  --green-500: oklch(58.152% 0.1525 144.48); /* #33913a */
  --green-600: oklch(50% 0.132 144);
  --green-700: oklch(42% 0.112 144);
  --green-800: oklch(34% 0.092 144);
  --green-900: oklch(27% 0.070 144);
  --green-1000: oklch(20% 0.050 144);

  --orange-100: oklch(97% 0.020 50);
  --orange-200: oklch(92.326% 0.0440 50.42); /* #ffdecc */
  --orange-300: oklch(81.898% 0.1130 50.20); /* #ffae80 */
  --orange-400: oklch(72.938% 0.1789 46.57); /* #ff7d33 */
  --orange-500: oklch(68.370% 0.2120 40.59); /* #ff5c00 */
  --orange-600: oklch(58.044% 0.1775 41.30); /* #cc4a00 */
  --orange-700: oklch(49% 0.145 42);
  --orange-800: oklch(41.564% 0.1236 42.78); /* #802e00 */
  --orange-900: oklch(32% 0.090 46);
  --orange-1000: oklch(23.052% 0.0617 49.18); /* #331200 */

  --red-100: oklch(97% 0.020 29);
  --red-200: oklch(92% 0.050 29);
  --red-300: oklch(84% 0.090 29);
  --red-400: oklch(73% 0.150 29);
  --red-500: oklch(52.296% 0.2146 29.23); /* #c80000 */
  --red-600: oklch(45% 0.185 29);
  --red-700: oklch(38% 0.155 29);
  --red-800: oklch(31% 0.125 29);
  --red-900: oklch(25% 0.095 29);
  --red-1000: oklch(19% 0.070 29);

--space-000: 0
--space-100: 0.6
--space-200: 0.8
--space-300: 1.2
--space-400: 1.6
--space-500: 2.4
--space-600: 3.6
--space-700: 4.8
--space-800: 6

--radius-000: 0
--radius-100: 4px
--radius-200: 6px
--radius-300: 8px
--radius-400: 16px
--radius-500: 24px
--radius-600: 36px
--radius-700: 48px

--stroke-100: 1px
--stroke-200: 2px
--stroke-300: 3px
--stroke-400: 4px

Type Scale: See asset in assets/type-scale.png
Type scale informs my other sizes for common sizing also.

--font-size-100: 1.2
--font-size-200: 1.4
--font-size-300: 1.6
--font-size-400: 1.8
--font-size-500: 2.1
--font-size-600: 2.4
--font-size-700: 3.6
--font-size-800: 4.8
--font-size-900: 6.0
--font-size-1000: 7.2
--font-size-1100: 8.4
--font-size-1200: 9.6

Line height pairs each font size with a target pixel height on a 4px baseline. The unitless token is calculated as target line height divided by font size. UI and body sizes retain more space for readability, while display sizes tighten progressively as they grow.

--line-height-50: 1.45454545; /* 16 / 11 */
--line-height-100: 1.33333333; /* 16 / 12 */
--line-height-200: 1.42857143; /* 20 / 14 */
--line-height-300: 1.50000000; /* 24 / 16 */
--line-height-400: 1.33333333; /* 24 / 18 */
--line-height-500: 1.33333333; /* 28 / 21 */
--line-height-600: 1.33333333; /* 32 / 24 */
--line-height-700: 1.22222222; /* 44 / 36 */
--line-height-800: 1.16666667; /* 56 / 48 */
--line-height-900: 1.13333333; /* 68 / 60 */
--line-height-1000: 1.11111111; /* 80 / 72 */
--line-height-1100: 1.09523810; /* 92 / 84 */
--line-height-1200: 1.08333333; /* 104 / 96 */


--font-weight-400: 400
--font-weight-500: 500
--font-weight-600: 600
--font-weight-700: 700

Letter spacing provides small, deliberate adjustments for compact labels and uppercase interface text.

--letter-spacing-100: 0.1px
--letter-spacing-200: 0.2px

--speed-100: 0.1s
--speed-200: 0.2s
--speed-300: 0.3s
--speed-400: 0.4s

```
