/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#ffffff',
          200: '#e6f4fb',
          300: '#d8edf6',
          400: '#c9e5f1',
          500: '#acd5e6',
          600: '#8fc6dc',
          700: '#71b6d1',
          800: '#55889d'
        },
      },
      fontFamily:{
        'kumbh-sans': 'Kumbh Sans'
      }
    },
  },
  plugins: [],
}

