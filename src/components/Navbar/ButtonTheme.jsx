import { IconContext } from "react-icons";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { useThemeStore } from "../../store/themeStore";
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
        <button
            className="flex hover:scale-110 transition duration-150 justify-center text-mauve dark:text-yellow items-center mr-2 rounded-xl h-10 w-10 "
            title="ChangeTheme"
            type="button"
            onClick={changeTheme}
        >
            <div>
                {darkMode ? (
                    <IconContext.Provider value={{ size: "24" }}>
                        <TbSunFilled />
                    </IconContext.Provider>
                ) : (
                    <IconContext.Provider value={{ size: "24" }}>
                        <TbMoonFilled />
                    </IconContext.Provider>
                )}
            </div>
        </button>
    );
};
