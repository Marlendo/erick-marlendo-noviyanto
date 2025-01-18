/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['"Titillium Web"', 'sans-serif'],
        sans: ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        'progress-stripes': `linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, 
          transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)`,
      },
      backgroundSize: {
        'progress-stripes': '40px 40px',
      },
      keyframes: {
        'progress-stripes': {
          '0%': { backgroundPosition: '40px 0' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
      animation: {
        'progress-stripes': 'progress-stripes 2s linear infinite',
      },
    },
  },
  plugins: [],
}