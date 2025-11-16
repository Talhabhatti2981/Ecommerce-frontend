/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35', // Modern vibrant orange-red
          50: '#FFF5F2',
          100: '#FFE8E0',
          200: '#FFD1C2',
          300: '#FFB09A',
          400: '#FF8A6D',
          500: '#FF6B35',
          600: '#E64D1F',
          700: '#CC3A15',
          800: '#B32D0F',
          900: '#99250C',
        },
        secondary: {
          DEFAULT: '#004E89', // Modern deep blue
          50: '#E6F2F8',
          100: '#CCE5F1',
          200: '#99CBE3',
          300: '#66B1D5',
          400: '#3397C7',
          500: '#004E89',
          600: '#003E6D',
          700: '#002E51',
          800: '#001F35',
          900: '#000F19',
        },
        accent: {
          DEFAULT: '#1A659E', // Modern blue accent
        },
        success: {
          DEFAULT: '#06A77D', // Modern green
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'modern': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modern-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
