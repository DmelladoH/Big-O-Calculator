/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pink_primary: '#ea698b',
        pink_secondary: '#d55d92',
        pink_tertiary: '#c05299',
        purple_primary: '#973aa8',
        purple_secondary: '#6411ad',
        purple_tertiary: '#47126b',
        background: 'rgb(23,23,23)'
      }
    }
  },
  plugins: []
}
