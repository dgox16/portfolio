import { motion } from "framer-motion";
import React from "react";
import { ExperienceTitle } from "../components/Experience/ExperienceTitle";
import { useLanguageStore } from "../store/languageStore";

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
        <div className="flex flex-col justify-center mx-7 xl:mx-0">
            <ExperienceTitle />
            {experience.map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <React.Fragment key={index}>
                    <motion.div
                        className="bg-green rounded-3xl p-2 px-6 my-3 md:my-8 inline-block mx-auto"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25 }}
                    >
                        <p className="text-[17px] md:text-[19px] font-medium text-base">
                            {item.date}
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="w-full md:w-recommend bg-mantle p-8 rounded-2xl">
                            <p className="text-[18px] xs:text-[20px] sm:text-[25px] md:text-[30px] font-bold text-text">
                                {item.job}
                            </p>
                            <p className="text-[16px] xs:text-[18px]  sm:text-[20px] md:text-[25px] font-medium text-text mb-4">
                                {item.company}
                            </p>
                            <p className="text-[14px] xs:text-[17px] md:text-[20px] text-subtext1 text-pretty">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                </React.Fragment>
            ))}
        </div>
    );
};
