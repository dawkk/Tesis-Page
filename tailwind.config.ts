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
      colors: {
        royalBlue: '#2b689e',
        slateBlue:'#7195b6',
        skyBlue: '#99bdf9',
        amberYellow:'#fcd34d',
        darkPurple:'#4338ca',
        articBlue: '#f1f7ff'

      },
    },
  },
  plugins: [],
};
export default config;
