/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "normalFont": "Roboto"
      },
      colors: {
        "purple-bg": "#290742",
        "dark-bg": "#170027",
        "button-bg": "#9e6dc2",
        "white": "#fff",
        "light-purple": "#fbf6ff",
        "green": "#4fff4b",
      }
    },
  },
  plugins: [],
}