import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'border-color': '#E2E8F0',
          'check-box-color': '#808080',
          'product-title-color': '#818181',
        },
      },
    },
  },
  plugins: [],
};
export default config;
