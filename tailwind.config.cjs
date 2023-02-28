/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif']
      },
      colors: {
        'primary-red': 'hsl(7, 99%, 70%)',
        'primary-yellow': 'hsl(51, 100%, 49%)',
        'primary-desaturated-cyan-design-text': 'hsl(167, 40%, 24%)',
        'primary-blue-photographic-text': 'hsl(198, 62%, 26%)',
        'primary-moderate-cyan-footer': 'hsl(167, 44%, 70%)',
        'neutral-desaturated-blue': 'hsl(212, 27%, 19%)',
        'neutral-very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'neutral-dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'neutral-grayish-blue': 'hsl(210, 4%, 67%)',
      }
    },
  },
  plugins: [],
}
