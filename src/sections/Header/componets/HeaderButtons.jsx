import { Button, Spacer } from "@nextui-org/react";
import { useLanguageStore } from "../../../store/languageStore";
import { TbFileDownload, TbMail } from "react-icons/tb";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IconContext } from "react-icons";

export const HeaderButtons = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="mt-3 flex justify-center lg:justify-normal">
            <Button
                className="bg-gradient-to-tr from-primary-100 to-primary-50 text-black"
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
            <Spacer x={2} />
            <Button variant="solid" isIconOnly={true} color="default">
                <IconContext.Provider value={{ size: "20" }}>
                    <div>
                        <FaInstagram />
                    </div>
                </IconContext.Provider>
            </Button>
            <Spacer x={2} />
            <Button variant="solid" isIconOnly={true} color="default">
                <IconContext.Provider value={{ size: "20" }}>
                    <div>
                        <FaGithub />
                    </div>
                </IconContext.Provider>
            </Button>
            <Spacer x={2} />
            <Button variant="solid" isIconOnly={true} color="default">
                <IconContext.Provider value={{ size: "20" }}>
                    <div>
                        <FaLinkedin />
                    </div>
                </IconContext.Provider>
            </Button>
            <Spacer x={2} />
            <Button variant="solid" isIconOnly={true} color="default">
                <IconContext.Provider value={{ size: "20" }}>
                    <div>
                        <TbMail />
                    </div>
                </IconContext.Provider>
            </Button>
        </div>
    );
};
