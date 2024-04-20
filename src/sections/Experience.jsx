import React from "react";
import { useLanguageStore } from "../store/languageStore";
import { TitleText } from "../components/Texts/TitleText";

export const Experience = () => {
    const { inSpanish } = useLanguageStore();

    const experience = [
        {
            date: inSpanish ? "Octubre 2022 - Actualidad" : "October 2022 - Present",
            job: inSpanish ? "Desarrollador Fullstack" : "Fullstack developer",
            company: "SICAP VIP",
            description: inSpanish
                ? "Desarrollo y actualizo tecnologías de aplicaciones web enfocadas al área de préstamos. Para este trabajo contribuyo como programador backend en Django y Sqlite3; mientras que uso Bootstrap y Vanilla JS para frontend."
                : "I develop and update web application technologies focused on the loan sector. For this job, I contribute as a backend programmer in Django and Sqlite3, while using Bootstrap and Vanilla JS for the frontend.",
        },
    ];
    return (
        <div className="flex flex-col justify-center mx-7 xl:mx-0" id="experience">
            <TitleText color={"green"}>{inSpanish ? "Experiencia" : "Experience"}</TitleText>
            {experience.map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <React.Fragment key={index}>
                    <div className="bg-green rounded-3xl py-2 px-4 sm:px-6 my-4 sm:my-7 inline-block mx-auto">
                        <p className="text-[13px] xs:text-[14px] md:text-[19px] font-medium text-crust">
                            {item.date}
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full md:w-recommend bg-mantle p-3 sm:p-6 md:p-8 rounded-2xl">
                            <p className="uppercase text-[19px]/[18px] xss:text-[20px]/[19px] xs:text-[23px]/[22px] sm:text-[25px] md:text-[30px] font-semibold text-text text-center sm:text-left">
                                {item.job}
                            </p>
                            <p className="text-[15px] xs:text-[18px] sm:text-[20px] md:text-[25px] font-medium text-subtext1 mt-1 mb-2 md:mb-4 text-center sm:text-left">
                                {item.company}
                            </p>
                            <p className="text-[13px] xs:text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] text-subtext1 text-pretty text-center sm:text-left">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};
