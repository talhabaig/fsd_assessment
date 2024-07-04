import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1500px",
    },
    extend: {
      colors: {
        oceanBlue: "#0E3242",
        goldenSun: "#DFA42E",
        midnightBlue: "#0E3242",
        silverGray: "#8A9FA9",
        skyBlue: "#6AB5D1",
        softBeige: "#F3EBE5",
        slateBlue: "#467587",
        goldenBrown: "#976935",
        desertsand: "#977D61",
        charcoalblack: "#292522",
        gray: "#777",
        khaki: "#C3A870",
        darygray: "#4F5557",
        royalblue: "#055EA0",
        bluegray: "#A1B1B8",
        softwhite: "#EFEAE3",
        reddishbrown: "#955C31",
        brownishgray: "#A89881",
        darkbrown: "#452C1A",
        darkslateblue: "#1F5267",
        shadowblue: "#80ABBD",
        spacecadet: "#091E31",
        eerieblack: "#18181B",
        saddlebrown: "#5A361A",
        taupe: "#483C33",
        gunmetal: "#353A45",
        alabaster: "#E9DED6",
        cadet: "#506873",
        lightgray: "#D4D4D8",
        almostblack: "#1E1E1E",
        taupegray: "#8D8D8D",
        outerspace: "#424242",
        white:'#fff',
        azuremist:'#EDF5F5',
        tealblue:'#2D576D',
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      placeholderColor: {
        custom: "#8D9FA9",
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: ["focus", "hover"],
      placeholderOpacity: ["focus", "hover"],
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities(
        {
          ".placeholder-custom::placeholder": {
            color: "#8D9FA9",
            fontFamily: "Lato, sans-serif",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            textTransform: "lowercase",
          },
        },
        {
          respectPrefix: false,
          respectImportant: false,
        }
      );
    },
  ],
};

export default config;
