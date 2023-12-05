/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
      },
      colors: {
        primary: '#4a4a4a',
        secondary: '#eb4a36',
      },
    },
    container: {
      center: 'true',
      padding: {
        default: '1rem',
        sm: '1.5rem'
      }
    },
    fontFamily: {
      leckerli: ['Leckerli One', 'cursive'],
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

