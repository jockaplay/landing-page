/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blinking': 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0%' },
          '50%': { opacity: '100%' },
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}