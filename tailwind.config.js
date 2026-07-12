/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h2': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['1.875rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
