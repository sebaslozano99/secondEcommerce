/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": "Poppins" 
      },
      gridTemplateColumns: {
        "auto-fit-400": "repeat(auto-fit, minmax(400px, 1fr))",
      }
    },
  },
  plugins: [],
}

