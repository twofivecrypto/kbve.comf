/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin');

module.exports = {
  //darkMode: ['class', '[data-mode="dark"]'],
  content: {
          files: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,mdx,md}'],
          // transform: {
          //   mdx: (content) => {
          //     return remark().process(content)
          //   }}
      },
  //content: ["./src/components/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        xl: '0 32px 64px var(--tw-shadow-color)',
      },
    },
  },
  corePlugins: {
    fontSize: false,
    aspectRatio: false,
  },
  variants: {
    extend: {
      // ...
     backgroundOpacity: ['active'],
    }
  },
  plugins: [
    require("tailwindcss-fluid-type"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};