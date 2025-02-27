/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#341D16',
          red: '#DF1E27',
          gold: '#F7A51C',
        },
      },
    },
  },
  plugins: [],
};