import React from "react";
import { useLanguageStore } from "../store/languageStore";
import { TitleText } from "../components/Texts/TitleText";

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
            job: "Frontend Freelancer (Astro)",
            company: "",
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
                        <div className="w-full md:w-recommend bg-mantle p-5 sm:p-6 md:p-8 rounded-2xl">
                            <p className="uppercase text-[19px]/[18px] xss:text-[20px]/[20px] xs:text-[22px]/[22px] sm:text-[24px] md:text-[30px] font-bold text-text text-center sm:text-left text-pretty">
                                {item.job}
                            </p>
                            <p className="text-[14px] xss:text-[16px] xs:text-[17px] sm:text-[19px] md:text-[25px] font-medium text-subtext1 mb-2 md:mb-4 text-center sm:text-left">
                                {item.company}
                            </p>
                            <p className="text-[13px] xss:text-[13px] xs:text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] text-subtext1 text-pretty text-center sm:text-left">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};
