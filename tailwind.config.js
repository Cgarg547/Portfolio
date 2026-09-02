/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },

      boxShadow: {
        card: "0 4px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },

  plugins: [],
} 