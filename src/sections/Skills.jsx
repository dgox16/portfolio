import { IconContext } from "react-icons";
import { TitleText } from "../components/Texts/TitleText";
import { useScreenSize } from "../hooks/UseSizeWindow";
import { useLanguageStore } from "../store/languageStore";
import { tags } from "../utils/tagsProgramming";

export const Skills = () => {
    const { width } = useScreenSize();
    const { inSpanish } = useLanguageStore();

    const sizeIcon = width >= 1024 ? "40" : width >= 768 ? "28" : width >= 640 ? "40" : "28";

    const skills = [
        {
            name: "Frontend",
            tags: [
                tags.react,
                tags.astro,
                tags.svelte,
                tags.nextJs,
                tags.jinja,
                tags.tailwind,
                tags.bootstrap,
                tags.shadcnui,
            ],
        },
        {
            name: "Backend",
            tags: [
                tags.django,
                tags.express,
                tags.supabase,
                tags.postgresql,
                tags.sqlite,
                tags.mongo,
                tags.mySql,
            ],
        },
        {
            name: inSpanish ? "Lenguajes" : "Languages",
            tags: [
                tags.javascript,
                tags.typescript,
                tags.python,
                tags.rust,
                tags.css,
                tags.html,
                tags.bash,
            ],
        },
        {
            name: inSpanish ? "Herramientas" : "Tools",
            tags: [
                tags.git,
                tags.linux,
                tags.nodeJs,
                tags.docker,
                tags.vscode,
                tags.neovim,
                tags.npm,
            ],
        },
    ];

    return (
        <div className="flex justify-center mx-7 xl:mx-0" id="skills">
            <div className="w-full md:w-recommend">
                <TitleText color={"yellow"}>{inSpanish ? "Habilidades" : "Skills"}</TitleText>
                <div className="gap-3 md:gap-6 lg:gap-14 grid grid-cols-1 md:grid-cols-2">
                    {skills.map(({ name, tags }, index) => (
                        <div
                            className="flex flex-col justify-center bg-mantle rounded-2xl p-6 xs:p-8"
                            key={`skill-${index + index}`}
                        >
                            <div className="grid gap-6 xs:gap-8 grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 mb-9">
                                {tags.map((tag, index) => (
                                    <div
                                        className="flex flex-col justify-center items-center"
                                        key={`skillElement-${index + index}`}
                                    >
                                        <div
                                            className={`flex size-12 xs:size-[3.50rem] sm:size-20 md:size-14 lg:size-[4.5rem] xl:size-20 text-base items-center justify-center rounded-full ${tag.color} p-2 `}
                                            title={tag.name}
                                        >
                                            <IconContext.Provider value={{ size: sizeIcon }}>
                                                {tag.icon}
                                            </IconContext.Provider>
                                        </div>
                                        <span className="text-xs xs:text-xs sm:text-[15px] md:text-[13px] lg:text-[15px] text-text mt-2 hidden xs:inline">
                                            {tag.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <span className="text-[18px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[32px] font-bold text-center text-text uppercase">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
