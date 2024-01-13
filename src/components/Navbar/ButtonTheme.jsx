import { IconContext } from "react-icons";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { useThemeStore } from "../../store/themeStore";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const ButtonTheme = () => {
    const { darkMode, changeTheme } = useThemeStore();

    const applyThemePreference = () => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? "light" : "dark");
        root.classList.add(darkMode ? "dark" : "light");
    };

    useEffect(() => {
        applyThemePreference();
    }, [darkMode, applyThemePreference]);

    return (
        <motion.button
            whileHover={{
                scale: 1.1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex justify-center text-mauve dark:text-yellow items-center mr-2 rounded-xl h-10 w-10 "
            title="ChangeTheme"
            type="button"
            onClick={changeTheme}
        >
            <motion.div
                animate={darkMode ? "open" : "closed"}
                variants={{
                    open: { rotate: [0, 360], scale: [0, 1] },
                    closed: { rotate: [0, 360], scale: [0, 1] },
                }}
                transition={{ duration: 0.3 }}
            >
                {darkMode ? (
                    <IconContext.Provider value={{ size: "24" }}>
                        <TbSunFilled />
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider value={{ size: "24" }}>
                        <TbMoonFilled />
                    </IconContext.Provider>
                )}
            </motion.div>
        </motion.button>
    );
};
