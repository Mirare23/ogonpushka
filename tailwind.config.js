/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "sans": ["'open sans'", 'sans-serif']
      },
      colors: {
        "emerald": "#6DFFC0",
        "gray": "#1F1F1F",
        "gray2": "#959595"

      }
    }
  },
  plugins: [],
}

