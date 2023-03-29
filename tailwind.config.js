/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      textColor: {
        primary: "#ff0a65",
        menu: "#281236"
      },
      backgroundColor: {
        menu: "#ff0ac2", 
      }
    },
  },
  plugins: [],
}

