/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E7FBF6",
          100: "#D4F5EC",
          200: "#A8EBDC",
          300: "#6EE7C8",
          400: "#7CFF00",
          500: "#35D0A5",
          600: "#239F4A",
          700: "#087A3E",
          800: "#063F2A",
          900: "#071313",
        },
        ink: {
          DEFAULT: "#071313",
          light: "#365F6E",
          muted: "#365F6E",
        },
        surface: {
          DEFAULT: "#EAF8F2",
          bg: "#E7F7F0",
          muted: "#D4F5EC",
        },
        line: {
          DEFAULT: "#B7E8DA",
          strong: "#35D0A5",
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
        hero: ["clamp(2.5rem, 5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        h2: ["clamp(2rem, 4vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        card: "0 4px 20px rgba(53,208,165,0.12)",
        "card-hover": "0 16px 40px rgba(7,19,19,0.14)",
        btn: "0 8px 24px rgba(7,19,19,0.28)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #35D0A5 0%, #29C3BE 50%, #1FB8D2 100%)",
        "gradient-dark": "linear-gradient(150deg, #071313 0%, #063F2A 48%, #087A3E 100%)",
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
