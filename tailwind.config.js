/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        primay: "ProzaLibre",
        heading: "ProzaDisplay"
      },
      container: {
        center: true,
        padding: "1rem",
      }
    },
  },
  plugins: [],
}

