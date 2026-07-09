import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: "#007AFF",
          "blue-light": "#5AC8FA",
          indigo: "#5856D6",
          gray: "#8E8E93",
          "gray-2": "#AEAEB2",
          "gray-3": "#C7C7CC",
          "gray-4": "#D1D1D6",
          "gray-5": "#E5E5EA",
          "gray-6": "#F2F2F7",
          dark: "#1C1C1E",
          "dark-2": "#2C2C2E",
          "dark-3": "#3A3A3C",
          red: "#FF3B30",
          green: "#34C759",
          orange: "#FF9500",
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"PingFang SC"',
          '"Helvetica Neue"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
      },
      borderRadius: {
        "apple": "18px",
        "apple-lg": "28px",
      },
      boxShadow: {
        "apple": "0 4px 24px rgba(0,0,0,0.08)",
        "apple-lg": "0 12px 48px rgba(0,0,0,0.12)",
        "apple-glow": "0 0 60px rgba(0,122,255,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
