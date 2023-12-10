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
                "lavender-500": "#9a8dfd",
                "lavender-300": "#b2a8fd",
                "lavender-700": "#766CD8",
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
            gradient: "animatedgradient 5s ease infinite alternate",
        },
        fontFamily: {
            display: ["Switzer"],
            body: ["Inter"],
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            addCommonColors: true,
            themes: {
                dark: {
                    colors: {
                        primary: {
                            DEFAULT: "#9a8dfd",
                            foreground: "#000000",
                        },
                        secondary: {
                            DEFAULT: "#006FEE",
                        },
                        focus: "#BEF264",
                    },
                },
                light: {
                    colors: {
                        primary: {
                            DEFAULT: "#8678f9",
                            foreground: "#000000",
                        },
                        secondary: {
                            DEFAULT: "#006FEE",
                        },
                        focus: "#BEF264",
                    },
                },
            },
        }),
    ],
};
