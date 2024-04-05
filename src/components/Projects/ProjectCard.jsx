import { IconContext } from "react-icons";
import { ProjectCardFooter } from "./ProjectCardFooter";

export const ProjectCard = ({ image, title, description, tags, link, github }) => {
    return (
        <div className="flex justify-center mb-4">
            <div className="w-full bg-mantle p-8 md:p-4 lg:p-8 rounded-2xl">
                <img
                    alt="Penguin Movies"
                    className="rounded-2xl my-auto mx-auto w-full md:w-full lg:w-full"
                    src={image}
                />
                <div className="flex items-center text-center">
                    <div className="flex flex-col">
                        <h3 className="text-[18px] xs:text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-extrabold text-text mt-6 uppercase">
                            {title}
                        </h3>
                        <ul className="flex flex-row mb-1 justify-center gap-x-2">
                            {tags.map((tag, i) => (
                                <li key={`tag_${i + i}`}>
                                    <span
                                        className={`flex text-mantle gap-x-2 rounded-full text-[12px] ${tag.color} p-2 `}
                                        title={tag.name}
                                    >
                                        <IconContext.Provider value={{ size: "22" }}>
                                            {tag.icon}
                                        </IconContext.Provider>
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-5 text-[14px] xs:text-[17px] md:text-[15px] lg:text-[19px] text-subtext1">
                            {description}
                        </div>
                        <ProjectCardFooter link={link} github={github} />
                    </div>
                </div>
            </div>
        </div>
    );
};
