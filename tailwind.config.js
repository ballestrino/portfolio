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
        vh15: '15vh',
        vh25: '25vh',
        vh50: '50vh',
        vh65: '65vh',
        vh75: '75vh',
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
    },
  },
  plugins: [],
};
