/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'Pastel-blue': 'hsl(228, 100%, 84%)',
        'Light-blue': 'hsl(206, 94%, 87%)',
        'Cool-gray': 'hsl(231, 11%, 63%)',
        'Light-gray': 'hsl(229, 24%, 87%)',
        'Denim': '#164A8A',
        'Purplish-blue': 'hsl(243, 100%, 62%)',
        'Background':'#EAF5ED',
        'Alabaster': 'hsl(231, 100%, 99%)',
        'Strawberry-red': 'hsl(354, 84%, 57%)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var( - tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var( - tw-gradient-stops))',
      },
      fontFamily: {
        'Ubuntu': ["Ubuntu", "sans-serif"]
      },
      spacing: {
        '128': '28rem',
      }
     
    },
  },
  plugins: [],
}

