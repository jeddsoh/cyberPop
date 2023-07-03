/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        marker: ['Rock Salt', 'cursive'],
      }
    },
  },
  plugins: [],
};
