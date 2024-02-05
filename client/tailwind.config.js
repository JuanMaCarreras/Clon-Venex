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
        venex: '#91c612',
        white: '#eeeeee',
        font: '#343636'
      },
      spacing: {
        '16px': '16px',
        '300px': '353px',
        '41px': '42px',
        '15px': '15px',
        '600px': '593px',
        '30rem': '33rem',
        '36rem': '36rem'

      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        detailName: '1.15rem' // Aquí defines tu propio tamaño de fuente personalizado
      }

    },
    plugins: []
  }
}
