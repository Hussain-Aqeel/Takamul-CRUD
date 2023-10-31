import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Poppins', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'primary': {
          '50': '#fffeea',
          '100': '#fff8c5',
          '200': '#fff285',
          '300': '#ffe546',
          '400': '#ffd41b',
          '500': '#ffb300',
          '600': '#e28900',
          '700': '#bb6002',
          '800': '#984a08',
          '900': '#7c3c0b',
          '950': '#481e00',
        }
      }
    },
  },
  plugins: [],
}

