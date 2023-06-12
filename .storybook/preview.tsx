/** @type { import('@storybook/react').Preview } */

import '../src/global.css';
import React, { useEffect } from 'react';
import RThemeProvider from '../src/components/theme/RThemeProvider';
import { withThemeByDataAttribute } from '@storybook/addon-styling';

export const preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story, context) => {
    useEffect(() => {
      const body = window.document.body;
      if (context.globals.theme === 'dark') {
          document.documentElement.classList.add('dark');
          body.style.backgroundColor = '#333333';
        } else {
          document.documentElement.classList.remove('dark');
          body.style.backgroundColor = '#f8f8f8';
        }
      }, [context.globals.theme]);

      return (
          <RThemeProvider>
            <Story />
          </RThemeProvider>
      );
  },
  withThemeByDataAttribute({
    defaultTheme: 'light',
    attributeName: 'data-theme',
    themes: {
      light: 'light',
      dark: 'dark'
    }
  })
]
