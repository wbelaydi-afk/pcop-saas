import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: { extend: { colors: { water: '#6FAFA2', sage: '#8FB7AA', cream: '#F7F4EE', ivory: '#EFEAE2', ink: '#2F3437', bronze: '#B89B72' } } },
  plugins: []
};
export default config;
