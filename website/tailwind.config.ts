/**
 * ABOUTME: Tailwind CSS configuration with design tokens from the Ralph TUI theme.
 * Provides consistent styling between the terminal TUI and the website.
 */

import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors (from TUI theme)
        bg: {
          primary: '#1a1b26',
          secondary: '#24283b',
          tertiary: '#2f3449',
          highlight: '#3d4259',
        },
        // Foreground (text) colors
        fg: {
          primary: '#c0caf5',
          secondary: '#a9b1d6',
          muted: '#565f89',
          dim: '#414868',
        },
        // Status colors
        status: {
          success: '#9ece6a',
          warning: '#e0af68',
          error: '#f7768e',
          info: '#7aa2f7',
        },
        // Accent colors
        accent: {
          primary: '#7aa2f7',
          secondary: '#bb9af7',
          tertiary: '#7dcfff',
        },
        // Border colors
        border: {
          DEFAULT: '#3d4259',
          active: '#7aa2f7',
          muted: '#2f3449',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#c0caf5',
            '--tw-prose-headings': '#c0caf5',
            '--tw-prose-lead': '#a9b1d6',
            '--tw-prose-links': '#7aa2f7',
            '--tw-prose-bold': '#c0caf5',
            '--tw-prose-counters': '#565f89',
            '--tw-prose-bullets': '#565f89',
            '--tw-prose-hr': '#3d4259',
            '--tw-prose-quotes': '#a9b1d6',
            '--tw-prose-quote-borders': '#7aa2f7',
            '--tw-prose-captions': '#565f89',
            '--tw-prose-code': '#7dcfff',
            '--tw-prose-pre-code': '#c0caf5',
            '--tw-prose-pre-bg': '#1a1b26',
            '--tw-prose-th-borders': '#3d4259',
            '--tw-prose-td-borders': '#2f3449',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
