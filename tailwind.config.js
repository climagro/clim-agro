/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#14532d",   // primary deep green
        leaf: "#4d7c0f",     // olive/leaf accent
        earth: "#9a3412",    // terracotta (energy / CTA)
        cream: "#faf7f0",    // page background
        sand: "#efe9dc",     // panels / cards
        ink: "#1c1917",      // body text
        sky: "#0e7490",      // climate-data teal accent
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
