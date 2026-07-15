import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0908', // near black
          900: '#0A0908',
          800: '#100E0C',
          700: '#15120F',
        },
        charcoal: {
          DEFAULT: '#1A1613',
          light: '#221D18',
          line: '#2A241E',
        },
        bronze: {
          DEFAULT: '#6E5A3E',
          deep: '#4A3B28',
          dark: '#33291B',
        },
        gold: {
          DEFAULT: '#C6A46A', // brand accent
          bright: '#D8BC86', // brushed highlight
          dim: '#8C7449',
        },
        ivory: {
          DEFAULT: '#E9E1CF', // warm ivory typography
          dim: '#A79E8C',
          faint: '#6E6656',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.28em',
        label: '0.34em',
      },
      maxWidth: {
        shell: '1440px',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        floatUp: 'floatUp 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
