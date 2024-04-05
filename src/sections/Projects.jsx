import { TitleText } from "../components/Texts/TitleText";
import { useLanguageStore } from "../store/languageStore";

import penguinMovies from "../assets/images/penguin-movies.avif";
import miGraduacion from "../assets/images/mi-graduacion.avif";
import { ProjectCard } from "../components/Projects/ProjectCard";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiAstro, SiSupabase } from "react-icons/si";

export const Projects = () => {
    const { inSpanish } = useLanguageStore();

    const tags = {
        react: {
            name: "React JS",
            icon: <FaReact />,
            color: "bg-blue",
        },
        tailwind: {
            name: "Tailwind CSS",
            icon: <SiTailwindcss />,
            color: "bg-sapphire",
        },
        mongo: {
            name: "MongoDB",
            icon: <SiMongodb />,
            color: "bg-green",
        },
        express: {
            name: "ExpressJS",
            icon: <SiExpress />,
            color: "bg-text",
        },
        astro: {
            name: "Astro",
            icon: <SiAstro />,
            color: "bg-red",
        },
        supabase: {
            name: "Supabase",
            icon: <SiSupabase />,
            color: "bg-green",
        },
    };

    const projects = [
        {
            title: "Penguin Movies",
            description: inSpanish
                ? "Tienda Online de tus películas favoritas. Cuenta con autenticación con JWT, manejo de carrito de compras y base de datos MongoDB."
                : "Online store for your favorite movies. Interface created with React and Tailwind. Features authentication with JWT and MongoDB database.",
            link: "https://penguin-movies.vercel.app/",
            github: "https://github.com/dgox16/penguin-movies",
            image: penguinMovies,
            tags: [tags.react, tags.tailwind, tags.mongo, tags.express],
        },
        {
            title: "Mi graduación",
            description: inSpanish
                ? "Tienda Online de tus películas favoritas. Interfaz creada con React y Tailwind. Cuenta con autenticación con JWT y base de datos MongoDB."
                : "Online store for your favorite movies. Interface created with React and Tailwind. Features authentication with JWT and MongoDB database.",
            link: "https://penguin-movies.vercel.app/",
            github: "https://github.com/dgox16/penguin-movies",
            image: miGraduacion,
            tags: [tags.astro, tags.tailwind, tags.supabase],
        },
    ];

    return (
        <>
            <TitleText color={"red"}>{inSpanish ? "Mis Proyectos" : "My Projects"}</TitleText>

            <div className="flex justify-center mx-7 xl:mx-0">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-recommend md:gap-5 lg:gap-16">
                    {projects.map(({ image, title, description, tags, link, github }, index) => (
                        <ProjectCard
                            image={image}
                            title={title}
                            description={description}
                            tags={tags}
                            link={link}
                            github={github}
                            key={`project_${index + index}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
