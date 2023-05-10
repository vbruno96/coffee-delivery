/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '36px',
        '5xl': '44px'
      },
      maxWidth: {
        '8xl': '90rem',
      },
      spacing: {
        '22': '5.875rem',
      },
      blur: {
        '4xl': '80px',
      },
      backgroundImage: {
        'coffee': "url('/coffee.png')",
        'delivery': "url('delivery.png')",
      },
    },
    colors: {
      white: '#FFF',
      gray: {
        50: '#FAFAFA',
        100: '#F3F2F2',
        200: '#EDEDED',
        300: '#E6E5E5',
        400: '#D7D5D5',
      },
      brown: {
        50: '#8D8686',
        100: '#574F4D',
        200: '#403937',
        600: '#272221',
      },
      purple: {
        light: '#EBE5F9',
        DEFAULT: '#8047F8',
        dark: '#4B2995',
      },
      yellow: {
        light: '#F1E9C9',
        DEFAULT: '#DBAC2C',
        dark: '#C47F17',
        100: '#EBC136'
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif', 'system-ui'],
      title: ['"Baloo 2"', '"Open Sans"']
    },
    fontSize: {
      xs: ['0.625rem', '130%'],
      sm: ['0.75rem', '130%'],
      '2sm': ['0.875rem', '130%'],
      base: ['1rem', '130%'],
      md: ['1.125rem', '130%'],
      lg: ['1.25rem', '130%'],
      xl: ['1.5rem', '130%'],
      '2xl': ['2rem', '130%'],
      '3xl': ['3rem', '130%'],
      sb: ['0.75rem', '160%'],
      lb: ['0.875rem', '160%'],
    }
  },
  plugins: [],
}

