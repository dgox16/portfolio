import { ProjectCardFooter } from "./ProjectCardFooter";
import { ProjectCardTags } from "./ProjectCardTags";

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
                        <ProjectCardTags tags={tags} />
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
