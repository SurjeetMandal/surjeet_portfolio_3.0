/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '1200px',
      xl: '1280px',
      '2xl': '1660px'
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem"
        }
      },
      colors:{
        'red-orange':{
          500:"color-mix(in srgb, theme('colors.red.500') 50%, theme('colors.orange.500') 50%)"
        }
      } 
    },
  },
  plugins: [],
}
