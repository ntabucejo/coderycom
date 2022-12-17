/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./core/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      book: "480px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      opacity: {
        fade: 0.6,
      },
      fontSize: {
        ms: "10px",
      },
      colors: {
        primary: {
          light: "#fafafa",
          dark: "#171717",
        },
      },
    },
  },
  plugins: [],
};
