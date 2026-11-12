import type { Config } from "tailwindcss";
const config: Config = {
    darkMode: 'class',
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: "var(--bg-primary)",
                    secondary: "var(--bg-secondary)",
                },
                surface: "var(--surface)",
                accent: {
                    blue: "var(--accent-blue)",
                    purple: "var(--accent-purple)",
                    green: "var(--accent-green)",
                    orange: "var(--accent-orange)",
                }, 
                content: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                },
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "var(--radius-xl)",
            },
            boxShadow: {
                glass: "var(--shadow-glass)", 
                "glow-blue": "var(--glow-blue)",
                "glow-purple": "var(--glow-purple)",
            }, 
            fontFamily: {
                heading: ["var(--font-sora)", "sans-serif"], 
                body: ["var(--font-inter)", "sans-serif"],
            },
            transitionTimingFunction: {
                out: "var(--ease-out)",
            },
        },
    },
    plugins: [],
};

export default config;