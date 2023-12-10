import { Button } from "@nextui-org/react";
import { IconContext } from "react-icons";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { useThemeStore } from "../../store/themeStore";

export const ButtonTheme = () => {
    const { darkMode, changeTheme } = useThemeStore();
    return (
        <Button
            color={darkMode ? "warning" : "primary"}
            variant="flat"
            isIconOnly={true}
            title="ChangeTheme"
            onClick={() => {
                changeTheme();
            }}
        >
            {darkMode ? (
                <IconContext.Provider value={{ size: "20" }}>
                    <div>
                        <TbSunFilled />
                    </div>
                </IconContext.Provider>
            ) : (
                <IconContext.Provider value={{ size: "20" }}>
                    <div>
                        <TbMoonFilled />
                    </div>
                </IconContext.Provider>
            )}
        </Button>
    );
};
