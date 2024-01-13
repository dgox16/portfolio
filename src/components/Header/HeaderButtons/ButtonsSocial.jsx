import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { TbMail } from "react-icons/tb";

const OneButtonSocial = ({ children }) => {
    return (
        <motion.button
            whileHover={{
                scale: 1.06,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="m-auto w-10 h-10  xs:w-12 rounded-xl xs:h-12 flex justify-center text-text items-center bg-crust border-2 border-text"
            title="Instagram"
        >
            {children}
        </motion.button>
    );
};

export const ButtonsSocial = () => {
    return (
        <div className="flex justify-center lg:justify-normal col-span-7 mt-4 lg:mt-0">
            <div className="lg:gap-14 grid grid-cols-4 justify-center lg:justify-normal w-4/5 lg:w-1/4">
                <OneButtonSocial>
                    <IconContext.Provider value={{ size: "20" }}>
                        <FaInstagram />
                    </IconContext.Provider>
                </OneButtonSocial>
                <OneButtonSocial>
                    <IconContext.Provider value={{ size: "20" }}>
                        <FaGithub />
                    </IconContext.Provider>
                </OneButtonSocial>
                <OneButtonSocial>
                    <IconContext.Provider value={{ size: "20" }}>
                        <TbMail />
                    </IconContext.Provider>
                </OneButtonSocial>
                <OneButtonSocial>
                    <IconContext.Provider value={{ size: "20" }}>
                        <FaLinkedin />
                    </IconContext.Provider>
                </OneButtonSocial>
            </div>
        </div>
    );
};
