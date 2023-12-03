import { Button } from "@nextui-org/react";
import { MoonIcon } from "../../assets/icons/MoonIcon";
import { SunIcon } from "../../assets/icons/SunIcon";
import { useThemeStore } from "../../store/themeStore";

export const NavbarButtonTheme = () => {
    const { darkMode, changeTheme } = useThemeStore();
    return (
        <Button
            color={darkMode ? "warning" : "primary"}
            variant="flat"
            isIconOnly={true}
            onClick={() => {
                changeTheme();
            }}
        >
            {darkMode ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};
