import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0C10",
        charcoal: "#1F2833",
        gold: "#C5A059",
        "gold-bright": "#D4AF37",
        ivory: "#F4F4F4",
        mute: "#C5C6C7",
        navy: "#0A1628",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Times New Roman", "serif"],
        mincho: ['"Shippori Mincho"', '"Noto Serif JP"', "serif"],
        sans: ['"Shippori Mincho"', '"Noto Serif JP"', "serif"],
        latin: ["Montserrat", "Helvetica Neue", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.28em",
      },
      maxWidth: {
        page: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
