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
        primary: '#A0DFF3',
      },
      fontSize: {
        '14xl': '14rem',
      },
      borderColor: {
        primary: '#168aad',
      },
      //media queries
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
