import { ProjectCardFooter } from "./ProjectCardFooter";
import { ProjectCardTags } from "./ProjectCardTags";

export const ProjectCard = ({ image, title, description, tags, link, github }) => {
    return (
        <div className="flex justify-center mb-4">
            <div className="w-full bg-mantle p-5 sm:p-8 md:p-4 lg:p-8 rounded-2xl">
                <img
                    alt="Penguin Movies"
                    className="rounded-2xl my-auto mx-auto w-full md:w-full lg:w-full"
                    src={image}
                />
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-[19px] xss:text-[20px]  xs:text-[22px] sm:text-[24px] md:text-[30px] font-semibold text-text mt-6 mb-1 uppercase">
                        {title}
                    </h1>
                    <ProjectCardTags tags={tags} />
                    <p className="mt-5 text-[13px] xss:text-[14px] xs:text-[14px] sm:text-[17px] md:text-[17px] lg:text-[19px] text-subtext1">
                        {description}
                    </p>
                    <ProjectCardFooter link={link} github={github} />
                </div>
            </div>
        </div>
    );
};
