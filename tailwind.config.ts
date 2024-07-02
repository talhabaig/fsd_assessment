import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '425px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1500px',
    },
    extend: {
      colors: {
        oceanBlue: '#0E3242',
        goldenSun: '#DFA42E',
        midnightBlue: '#0E3242',
        silverGray: '#8A9FA9',
        skyBlue: '#6AB5D1',
        softBeige: '#F3EBE5',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      placeholderColor: {
        custom: '#8D9FA9',
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: ['focus', 'hover'],
      placeholderOpacity: ['focus', 'hover'],
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.placeholder-custom::placeholder': {
          color: '#8D9FA9',
          fontFamily: 'Lato, sans-serif',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          textTransform: 'lowercase',
        },
      }, {
        respectPrefix: false,
        respectImportant: false,
      });
    },
  ],
};

export default config;
