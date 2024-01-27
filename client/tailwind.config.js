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
      spacing: {
        '16px': '16px',
        '300px': '353px',
        '41px': '42px',
        '600px': '593px'
      }

    },
    plugins: []
  }
}
