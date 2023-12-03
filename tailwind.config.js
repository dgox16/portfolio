const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-100": "#9a8dfd",
                "primary-50": "#b2a8fd",
                "primary-200": "#8678f9",
            },
            margin: {
                "80px": "80px",
            },
            width: {
                recommend: "122ch",
            },
        },
        keyframes: {
            animatedgradient: {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
            },
        },
        backgroundSize: {
            "300%": "300%",
        },
        animation: {
            gradient: "animatedgradient 2s ease infinite alternate",
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        primary: {
                            DEFAULT: "#9a8dfd",
                            foreground: "#000000",
                        },
                        focus: "#BEF264",
                    },
                },
            },
        }),
    ],
};
