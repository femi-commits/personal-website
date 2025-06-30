/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Engineering color palette
        engineering: {
          dark: '#0f0f0f',
          charcoal: '#1a1a1a',
          steel: '#2d2d2d',
          iron: '#404040',
          silver: '#6b7280',
          light: '#9ca3af',
        },
        // Red accent colors
        accent: {
          red: '#dc2626',
          'red-dark': '#991b1b',
          'red-light': '#ef4444',
        },
        // Technical greys
        tech: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'tech': ['Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        'engineering': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'inset-engineering': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
        'cad': '2px 2px 4px rgba(0, 0, 0, 0.3), inset 1px 1px 2px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'engineering-grid': 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        'tech-gradient': 'linear-gradient(145deg, #374151, #1f2937)',
        'panel-gradient': 'linear-gradient(145deg, #f3f4f6, #e5e7eb)',
      }
    },
  },
  plugins: [],
};