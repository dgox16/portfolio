import { Button, Spacer } from "@nextui-org/react";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { TbFileDownload, TbMail } from "react-icons/tb";
import { useLanguageStore } from "../../../store/languageStore";

export const HeaderButtons = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="gap-0 lg:gap-4 grid grid-cols-1 lg:grid-cols-9 mt-5">
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
            <div className="flex justify-center lg:justify-normal col-span-7 mt-4 lg:mt-0">
                <div className="gap-6 lg:gap-12 grid grid-cols-4 justify-center lg:justify-normal w-3/4 lg:w-1/4">
                    <Button
                        variant="solid"
                        isIconOnly={true}
                        className="m-auto lg:m-0"
                        color="default"
                    >
                        <IconContext.Provider value={{ size: "20" }}>
                            <div>
                                <FaInstagram />
                            </div>
                        </IconContext.Provider>
                    </Button>
                    <Button
                        variant="solid"
                        isIconOnly={true}
                        className="m-auto lg:m-0"
                        color="default"
                    >
                        <IconContext.Provider value={{ size: "20" }}>
                            <div>
                                <FaGithub />
                            </div>
                        </IconContext.Provider>
                    </Button>
                    <Button
                        variant="solid"
                        isIconOnly={true}
                        className="m-auto lg:m-0"
                        color="default"
                    >
                        <IconContext.Provider value={{ size: "20" }}>
                            <div>
                                <FaLinkedin />
                            </div>
                        </IconContext.Provider>
                    </Button>
                    <Button
                        variant="solid"
                        isIconOnly={true}
                        className="m-auto lg:m-0"
                        color="default"
                    >
                        <IconContext.Provider value={{ size: "20" }}>
                            <div>
                                <TbMail />
                            </div>
                        </IconContext.Provider>
                    </Button>
                </div>
            </div>
        </div>
    );
};
