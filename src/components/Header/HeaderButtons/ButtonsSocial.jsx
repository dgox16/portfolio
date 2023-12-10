import { Button } from "@nextui-org/react";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";

export const ButtonsSocial = () => {
    return (
        <div className="flex justify-center lg:justify-normal col-span-7 mt-4 lg:mt-0">
            <div className="gap-6 lg:gap-12 grid grid-cols-4 justify-center lg:justify-normal w-3/4 lg:w-1/4">
                <Button
                    variant="solid"
                    isIconOnly={true}
                    className="m-auto lg:m-0"
                    color="default"
                    title="Instagram"
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
                    title="Github"
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
                    title="Linkedin"
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
                    title="Email"
                >
                    <IconContext.Provider value={{ size: "20" }}>
                        <div>
                            <TbMail />
                        </div>
                    </IconContext.Provider>
                </Button>
            </div>
        </div>
    );
};
