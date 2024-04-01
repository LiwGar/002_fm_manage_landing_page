/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{html,js}',
    './src/**/*.{html,js,ts,jsx,tsx,mdx}',
    './**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "open-menu": "url('../images/icon-hamburger.svg')",
        "close-menu": "url('../images/icon-close.svg')",
      },
      fontFamily: {
        vietnam: ["Be Vietnam Pro", 'sans-serif']
      },
      colors: {
        primary: {
          brightRed: "hsl(12, 88%, 59%)",
          darkBlue: "hsl(228, 39%, 23%)",
        },
        neutral: {
          darkGrayishBlue: "hsl(227, 12%, 61%)",
          veryDarkBlue: "hsl(233, 12%, 13%)",
          veryPaleRed: "hsl(13, 100%, 96%)",
          varyLightGray: "hsl(0, 0%, 98%)",
        }
      },
    },
  },
  plugins: [],
}
