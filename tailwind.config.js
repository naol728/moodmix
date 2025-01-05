const flowbite = require("flowbite-react/tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#121213", // Dark background color
        text: "#E0E0E0", // Light gray text color
        secondaryText: "#A0A0A0", // Secondary gray text color
        accent: "#00B0FF", // Accent color (bright blue)
        accentHover: "#0091CC", // Hover state for accent color
        border: "#333333", // Border color (dark gray)
        error: "#FF3B30", // Error message color (bright red)
        success: "#4CAF50", // Success message color (green)
      },
    },
  },
  plugins: [flowbite.plugin(), addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
