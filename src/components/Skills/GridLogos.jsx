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

export const GridLogos = () => {
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

    const orden = [0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7];
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
            <card className="w-full md:w-recommend bg-mantle py-5 rounded-2xl">
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
                                custom={orden[index]}
                                className="flex justify-center mt-4"
                            >
                                <Icon width={90} height={90} isLight={darkMode} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </card>
        </div>
    );
};
