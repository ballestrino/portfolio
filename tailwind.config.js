/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        vh50: '50vh',
        vh75: '75vh',
      },
      textColor: {
        primary: '#168aad',
      },
      borderColor: {
        primary: '#168aad',
      },
    },
  },
  plugins: [],
};
