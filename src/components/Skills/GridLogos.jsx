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

    const { darkMode } = useThemeStore();

    return (
        <div className="flex justify-center mx-7 xl:mx-0">
            <div className="w-full md:w-recommend bg-mantle p-5 rounded-2xl">
                <div className="gap-4 grid grid-cols-4 md:grid-cols-5">
                    {listIcons.map((Icon, index) => (
                        <div key={index} className="flex justify-center mt-4">
                            <Icon width={90} height={90} isLight={darkMode} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
