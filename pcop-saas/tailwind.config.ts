import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aqua: '#6FAFA2',
        sage: '#8FB7AA',
        cream: '#F7F4EE',
        ivory: '#EFEAE2',
        ink: '#2F3437',
        bronze: '#B89B72'
      },
      borderRadius: { '3xl': '1.75rem', '4xl': '2.25rem' }
    }
  },
  plugins: []
};
export default config;
