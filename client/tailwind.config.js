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
        secondaryGray: '#2d2d33'

      }
    }
  },
  plugins: []
}
