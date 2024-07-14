import { useLanguageStore } from "../store/languageStore";
import { TitleText } from "../components/Texts/TitleText";
import { ExperienceItem } from "../components/Experience/ExperienceItem";

export const Experience = () => {
    const { inSpanish } = useLanguageStore();

    const experience = [
        {
            date: inSpanish ? "Marzo 2024 - Presente" : "March 2024 - Present",
            job: inSpanish ? "Desarrollador Backend (Rust)" : "Backend Developer (Rust)",
            company: "SICAP VIP",
            description: inSpanish
                ? "Me encargo del desarrollo de una API dedicada a gestionar una aplicación centrada en servicios financieros de préstamos. Para ello, empleo herramientas como Rust, haciendo uso principalmente de la librería Axum y Sqlx. Además, administro una base de datos PostgreSQL donde almaceno datos y realizo búsquedas de registros utilizando paginación."
                : "I'm responsible for developing an API dedicated to managing a loan-centric financial services application. For this, I use tools like Rust, primarily leveraging the Axum library and Sqlx. Additionally, I manage a PostgreSQL database where I store data and perform record searches using pagination.",
        },
        {
            date: inSpanish ? "Febrero 2024 - Presente" : "February 2024 - Present",
            job: inSpanish ? "Desarrollador Frontend (Astro)" : "Frontend Developer (Astro)",
            company: "Freelancer",
            description: inSpanish
                ? "He trabajado como Freelancer en varios proyectos de creación de Landing Pages. Para desarrollar estas páginas, he utilizado herramientas como React, Supabase, Express, TailwindCSS y Astro."
                : "I have worked as a Freelancer on several projects creating Landing Pages. To develop these pages, I have used tools like React, Supabase, Express, TailwindCSS, and Astro.",
        },
        {
            date: inSpanish ? "Marzo 2023 - Marzo 2024" : "March 2023 - March 2024",
            job: inSpanish ? "Junior Fullstack (Django)" : "Fullstack Junior (Django)",
            company: "SICAP VIP",
            description: inSpanish
                ? "He liderado la renovación completa de una antigua aplicación web del área de prestamos financieros, transformándola en una versión moderna y mejorada utilizando el framework Django; mientras uso HTML, CSS y JavaScript para el desarrollo de la interfaz. Esto implicó desarrollar por completo el backend, frontend, realizar pruebas y documentar todo el proceso de manera independiente."
                : "I have led the complete renovation of an old web application in the financial lending area, transforming it into a modern and improved version using the Django framework, while utilizing HTML, CSS, and JavaScript for the interface development. This involved fully developing the backend, frontend, conducting tests, and independently documenting the entire process.",
        },
    ];

    return (
        <div className="flex justify-center items-center mx-7 xl:mx-0" id="experience">
            <div className="w-full md:w-recommend">
                <TitleText color={"green"}>{inSpanish ? "Experiencia" : "Experience"}</TitleText>
                {experience.map((item, index) => (
                    <ExperienceItem key={`experience_item_${index + index}`} item={item} />
                ))}
            </div>
        </div>
    );
};
