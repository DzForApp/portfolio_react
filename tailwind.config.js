module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      spacing: {
        108: '26rem',
      },
      width: {
       102: '102px',
        90: '359px',
       108: '433px',
       101: '623px',
       136: '544px',
       250: '1003px',
       283: '1134px',
       310: '1243px',
     },
     height: {
        43:'43px',
       113: '203px',
       130: '523px',
       115: '463px',
       116: '472px',
       145: '582px',
       146: '584px',
     },
      borderRadius:{
        '4xl':"30px",
        '5xl':"36px",
      },
      gap: {
        578: '578px',
      },
      colors: {
        primary: {
          light: "#11293B",
          dark: "#0D1F2B",
        },
        secondary: {
          light: "#E7E9EB",
          dark: "#203C51",
        },
        cgray: {
          light: "#677585",
          
        },
        blx: {
          50: '#e2eeff',
          100: '#c0d5e8',
          200: '#a0b7ce',
          300: '#7f9bb5',
          400: '#6785a2',
          500: '#4d718f',
          600: '#40627f',
          700: '#314f68',
          800: '#233d53',
          900: '#11293b',
        },
        blc: {
          50: '#d5f4f2',
          100: '#95e4dd',
          200: '#29d2c7',
          300: '#00bdae',
          400: '#00ac9b',
          500: '#009c87',
          600: '#008e79',
          700: '#007e68',
          800: '#006e59',
          900: '#00513b',
        },
        cgreen: "#2DCCA9",//cgreen = custom green
        cyellow: "#F9FFB7",
        cred: "#FD4E61",
      },

    }
  },
  plugins: [],
}


