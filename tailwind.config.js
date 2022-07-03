module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'disp':['Quicksand']
    },

    extend: {
      colors:{
        'dPri':'#726dfe',
        'lPri':'#9a97fc',
        'dSec':'#808aac',
        'mSec':'#4a5162',
        'lSec':'#535a6d',
      }
    },
  },
  plugins: [],
}