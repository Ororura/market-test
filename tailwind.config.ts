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
          'footer-color': '#333333E5',
          'star-color': '#FFC700',
          'empy-star-color': '#E6E6E6',
        },
      },
    },
  },
  plugins: [],
};
export default config;
