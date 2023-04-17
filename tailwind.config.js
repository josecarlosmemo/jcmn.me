/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "375px" },
      tall: { raw: "(min-height: 800px)" },
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-dracula")("dracula"),
    require("tailwindcss-debug-screens"),
  ],
};
