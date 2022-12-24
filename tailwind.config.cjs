/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2b1a23',
        background: '#492036',
      },
      height: {
        nav: '50px',
      },
      gridTemplateColumns: {
        nav: '100px 1fr 100px',
        ['sm-nav']: 'repeat(2, 1fr)',
      },
    },
  },
  plugins: [],
}
