const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [require("@catppuccin/tailwindcss")],

    theme: {
        screens: {
            xss: "360px",
            xs: "393px",
            ...defaultTheme.screens,
        },
        extend: {
            margin: {
                "80px": "80px",
            },
            width: {
                recommend: "115ch",
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
            display: ["Onest Variable"],
            body: ["Onest Variable"],
        },
    },
    darkMode: "class",
};
