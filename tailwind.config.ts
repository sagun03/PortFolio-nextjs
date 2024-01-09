import type { Config } from 'tailwindcss'

const config: Config = {
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
      flex: {
        'custom1': '.7',
        'custom2': '2',
      },
      backgroundColor: {
        'primary': '#0E1117',
        'secondary': '#F78066',
        'secondary-dark': '#CF583E'
       },
       textColor: {
        'primary': '#F78066',
        'rating': '#FAAF00'
       },
       maxWidth: {
        'min': '16rem',
        'project': '22rem'
       },
       height: {
        'section-scroll': '34rem',
        'about-me-scroll': '42rem'
       },
       borderColor: {
        'primary': '#F78066'
       },
       maxHeight: {
        'section-scroll': '90%',
        'skills-scroll': '85%',
        'about-me-scroll': '95%'
       }
    },
    
    
  },
  plugins: [],
}
export default config
