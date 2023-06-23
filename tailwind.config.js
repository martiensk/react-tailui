/** @type {import('tailwindcss').Config} */
/* eslint-disable quote-props  */
export default {
  darkMode: 'class',
  purge: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif']
      },
      colors: {
        // Light theme colors
        primary: 'var(--primary)',
        'on-primary': 'var(--on-primary)',
        'primary-container': 'var(--primary-container)',
        'on-primary-container': 'var(--on-primary-container)',
        secondary: 'var(--secondary)',
        'on-secondary': 'var(--on-secondary)',
        'secondary-container': 'var(--secondary-container)',
        'on-secondary-container': 'var(--on-secondary-container)',
        tertiary: 'var(--tertiary)',
        'on-tertiary': 'var(--on-tertiary)',
        'tertiary-container': 'var(--tertiary-container)',
        'on-tertiary-container': 'var(--on-tertiary-container)',
        error: 'var(--error)',
        'on-error': 'var(--on-error)',
        'error-container': 'var(--error-container)',
        'on-error-container': 'var(--on-error-container)',
        background: 'var(--background)',
        'on-background': 'var(--on-background)',
        outline: 'var(--outline)',
        surface: 'var(--surface)',
        'on-surface': 'var(--on-surface)',
        'surface-variant': 'var(--surface-variant)',
        'on-surface-variant': 'var(--on-surface-variant)',

        // Dark theme colors
        'dark-primary': 'var(--dark-primary)',
        'dark-on-primary': 'var(--dark-on-primary)',
        'dark-primary-container': 'var(--dark-primary-container)',
        'dark-on-primary-container': 'var(--dark-on-primary-container)',
        'dark-secondary': 'var(--dark-secondary)',
        'dark-on-secondary': 'var(--dark-on-secondary)',
        'dark-secondary-container': 'var(--dark-secondary-container)',
        'dark-on-secondary-container': 'var(--dark-on-secondary-container)',
        'dark-tertiary': 'var(--dark-tertiary)',
        'dark-on-tertiary': 'var(--dark-on-tertiary)',
        'dark-tertiary-container': 'var(--dark-tertiary-container)',
        'dark-on-tertiary-container': 'var(--dark-on-tertiary-container)',
        'dark-error': 'var(--dark-error)',
        'dark-on-error': 'var(--dark-on-error)',
        'dark-error-container': 'var(--dark-error-container)',
        'dark-on-error-container': 'var(--dark-on-error-container)',
        'dark-background': 'var(--dark-background)',
        'dark-on-background': 'var(--dark-on-background)',
        'dark-outline': 'var(--dark-outline)',
        'dark-surface': 'var(--dark-surface)',
        'dark-on-surface': 'var(--dark-on-surface)',
        'dark-surface-variant': 'var(--dark-surface-variant)',
        'dark-on-surface-variant': 'var(--dark-on-surface-variant)',
      },
      opacity: {
        '5': '.05',
        '10': '.1',
        '15': '.15',
      },
      brightness: {
        115: '1.15',
      },
      animation: {
        ripple: 'ripple 0.4s linear',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(2.5)',
            opacity: '0',
          },
        }
      }
    },
  },
  plugins: [],
};