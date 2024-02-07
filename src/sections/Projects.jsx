import React from "react";
import { motion } from "framer-motion";
import { TitleText } from "../components/Texts/TitleText";
import { useLanguageStore } from "../store/languageStore";

export const Projects = () => {
    const { inSpanish } = useLanguageStore();
    const TAGS = {
        REACT: {
            name: "React JS",
            class: "bg-blue text-mantle",
        },
        TAILWIND: {
            name: "Tailwind CSS",
            class: "bg-[#003159] text-white",
        },
        MONGO: {
            name: "MongoDB",
            class: "bg-green text-mantle",
        },
    };
    const PROJECTS = [
        {
            title: "Penguin Movies",
            description: inSpanish
                ? "Tienda Online de tus películas favoritas. Interfaz creada con React y Tailwind. Cuenta con autenticación con JWT y base de datos MongoDB."
                : "Online store for your favorite movies. Interface created with React and Tailwind. Features authentication with JWT and MongoDB database.",
            link: "https://svgl.vercel.app/",
            github: "https://github.com/dgox16/penguin-movies",
            image: "/src/assets/images/penguin-movies.avif",
            tags: [TAGS.REACT, TAGS.MONGO],
        },
    ];

    return (
        <div className="flex flex-col justify-center mx-7 xl:mx-0">
            <TitleText color={"red"}>{inSpanish ? "Mis Proyectos" : "My Projects"}</TitleText>
            {PROJECTS.map(({ image, title, description, tags, link, github }, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <div className="flex justify-center mt-6 mb-4" key={index}>
                    <div className="w-full md:w-recommend bg-mantle p-2 md:p-5 rounded-2xl">
                        <div className="gap-5 md:gap-16 grid grid-cols-1 md:grid-cols-2">
                            <img alt="Diego Armando" className="rounded-2xl my-auto" src={image} />
                            <div className="flex items-center text-center md:text-left">
                                <div class="flex flex-col">
                                    <h3 class="text-[18px] xs:text-[20px] sm:text-[25px] md:text-[30px] font-bold text-text mb-2 lg:mb-5">
                                        {title}
                                    </h3>
                                    <ul class="flex flex-row mb-1 justify-center md:justify-start lg:mb-4 gap-x-2">
                                        {tags.map((tag) => (
                                            <li>
                                                <span
                                                    class={`flex gap-x-2 rounded-xl text-[12px] md:text-[17px] font-medium ${tag.class} py-1 px-2 `}
                                                >
                                                    {tag.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div class="mt-2 text-[14px] xs:text-[17px] md:text-[20px] text-subtext1">
                                        {description}
                                    </div>
                                    <footer class="flex items-end justify-center md:justify-start mb-2 md:mb-0  mt-2 lg:mt-4 gap-x-4">
                                        {github && (
                                            <motion.a
                                                whileHover={{
                                                    scale: 1.06,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10,
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                                type="button"
                                                className="w-24 rounded-xl h-10 flex justify-center text-text items-center bg-crust border-2 border-text"
                                                href={github}
                                                role="link"
                                            >
                                                Github
                                            </motion.a>
                                        )}
                                        {link && (
                                            <motion.a
                                                whileHover={{
                                                    scale: 1.06,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10,
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                                type="button"
                                                className="w-24 rounded-xl h-10 flex justify-center text-text items-center bg-crust border-2 border-text"
                                                href={github}
                                                role="link"
                                            >
                                                Preview
                                            </motion.a>
                                        )}
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
