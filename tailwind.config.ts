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
       },
       textColor: {
        'primary': '#F78066',
        'rating': '#FAAF00'
       },
       maxWidth: {
        'min': '16rem'
       }
    },
    
    
  },
  plugins: [],
}
export default config
