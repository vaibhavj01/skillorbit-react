/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF9F0",
          100: "#E8F7EB",
          200: "#C7EDCE",
          300: "#A8E89A",
          400: "#76D66A",
          500: "#36A84A",
          600: "#168238",
          700: "#127030",
          800: "#0D4D2B",
          900: "#0A3A21",
        },
        ink: {
          DEFAULT: "#101514",
          light: "#344054",
          muted: "#667085",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          bg: "#F6FAF7",
          muted: "#EEF5F0",
        },
        line: {
          DEFAULT: "#DDE7E0",
          strong: "#C5D5CA",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        h2: ["clamp(2rem, 4vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card: "0 4px 20px rgba(13,77,43,0.08)",
        "card-hover": "0 16px 40px rgba(13,77,43,0.14)",
        btn: "0 8px 24px rgba(0,0,0,0.28)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #168238 0%, #36A84A 50%, #76D66A 100%)",
        "gradient-dark": "linear-gradient(150deg, #0F4A28 0%, #168238 45%, #1FA04A 100%)",
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
