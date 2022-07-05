module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        pageW: '1600px'
      },
      width: {
        a4: '210mm'
      },
      height:{
        a4: '297mm'
      },
      fontSize:{
        xxs: '0.4rem',
        x2s: '0.4rem',
        xls: '0.6rem'
      }
    },
  },
  plugins: [],
}