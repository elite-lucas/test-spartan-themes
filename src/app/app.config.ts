import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  INJECTION_TOKEN_INIT_MODE,
  INJECTION_TOKEN_INIT_THEME,
  ThemesService,
} from 'lugraff-spartan-themes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()),
    [
      ThemesService,
      [
        { provide: INJECTION_TOKEN_INIT_MODE, useValue: 'system' },
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
