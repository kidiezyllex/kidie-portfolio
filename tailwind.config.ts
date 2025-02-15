import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'flip-words': {
          '10%': {
            transform: 'translateY(-112%)',
          },
          '25%': {
            transform: 'translateY(-100%)',
          },
          '35%': {
            transform: 'translateY(-212%)',
          },
          '50%': {
            transform: 'translateY(-200%)',
          },
          '60%': {
            transform: 'translateY(-312%)',
          },
          '75%': {
            transform: 'translateY(-300%)',
          },
          '85%': {
            transform: 'translateY(-412%)',
          },
          '100%': {
            transform: 'translateY(-400%)',
          },
        },
        wave: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(15deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        'bg-position': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '100%': {
            backgroundPosition: '100% 50%',
          },
        },
        zoomTilt: {
          '0%': {
            transform: 'translateX(50%) scale(1) rotate(0deg)',
          },
          '50%': {
            transform: 'translateX(50%) scale(1.05) rotate(7deg)',
          },
          '100%': {
            transform: 'translateX(50%) scale(1) rotate(0deg)',
          },
        },
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))',
          },
        },
        pulse: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 var(--pulse-color)',
          },
          '50%': {
            boxShadow: '0 0 0 6px var(--pulse-color)',
          },
        },
        rippling: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        'hover-pulse': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(255, 0, 0, 0.7)',
          },
          '100%': {
            boxShadow: '0 0 0 2em rgba(255, 0, 0, 0)',
          },
        },
        scrolling: {
          "0%": { opacity: "0", transform: "translateY(-20px) translateX(-50%)" },
          "100%": { opacity: "1", transform: "translateY(20px) translateX(-50%)" },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'flip-words': 'flip-words 8s infinite',
        wave: 'wave 0.7s ease-out infinite',
        'bg-position': 'bg-position 3s ease-out infinite',
        'zoom-tilt': 'zoomTilt 8s ease-in-out infinite',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        pulse: 'pulse var(--duration) ease-out infinite',
        rippling: 'rippling var(--duration) ease-out',
        'hover-pulse': 'hover-pulse 1s ease-in-out',
        scrolling: "scrolling 1s linear infinite",

      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
