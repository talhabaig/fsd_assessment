import type { Config } from "tailwindcss";

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
        deepSeaBlue: '#194C63',
        midnightBlue: '#0E3242',
        silverGray: '#8A9FA9',
        skyBlue:'#6AB5D1',
        softBeige: '#F3EBE5',
        
      },
    },
  },
  plugins: [],
};
export default config;
