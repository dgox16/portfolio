import { IconContext } from "react-icons";
import { tags } from "../../utils/tagsProgramming";
import { useScreenSize } from "../../hooks/UseSizeWindow";

export const GridLogos = () => {
    const { width } = useScreenSize();
    const sizeIcon = width >= 1024 ? "60" : "18";
    const skills = [
        {
            name: "Frontend",
            tags: [tags.react, tags.astro, tags.jinja, tags.nextUi, tags.bootstrap, tags.tailwind],
        },
        {
            name: "Backend",
            tags: [tags.django, tags.express, tags.supabase, tags.mySql, tags.mongo, tags.sqlite],
        },
        {
            name: "Languages",
            tags: [tags.javascript, tags.typescript, tags.python, tags.css, tags.html, tags.bash],
        },
        {
            name: "Tools",
            tags: [tags.git, tags.linux, tags.nodeJs, tags.vscode, tags.neovim, tags.npm],
        },
    ];

    return (
        <div className="flex justify-center mx-7 xl:mx-0">
            <div className="w-full md:w-recommend">
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                    {skills.map(({ name, tags }) => (
                        <div className="bg-mantle p-8">
                            <p className="text-5xl font-medium text-center text-text">{name}</p>
                            <div className="grid gap-8 grid-cols-3 mt-7">
                                {tags.map((tag, i) => (
                                    <div className="flex flex-col justify-center items-center">
                                        <div
                                            className={`flex size-28 text-base items-center justify-center rounded-full ${tag.color} p-2 `}
                                            title={tag.name}
                                        >
                                            <IconContext.Provider value={{ size: sizeIcon }}>
                                                {tag.icon}
                                            </IconContext.Provider>
                                        </div>
                                        <span className="text-text mt-2">{tag.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
