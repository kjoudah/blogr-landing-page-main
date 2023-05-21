/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      display: 'Overpass,sans-serif',
      body: 'Ubuntu,sans-serif',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {
      colors: {
        'red-100': 'hsl(var(--red-100))',
        'red-200': 'hsl(var(--red-200))',
        'blue-100': 'hsl(var(--blue-100))',
        'blue-400': 'hsl(var(--blue-400))',
        'blue-600': 'hsl(var(--blue-600))',
        'blue-800': 'hsl(var(--blue-800))',
      },
    },
  },
  plugins: [],
};
