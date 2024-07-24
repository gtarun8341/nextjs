/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'scrollbar-track': '#141414',
        'scrollbar-thumb': '#0F0F0F',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}