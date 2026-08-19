/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#0d1c16",
          100: "#12261d",
          200: "#163226",
          300: "#239F4A",
          400: "#7CFF00",
          500: "#7CFF00",
          600: "#5FE000",
          700: "#7CFF00",
          800: "#063F2A",
          900: "#071313",
        },
        ink: {
          DEFAULT: "#F4FBF6",
          light: "#C5D5CE",
          muted: "#B7C4BE",
        },
        surface: {
          DEFAULT: "#0d1c16",
          bg: "#071313",
          muted: "#0a1a14",
        },
        line: {
          DEFAULT: "rgba(124,255,0,0.22)",
          strong: "#7CFF00",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        grotesk: ["Space Grotesk", "Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(1.75rem, 7vw, 3.75rem)", { lineHeight: "1.12", letterSpacing: "-0.03em" }],
        h2: ["clamp(1.5rem, 5.4vw, 2.75rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card: "0 0 0 1px rgba(124,255,0,0.18), 0 12px 40px rgba(0,0,0,0.35)",
        "card-hover": "0 0 0 1px rgba(124,255,0,0.4), 0 0 36px rgba(124,255,0,0.16)",
        btn: "0 0 24px rgba(124,255,0,0.35)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #7CFF00 0%, #239F4A 100%)",
        "gradient-dark": "linear-gradient(150deg, #071313 0%, #0d1c16 48%, #063F2A 100%)",
      },
      keyframes: {
        "orbit-spin": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "orbit-spin-reverse": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(-360deg)" } },
        "pulse-soft": { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        "float-y": { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-10px)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "fade-up": { from: { opacity: 0, transform: "translateY(28px)" }, to: { opacity: 1, transform: "translateY(0)" } },
      },
      animation: {
        "orbit-spin": "orbit-spin 26s linear infinite",
        "orbit-spin-reverse": "orbit-spin-reverse 26s linear infinite",
        "orbit-spin-slow": "orbit-spin 18s linear infinite reverse",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "float-y": "float-y 5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", md: "2rem", lg: "2rem" },
      },
    },
  },
  plugins: [],
};
