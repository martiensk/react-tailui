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
        primary: 'var(--primary)',
        'primary-variant': 'var(--primary-variant)',
        secondary: 'var(--secondary)',
        'secondary-variant': 'var(--secondary-variant)',
        tertiary: 'var(--tertiary)',
        'tertiary-variant': 'var(--tertiary-variant)',
        background: 'var(--background)',
        surface: 'var(--surface)',
        error: 'var(--error)',
        'on-primary': 'var(--on-primary)',
        'on-secondary': 'var(--on-secondary)',
        'on-tertiary': 'var(--on-tertiary)',
        'on-background': 'var(--on-background)',
        'on-surface': 'var(--on-surface)',
        'on-error': 'var(--on-error)',
        'dark-primary': 'var(--dark-primary)',
        'dark-primary-variant': 'var(--dark-primary-variant)',
        'dark-secondary': 'var(--dark-secondary)',
        'dark-secondary-variant': 'var(--dark-secondary-variant)',
        'dark-tertiary': 'var(--dark-tertiary)',
        'dark-tertiary-variant': 'var(--dark-tertiary-variant)',
        'dark-background': 'var(--dark-background)',
        'dark-surface': 'var(--dark-surface)',
        'dark-error': 'var(--dark-error)',
        'dark-on-primary': 'var(--dark-on-primary)',
        'dark-on-secondary': 'var(--dark-on-secondary)',
        'dark-on-tertiary': 'var(--dark-on-tertiary)',
        'dark-on-background': 'var(--dark-on-background)',
        'dark-on-surface': 'var(--dark-on-surface)',
        'dark-on-error': 'var(--dark-on-error)',
      },
      opacity: {
        '5': '.05'
      }
    },
  },
  plugins: [],
};