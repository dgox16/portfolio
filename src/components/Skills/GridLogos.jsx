import {
    BashIcon,
    BootstrapIcon,
    CssIcon,
    DjangoIcon,
    DockerIcon,
    ExpressIcon,
    GitIcon,
    HandlebarsIcon,
    HtmlIcon,
    JavascriptIcon,
    MongoIcon,
    MySqlIcon,
    NodeIcon,
    NpmIcon,
    PythonIcon,
    ReactIcon,
    TailwindIcon,
    TypescriptIcon,
    VimIcon,
    ViteIcon,
} from "../../assets/icons/LogoIcons";
import { useThemeStore } from "../../store/themeStore";
import { motion } from "framer-motion";
import { useScreenSize } from "../hooks/UseSizeWindow";

export const GridLogos = () => {
    const { width } = useScreenSize();
    const listIcons = [
        JavascriptIcon,
        ReactIcon,
        HtmlIcon,
        CssIcon,
        NodeIcon,
        MongoIcon,
        DjangoIcon,
        ExpressIcon,
        MySqlIcon,
        DockerIcon,
        TailwindIcon,
        PythonIcon,
        GitIcon,
        HandlebarsIcon,
        ViteIcon,
        VimIcon,
        TypescriptIcon,
        BashIcon,
        NpmIcon,
        BootstrapIcon,
    ];

    const orden =
        width < 768
            ? [0, 1, 2, 3, 1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7]
            : [0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7];

    const { darkMode } = useThemeStore();
    const container = {
        hidden: { opacity: 0, scale: 0 },
        show: {
            opacity: 1,
            scale: 1,
        },
    };
    const item = {
        hidden: { opacity: 0, scale: 0 },
        show: (custom) => ({ opacity: 1, scale: 1, transition: { delay: 0.2 + custom * 0.06 } }),
    };

    return (
        <div className="flex justify-center mx-7 xl:mx-0">
            <div className="w-full md:w-recommend bg-mantle p-5 rounded-2xl">
                <div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        className="gap-4 grid grid-cols-4 md:grid-cols-5"
                    >
                        {listIcons.map((Icon, index) => (
                            <motion.div
                                variants={item}
                                key={index}
                                custom={orden[index]}
                                className="flex justify-center mt-4"
                            >
                                <Icon width={90} height={90} isLight={darkMode} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
