# Spartan Themes

The library lugraff-spartan-themes covers the themes and modes of the Spartan user interface.

## Installation:

### Create a NX-Workspace

Use Sass(Scss) Files!

- npx create-nx-workspace@latest <appName> --pm=pnpm

#### Pnpm aktivieren:

- corepack enable pnpm
- pnpm i

### Add Spartan-Cli and Angular-CDK and Spartan-Themes

- pnpm i -D @spartan-ng/cli
- pnpm i @angular/cdk
- pnpm i lugraff-spartan-themes

### Generate Tailwind and Spartan UI

- pnpx nx generate @nx/angular:setup-tailwind <appName>
- pnpx nx g @spartan-ng/cli:ui

### Modify Styles.scss and tailwind.config.js

add to styles.scss:

```
@import '@angular/cdk/overlay-prebuilt.css';
@import '@spartan-ng/brain/hlm-tailwind-preset.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

add to tailwind.config.js:

```
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
    colors: {
        selection: 'hsl(var(--selection))',
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
    },
    },
},
safelist: ['bg-background', 'bg-selection', 'text-foreground'],
};
```

## Usage:

### Basic Theme Component

Optionally add a base component for demonstration

```
import { Component, inject } from '@angular/core';
import { BasicThemeComponent, ThemesService } from 'lugraff-spartan-themes';

@Component({
  imports: [ BasicThemeComponent ],
  selector: 'app-root',
  template: `
    <div class="w-screen h-screen flex justify-center items-center">
      <lib-basic-theme></lib-basic-theme>
    </div>
  `,
})
export class AppComponent {
  readonly #themes = inject(ThemesService);

  constructor() {
    this.#themes.init();
  }
}

```

### Providing default Values

Optionally add default values in app.config.ts

```
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { INJECTION_TOKEN_INIT_MODE, INJECTION_TOKEN_INIT_THEME, ThemesService } from 'lugraff-spartan-themes';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()),
    [
      ThemesService,
      [
        { provide: INJECTION_TOKEN_INIT_MODE, useValue: 'light' },
        {
          provide: INJECTION_TOKEN_INIT_THEME,
          useValue: {
            light: {
              background: { hue: 0, saturation: 0, lightness: 90 },
              foreground: { hue: 20, saturation: 14, lightness: 4 },
              card: { hue: 0, saturation: 0, lightness: 100 },
              cardForeground: { hue: 20, saturation: 14, lightness: 4 },
              popover: { hue: 0, saturation: 0, lightness: 100 },
              popoverForeground: { hue: 20, saturation: 14, lightness: 4 },
              primary: { hue: 24, saturation: 95, lightness: 53 },
              primaryForeground: { hue: 60, saturation: 9, lightness: 97 },
              secondary: { hue: 60, saturation: 4, lightness: 95 },
              secondaryForeground: { hue: 24, saturation: 9, lightness: 10 },
              muted: { hue: 60, saturation: 4, lightness: 95 },
              mutedForeground: { hue: 25, saturation: 5, lightness: 44 },
              accent: { hue: 60, saturation: 4, lightness: 95 },
              accentForeground: { hue: 24, saturation: 9, lightness: 10 },
              destructive: { hue: 0, saturation: 84, lightness: 60 },
              destructiveForeground: { hue: 60, saturation: 9, lightness: 97 },
              border: { hue: 20, saturation: 5, lightness: 90 },
              input: { hue: 20, saturation: 5, lightness: 90 },
              ring: { hue: 24, saturation: 95, lightness: 53 },
              warning: { hue: 51, saturation: 100, lightness: 50 },
              warningForeground: { hue: 0, saturation: 0, lightness: 0 },
              selection: { hue: 217, saturation: 60, lightness: 70 },
            },
            dark: {
              background: { hue: 20, saturation: 10, lightness: 20 },
              foreground: { hue: 60, saturation: 9, lightness: 97 },
              card: { hue: 20, saturation: 40, lightness: 20 },
              cardForeground: { hue: 20, saturation: 36, lightness: 87 },
              popover: { hue: 20, saturation: 14, lightness: 4 },
              popoverForeground: { hue: 60, saturation: 9, lightness: 97 },
              primary: { hue: 20, saturation: 90, lightness: 48 },
              primaryForeground: { hue: 60, saturation: 9, lightness: 97 },
              secondary: { hue: 12, saturation: 6, lightness: 15 },
              secondaryForeground: { hue: 60, saturation: 9, lightness: 97 },
              muted: { hue: 12, saturation: 6, lightness: 18 },
              mutedForeground: { hue: 20, saturation: 36, lightness: 44 },
              accent: { hue: 20, saturation: 48, lightness: 25 },
              accentForeground: { hue: 20, saturation: 48, lightness: 89 },
              destructive: { hue: 0, saturation: 72, lightness: 50 },
              destructiveForeground: { hue: 60, saturation: 9, lightness: 97 },
              border: { hue: 12, saturation: 6, lightness: 14 },
              input: { hue: 20, saturation: 32, lightness: 25 },
              ring: { hue: 20, saturation: 90, lightness: 48 },
              warning: { hue: 49, saturation: 100, lightness: 42.5 },
              warningForeground: { hue: 0, saturation: 0, lightness: 0 },
              selection: { hue: 217, saturation: 35, lightness: 54 },
            },
            radius: 1.5,
          },
        },
      ],
    ],
  ],
};

```

### Theme-List:

create a themes folder in public folder.
add theme_list.json

```
["my_theme.json","my_theme_2.json"]
```

create the json themes into themes folder:

```
{
  "name": "Orange",
  "light": {
    "background": { "hue": 0, "saturation": 0, "lightness": 90 },
    "foreground": { "hue": 20, "saturation": 14, "lightness": 4 },
    "card": { "hue": 0, "saturation": 0, "lightness": 100 },
    "cardForeground": { "hue": 20, "saturation": 14, "lightness": 4 },
    "popover": { "hue": 0, "saturation": 0, "lightness": 100 },
    "popoverForeground": { "hue": 20, "saturation": 14, "lightness": 4 },
    "primary": { "hue": 24, "saturation": 95, "lightness": 53 },
    "primaryForeground": { "hue": 60, "saturation": 9, "lightness": 97 },
    "secondary": { "hue": 60, "saturation": 4, "lightness": 95 },
    "secondaryForeground": { "hue": 24, "saturation": 9, "lightness": 10 },
    "muted": { "hue": 60, "saturation": 4, "lightness": 95 },
    "mutedForeground": { "hue": 25, "saturation": 5, "lightness": 44 },
    "accent": { "hue": 60, "saturation": 4, "lightness": 95 },
    "accentForeground": { "hue": 24, "saturation": 9, "lightness": 10 },
    "destructive": { "hue": 0, "saturation": 84, "lightness": 60 },
    "destructiveForeground": { "hue": 60, "saturation": 9, "lightness": 97 },
    "border": { "hue": 20, "saturation": 5, "lightness": 90 },
    "input": { "hue": 20, "saturation": 5, "lightness": 90 },
    "ring": { "hue": 24, "saturation": 95, "lightness": 53 },
    "warning": { "hue": 51, "saturation": 100, "lightness": 50 },
    "warningForeground": { "hue": 0, "saturation": 0, "lightness": 0 },
    "selection": { "hue": 217, "saturation": 60, "lightness": 70 }
  },
  "dark": {
    "background": { "hue": 20, "saturation": 10, "lightness": 20 },
    "foreground": { "hue": 60, "saturation": 9, "lightness": 97 },
    "card": { "hue": 20, "saturation": 40, "lightness": 20 },
    "cardForeground": { "hue": 20, "saturation": 36, "lightness": 87 },
    "popover": { "hue": 20, "saturation": 14, "lightness": 4 },
    "popoverForeground": { "hue": 60, "saturation": 9, "lightness": 97 },
    "primary": { "hue": 20, "saturation": 90, "lightness": 48 },
    "primaryForeground": { "hue": 60, "saturation": 9, "lightness": 97 },
    "secondary": { "hue": 12, "saturation": 6, "lightness": 15 },
    "secondaryForeground": { "hue": 60, "saturation": 9, "lightness": 97 },
    "muted": { "hue": 12, "saturation": 6, "lightness": 18 },
    "mutedForeground": { "hue": 20, "saturation": 36, "lightness": 44 },
    "accent": { "hue": 20, "saturation": 48, "lightness": 25 },
    "accentForeground": { "hue": 20, "saturation": 48, "lightness": 89 },
    "destructive": { "hue": 0, "saturation": 72, "lightness": 50 },
    "destructiveForeground": { "hue": 60, "saturation": 9, "lightness": 97 },
    "border": { "hue": 12, "saturation": 6, "lightness": 14 },
    "input": { "hue": 20, "saturation": 32, "lightness": 25 },
    "ring": { "hue": 20, "saturation": 90, "lightness": 48 },
    "warning": { "hue": 49, "saturation": 100, "lightness": 42.5 },
    "warningForeground": { "hue": 0, "saturation": 0, "lightness": 0 },
    "selection": { "hue": 217, "saturation": 35, "lightness": 54 }
  },
  "radius": 1.5
}

```

## Troubleshooting

### Where to put the Theme?

The default theme is no longer defined directly in the Styles.scss file, but can be defined in the app.config.ts via an INJECTION_TOKEN.
