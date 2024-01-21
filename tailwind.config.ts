import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nutitoSans: ["var(--font-nunitoSans)"],
        prata: ["var(--font-prata)"],
      },
    },
    colors: {
      BgTop: '#f2828d',
      gold: '#ad9046',
      blurMenu: '#444444',
      black: '#000000',
      white: '#FFFFFF',
      red: '#FF0000',
      menuRes: '#4a4a4a',
      formName: '#525252',
      inputBorder: '#999'
    },
    borderWidth: {
      DEFAULT: '1px',
      '23': '0.5px'
    },
    screens: {
      'xxs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }, 
  plugins: [],
};
export default config;
