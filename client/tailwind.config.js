/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primaryGray: '#37373f',
        secondaryGray: '#2d2d33',
        venex: '#91c612'

      },
      height: {
        300: '353px',
        90: '10rem'
      },
      padding: {
        mypd: '16px',
        'py-20': '20px',
        'py-30': '30px'
      }
    },
    plugins: []
  }
}
