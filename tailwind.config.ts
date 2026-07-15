import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light editorial base
        ivory: {
          DEFAULT: '#F4EFE7', // warm ivory page background
          deep: '#EDE6DA', // slightly deeper panels
        },
        sand: {
          DEFAULT: '#E7DECF', // alternate section / card ground
          dark: '#DCD1BE',
        },
        line: '#D9CFBF', // hairlines on light
        // Text
        charcoal: {
          DEFAULT: '#2B2723', // primary text
          soft: '#4A443C',
        },
        taupe: {
          DEFAULT: '#8C8173', // muted text, labels
          light: '#A99C88',
          dark: '#6F6558',
        },
        // Dark editorial sections
        espresso: {
          DEFAULT: '#26201B',
          light: '#322A23',
          line: '#3E362D',
        },
        // Restrained metallic accent
        clay: {
          DEFAULT: '#9B7B4F', // bronze accent on light
          gold: '#C6A46A', // warmer accent on dark
        },
        ivorytext: '#EFE7D8', // ivory text used on espresso
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.3em',
        wide2: '0.18em',
      },
      maxWidth: {
        shell: '1360px',
        prose2: '58ch',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
