import { Button } from "@nextui-org/react";
import { TbFileDownload } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useLanguageStore } from "../../../store/languageStore";

export const ButtonDownloadCv = () => {
    const { inSpanish } = useLanguageStore();
    return (
        <div className="flex justify-center lg:justify-normal col-span-2">
            <Button
                className="w-3/4 lg:w-full bg-gradient-to-tr from-lavender-500 to-red-100 dark:from-red-600 dark:via-red-500 dark:to-yellow-400 text-black font-medium"
                startContent={
                    <IconContext.Provider value={{ size: "20" }}>
                        <div>
                            <TbFileDownload />
                        </div>
                    </IconContext.Provider>
                }
            >
                {inSpanish ? "Descargar CV" : "Download CV"}
            </Button>
        </div>
    );
};
