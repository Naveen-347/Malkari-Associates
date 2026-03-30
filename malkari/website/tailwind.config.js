/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fcf2',
          100: '#dcfce3',
          200: '#bdf7ca',
          300: '#8debab',
          400: '#58d380',
          500: '#46ca50',
          600: '#3BB143', // Green (Main Brand)
          700: '#2e9334',
          800: '#24752a',
          900: '#16451a', // Dark Green (Dark Deep)
          950: '#0b230d',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399', // Emerald Accent
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
