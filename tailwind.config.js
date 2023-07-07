/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0C1323',
          1000: '#080D19',
        },
      },
    },
  },
  plugins: [],
};
