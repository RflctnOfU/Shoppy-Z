import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "main-border": "#333",
        "main-primary": "#bbb",
        "main-secondary": "#555",
        "main-tertiary": "#999",
      },
    },
  },
  plugins: [],
} satisfies Config;
