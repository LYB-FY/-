module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD1DC',
        secondary: '#B2F2BB',
        base: '#FDF6F0',
        surface: '#FFFFFF',
        textPrimary: '#4A4A4A',
        textSecondary: '#8C8C8C',
        textHint: '#C0C0C0',
        border: '#E8E8E8'
      },
      borderRadius: {
        'xl': '12px'
      }
    },
  },
  plugins: [],
}
