const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
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
  plugins: [flowbite.plugin()],
};
