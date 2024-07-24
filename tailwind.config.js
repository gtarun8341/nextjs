/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'scrollbar-track': '#0F0F0F',
        'scrollbar-thumb': '#141414',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}