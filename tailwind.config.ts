import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8B5CF6',
          dark: '#0f0f0f',
          rich: '#6d28d9',
        },
      },
      boxShadow: {
        glow: '0 40px 120px rgba(139, 92, 246, 0.25)',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradientShift: 'gradientShift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
