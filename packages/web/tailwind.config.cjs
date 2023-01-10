const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        },
      },
      colors: {
        offWhite: "#FFFDF8",
        brand: "#34d399",
        black: "#000",
        almostBlack: "#1E1E1E",
        darkGrey: "#27272A",
      },
    },
  },
  plugins: [],
};
