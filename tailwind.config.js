import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#69707D',
        'block': '#1D2026',
        'cost-grey': '#B6BCC8',
        'orange': '#FF7E1B',
      }
    },
  },
  plugins: [daisyui],
}

