import { TitleText } from "../components/Texts/TitleText";
import { useLanguageStore } from "../store/languageStore";
import { tags } from "../utils/tagsProgramming";
import penguinMovies from "../assets/images/penguin-movies.avif";
import miGraduacion from "../assets/images/mi-graduacion.avif";
import { ProjectCard } from "../components/Projects/ProjectCard";

export const Projects = () => {
    const { inSpanish } = useLanguageStore();

    const projects = [
        {
            title: "Penguin Movies",
            description: inSpanish
                ? "Tienda Online de tus películas favoritas. Cuenta con autenticación con JWT, manejo de carrito de compras y base de datos MongoDB."
                : "Online store for your favorite movies. It features JWT authentication, shopping cart management, and MongoDB database.",
            link: "https://penguin-movies.vercel.app/",
            github: "https://github.com/dgox16/penguin-movies",
            image: penguinMovies,
            tags: [tags.react, tags.tailwind, tags.mongo, tags.express],
        },
        {
            title: "Mi graduación",
            description: inSpanish
                ? "Página realizada para la invitación a una graduación de licenciatura. Desarrollada con Astro y un backend para el manejo de invitados."
                : "Page created for a bachelor's graduation invitation. Developed with Astro and a backend for managing guests.",
            link: "https://landing-page-graduacion.vercel.app/",
            github: "https://github.com/dgox16/landingPage_Graduacion",
            image: miGraduacion,
            tags: [tags.astro, tags.tailwind, tags.supabase],
        },
    ];

    return (
        <div id="projects">
            <TitleText color={"red"}>{inSpanish ? "Proyectos" : "Projects"}</TitleText>
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
        </div>
    );
};
