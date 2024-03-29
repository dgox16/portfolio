import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";

const OneButtonSocial = ({ children, url, title }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <motion.button
                whileHover={{
                    scale: 1.06,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="m-auto w-10 h-10  xs:w-12 rounded-xl xs:h-12 flex justify-center text-text items-center bg-crust border-2 border-text"
                title={title}
            >
                {children}
            </motion.button>
        </a>
    );
};

export const ButtonsSocial = () => {
    return (
        <div className="flex justify-center lg:justify-normal col-span-7 mt-4 lg:mt-0">
            <div className="lg:gap-14 grid grid-cols-4 justify-center lg:justify-normal w-4/5 lg:w-1/4">
                <OneButtonSocial
                    url={"https://www.instagram.com/diego_gomez16/"}
                    title={"Instagram"}
                >
                    <IconContext.Provider value={{ size: "20" }}>
                        <FaInstagram />
                    </IconContext.Provider>
                </OneButtonSocial>
                <OneButtonSocial url={"https://github.com/dgox16"} title={"Github"}>
                    <IconContext.Provider value={{ size: "20" }}>
                        <FaGithub />
                    </IconContext.Provider>
                </OneButtonSocial>
                <OneButtonSocial url={"mailto:dgox16@gmail.com"} title={"Email"}>
                    <IconContext.Provider value={{ size: "20" }}>
                        <TbMail />
                    </IconContext.Provider>
                </OneButtonSocial>
                <OneButtonSocial
                    url={"https://www.linkedin.com/in/diego-gomez-0b7448270/"}
                    title={"Linkedin"}
                >
                    <IconContext.Provider value={{ size: "20" }}>
                        <FaLinkedin />
                    </IconContext.Provider>
                </OneButtonSocial>
            </div>
        </div>
    );
};
