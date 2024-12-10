/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cards': 'repeat(auto-fit, minmax(8.5rem, 1fr))',
      }
    },
  },
  plugins: [],
}

