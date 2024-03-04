/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': {
        DEFAULT: '#FFFFFF',
        'F8':'#F8F8F8',
        'FA':'#F8F9FA'
      },
      'blue': {
        '5F': '#301E5F',
        'CE':'#0067CE',
      },
      'red': {
        '24':'#C72424',
        '21':'#C44021'
      },
      'black': {
        DEFAULT: '#000000',
        '29': '#212529'
      },
      'gray': {
        '79':'#797979',
        'DA':'#CED4DA',
        '91':'#818A91',
        'BF':'#BFBFBF',
        'B9':'#B9B9B9',
        '70':'#707070',
        '20':'#00000020'
      },
      'purple': {
        'F8':'#6A33F8',
        '3FF':'#6A33FF',
        'BFF':'#DACBFF',
        'EA':'#9D7FEA',
        'A7':'#5434A7'
      }
    },
    extend: {
      fontFamily: {
        "noto-sans" : '"Noto Sans TC", sans-serif',
      },
      height: {
        35: "140px"
      },
      borderWidth: {
        20 : "20px",
        32 : "32px",
        40 : "40px"
      }
    },
    container:{
      screens: {
        'md': '768px',
        'lg': '1140px'
      },
      center: true,
      padding: '15px'
    }
  },
  plugins: [],
}

