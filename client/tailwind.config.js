/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        premium: ['"Lora"', 'serif'], // Add this under fontFamily
      },
    },
  },
  plugins: [],
}
