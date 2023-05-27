/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      heading: 'Overpass,sans-serif',
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
      backgroundImage: {
        'header-mobile': 'url(/src/images/bg-pattern-intro-mobile.svg)',
      },
      colors: {
        'red-50': 'hsl(var(--red-50))',
        'red-100': 'hsl(var(--red-100))',
        'red-200': 'hsl(var(--red-200))',
        'blue-50': 'hsla(var(--blue-100), 0.3)',
        'blue-100': 'hsl(var(--blue-100))',
        'blue-400': 'hsl(var(--blue-400))',
        'blue-600': 'hsl(var(--blue-600))',
        'blue-800': 'hsl(var(--blue-800))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
