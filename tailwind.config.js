/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        500: '500px',
      },
      maxHeight: {
        500: '500px',
      },
      height: {
        270: '270px',
        320: '320px',
        380: '380px',
        400: '400px',
        450: '450px',
        520: '520px',
        vh15: '15vh',
        vh25: '25vh',
        vh50: '50vh',
        vh65: '65vh',
        vh75: '75vh',
        vh85: '85vh',
      },
      width: {
        270: '270px',
        320: '320px',
        380: '380px',
        400: '400px',
        450: '450px',
        520: '520px',
      },

      textColor: {
        primary: '#72efdd',
        eachProjectH3: '#1282a2',
        hoverContactUs: '#274c77',
        hoverProjectTitle: '#8ecae6',
        footer: '#8e8e8e',
      },
      fontSize: {
        '1.5xl': '1.35rem',
        '7.5xl': '6rem',
        '10xl': '10rem',
        '11xl': '11rem',
        '14xl': '14rem',
      },
      backgroundColor: {
        // primary: '#5e6572',
        primary: '#02040f',
        secondary: '#22333b',
        tertiary: '#EFD3D7',
        footer: '#0f0f1c',
      },
      borderColor: {
        button: '#5899e2',
        customGray: '#1b1b1e',
      },
      borderWidth: {
        1: '1px',
      },
      //media queries
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1750px',
      },
    },
  },
  plugins: [],
};
