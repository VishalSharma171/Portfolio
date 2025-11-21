/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <- important: use class strategy
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        accent: "#06b6d4"
      }
    }
  },
  plugins: []
};
