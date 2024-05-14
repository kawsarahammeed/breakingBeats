module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,js}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {    
      width: {
        'lwDesk': '203px',
        'lwTab': '180px',
        'lwMob': '140px',
      },
      colors: {
        primary: "#F16621",        
        black: "#000000",
        secondary: "#00142C",
        white: "#FFFFFF",
      },
      fontFamily: {
        mono: ["mono", 'sans-serif'],
        outfit: ["outfit", 'sans-serif'],       
      },
      fontSize: {
        "1.0xl": "10px",
        "1.1xl": "11px",
        "1.2xl": "12px",
        "1.3xl": "13px",
        "1.4xl": "14px",
        "1.5xl": "15px",
        "1.6xl": "16px",
        "1.7xl": "17px",
        "1.8xl": "18px",
        "1.9xl": "19px",
        "2.0xl": "20px",
        "2.1xl": "21px",
        "2.2xl": "22px",
        "2.4xl": "24px",
        "2.6xl": "26px",
        "2.8xl": "28px",
        "3.0xl": "30px",
        "3.2xl": "32px",
        "3.3xl": "33px",
        "3.4xl": "34px",
        "3.5xl": "35px",
        "3.6xl": "36px",
        "3.6xl": "36px",
        "3.8xl": "38px",
        "4.0xl": "40px",
        "4.2xl": "42px",
        "4.4xl": "44px",
        "4.6xl": "46px",
        "4.8xl": "48px",
        "5.0xl": "50px",
        "5.4xl": "54px",
        "5.8xl": "58px",
        "5.9xl": "59px",
        "6.0xl": "60px",
        "6.4xl": "64px",
        "6.8xl": "68px",
        "7.0xl": "70px",
        "7.4xl": "74px",
        "7.8xl": "78px",
        "8.0xl": "80px",
        "8.4xl": "84px",
        "8.8xl": "88px",
        "9.0xl": "90px",
        "9.4xl": "94px",
        "9.8xl": "98px",
        "10.0xl": "100px",
        "10.1xl": "110px",
        "10.2xl": "120px",
        "10.3xl": "130px",
        "10.4xl": "140px",
        "10.5xl": "150px",
      },
    },
    // container customization
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "20px",
        lg: "40px",
        xl: "40px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen sm': {
            maxWidth: '90%',
          },
          '@screen md': {
            maxWidth: '90%',
          },
          '@screen lg': {
            maxWidth: '90%',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        }
      })
    },
  ],
}