/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cybrary: {
          green: {
            DEFAULT: '#00E599',
            hover: '#00C784',
            light: '#33ebb0',
            glow: 'rgba(0, 229, 153, 0.35)',
            subtle: 'rgba(0, 229, 153, 0.08)',
          },
          dark: {
            DEFAULT: '#060B13',
            deep: '#03070D',
            alt: '#0A1220',
            card: '#0D1728',
            'card-hover': '#132139',
            elevated: '#172744',
          },
          cyan: {
            DEFAULT: '#00D2FF',
            glow: 'rgba(0, 210, 255, 0.35)',
          },
          border: {
            DEFAULT: '#19253B',
            light: '#233452',
            accent: 'rgba(0, 229, 153, 0.25)',
          },
          text: {
            primary: '#F8FAFC',
            secondary: '#94A3B8',
            muted: '#64748B',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle, rgba(0, 229, 153, 0.07) 1px, transparent 1px)",
        'cyber-glow-radial': 'radial-gradient(circle at 50% 0%, rgba(0, 229, 153, 0.15) 0%, rgba(6, 11, 19, 0) 70%)',
      },
      boxShadow: {
        'neon-green': '0 0 20px -3px rgba(0, 229, 153, 0.45)',
        'neon-green-lg': '0 0 35px -5px rgba(0, 229, 153, 0.55)',
        'neon-cyan': '0 0 20px -3px rgba(0, 210, 255, 0.4)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}

