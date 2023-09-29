import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        'Dark-Gray': 'hsl(0, 0%, 55%)',
        'Very-Dark-Gray': 'hsl(0, 0%, 41%)',
        'link-footer': 'hsl(228, 45%, 44%)',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      padding: {
        '5percen': '5%',
        '10percen': '10%',
      },
      margin: {
        '5percen': '5%',
        '10percen': '10%',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {},
    }],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
