/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#376ac3',
        'primary-2': '#61625c'
      },
      fontFamily: {
        'Lexend': [  '"Lexend"' , 'sans-serif'],
      }
    },
    
  },
  plugins: [],
}