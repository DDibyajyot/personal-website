/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#EDE8E0",
          dark: "#232332",
          purple: "#7928CA",
          pink: "#FF0080",
        },
        blue: {
          lighter: "#71c5ee",
          light: "#3182ce",
          normal: "#025091",
        },
        card: {
          dark: "rgba(255, 230, 195, 0.07)",
          light: "rgba(180, 160, 135, 0.25)",
        },
        badge: {
          dark: "rgba(255, 230, 195, 0.15)",
          light: "rgba(160, 140, 115, 0.2)",
        },
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-back": "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      backgroundImage: {
        inherited: "inherit",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".flex-center": {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        },
      });
    },
  ],
};
