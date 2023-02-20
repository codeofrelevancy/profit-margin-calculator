/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand": "var(--brand)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
