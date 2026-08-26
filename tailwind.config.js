/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand-primary)",
          primary: "var(--brand-primary)",
          green: "var(--brand-green)",
          dark: "var(--brand-dark)",
          deep: "var(--brand-deep)",
          50: "var(--surface-soft)",
          100: "var(--surface-soft)",
          200: "var(--border)",
          300: "var(--brand-green)",
          400: "var(--brand-primary)",
          500: "var(--brand-primary)",
          600: "var(--brand-green)",
          700: "var(--brand-dark)",
          800: "var(--brand-deep)",
          900: "var(--dark-background)",
        },
        ink: {
          DEFAULT: "var(--text-primary)",
          light: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          bg: "var(--background)",
          muted: "var(--surface-soft)",
          dark: "var(--dark-surface)",
        },
        line: {
          DEFAULT: "var(--border)",
          strong: "var(--brand-green)",
        },
        background: "var(--background)",
        dark: {
          DEFAULT: "var(--dark-background)",
          surface: "var(--dark-surface)",
          border: "var(--dark-border)",
          muted: "var(--dark-muted)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        roboto: ["Space Grotesk", "Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["Space Grotesk", "Inter", "sans-serif"],
      },
      fontSize: {
        hero: ["var(--so-fs-hero)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "800" }],
        h2: ["var(--so-fs-h2)", { lineHeight: "1.18", letterSpacing: "-0.025em", fontWeight: "700" }],
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(3, 21, 12, 0.06)",
        "card-hover": "0 16px 36px rgba(0, 184, 61, 0.12)",
        btn: "0 8px 20px rgba(0, 214, 57, 0.22)",
      },
      backgroundImage: {
        "gradient-brand": "var(--brand-gradient)",
        "gradient-dark": "linear-gradient(150deg, #03150C 0%, #0A2116 48%, #005C2B 100%)",
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
        padding: { DEFAULT: "var(--so-gutter)", md: "var(--so-gutter)", lg: "var(--so-gutter)" },
      },
    },
  },
  plugins: [],
};
