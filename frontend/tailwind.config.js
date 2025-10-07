/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      colors: {
        // Primary color family - Deep Ocean Blue (from the darkest stripe)
        primary: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#b9deff",
          300: "#7cc7ff",
          400: "#36acff",
          500: "#0c8ce9",
          600: "#006bc7",
          700: "#0056a1",
          800: "#004785",
          900: "#1e3a5f", // Main dark blue from your palette
        },

        // Secondary color family - Bright Ocean Blue (from the bright blue stripe)
        secondary: {
          50: "#f0fbff",
          100: "#e0f7ff",
          200: "#b8efff",
          300: "#7ae1ff",
          400: "#2ccfff",
          500: "#00b8e6",
          600: "#0094c7",
          700: "#0077a1",
          800: "#006085",
          900: "#4a9aca", // Main bright blue from your palette
        },

        // Accent color family - Turquoise/Teal (from the middle-right stripe)
        accent: {
          50: "#f0fffe",
          100: "#c7fffd",
          200: "#94fffc",
          300: "#56f5f0",
          400: "#1ee5df",
          500: "#06c5c0",
          600: "#00a19d",
          700: "#05817d",
          800: "#0a6661",
          900: "#5fb3b3", // Main turquoise from your palette
        },

        // Complementary warm accent - Coral (works well with ocean blues)
        warm: {
          50: "#fff7f0",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },

        // Neutral grays with cool undertones to match ocean theme
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },

        // Semantic colors with ocean theme
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#0ea5e9",

        // Background variations
        bg: {
          primary: "#ffffff",
          secondary: "#f8fafc",
          tertiary: "#f1f5f9",
          ocean: "#f0f9ff", // Light ocean blue background
        },

        // Text variations
        text: {
          primary: "#0f172a",
          secondary: "#334155",
          tertiary: "#64748b",
          muted: "#94a3b8",
          inverse: "#ffffff",
          ocean: "#1e3a5f", // Ocean-themed text color
        },
      },
    },
  },
  plugins: [],
};
