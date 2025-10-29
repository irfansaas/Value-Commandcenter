/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nerdio Brand Colors
        nerdio: {
          primary: '#239CBB',      // Eastern Blue - Primary brand color
          secondary: '#77CADC',     // Viking - Light accent
          dark: '#0F2A38',          // Firefly - Dark navy
          light: '#E8F4F8',         // Custom light tint
        },
        // Semantic colors based on Nerdio palette
        brand: {
          50: '#E8F4F8',
          100: '#D1E9F1',
          200: '#A3D3E3',
          300: '#77CADC',   // Viking
          400: '#4DB1CD',
          500: '#239CBB',   // Eastern Blue (Primary)
          600: '#1C7D96',
          700: '#155E71',
          800: '#0F2A38',   // Firefly (Dark)
          900: '#0A1E2A',
        },
      },
      boxShadow: {
        'nerdio': '0 4px 6px -1px rgba(35, 156, 187, 0.1), 0 2px 4px -1px rgba(35, 156, 187, 0.06)',
        'nerdio-lg': '0 10px 15px -3px rgba(35, 156, 187, 0.1), 0 4px 6px -2px rgba(35, 156, 187, 0.05)',
      },
      borderRadius: {
        'nerdio': '8px',
      },
    },
  },
  plugins: [],
}
