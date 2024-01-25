/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        appGreen: "#54BD95",
        appLightGreen: "#85DAB9",
        appGray: "#A6A6A6",
        appBlack: "#191A15",
        appLightGray: "#F9F8FE",
        appNavyBlue: "#161C28",
        appNavyLight: "#222938",
      },
    },
  },
  plugins: [],
};
