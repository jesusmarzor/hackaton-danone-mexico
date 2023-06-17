/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "main50": "#e8f3ff",
        "main100": "#d5e8ff",
        "main200": "#b3d3ff",
        "main300": "#85b4ff",
        "main400": "#5686ff",
        "main500": "#2f59ff",
        "main600": "#0c26ff",
        "main700": "#0017eb",
        "main800": "#061ccd",
        "main900": "#10249f",
        "main950": "#0a135c",
        "lightBlue": "#e8f3ff",
        "pictonBlue": "#4CABE4",
        "blueJeans": "#5BB5E9",
        "babyBlue": "#89C8F2",
        "vividBlue": "#11ACED",
        "violetBlue": "#324BAA"
      }
    },
    fontSize: {
      "5xl": '4.313rem',
      "4xl": '3.438rem',
      "3xl": '2.75rem',
      "2xl": '2.25rem',
      xl: '1.75rem',
      md: '1.125rem',
      sm: '0.875rem',
      xs: '0.75rem'
    }
  },
  plugins: [],
}
