import { TitleText } from "../components/Texts/TitleText";
import { useLanguageStore } from "../store/languageStore";

export const AboutMe = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="flex justify-center mx-7 xl:mx-0 mb-8 md:mb-16" id="about-me">
            <div className="w-full lg:w-recommend">
                <TitleText color={"blue"}>{inSpanish ? "Sobre mi" : "About Me"}</TitleText>
                <div className="flex flex-col justify-center">
                    <p
                        className={
                            "text-[13px] xss:text-[13px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-text text-center text-pretty"
                        }
                    >
                        {inSpanish
                            ? "Soy un desarrollador Full Stack de 24 años de edad. Mi experiencia abarca tanto el desarrollo backend utilizando tecnologías como Django, Rust (con Axum), Supabase y Express JS, como el frontend con React, Astro, Tailwind CSS y HTML. Tanto en proyectos personales como en el ámbito laboral, he trabajado con bases de datos tanto relacionales (PostgreSQL, SQLite) como no relacionales (MongoDB)."
                            : "I'm an enthusiastic technology enthusiast. I'm 24 years old and I am from Mexico. I have loved computer science since I was a child, and my dream has always been to be a programmer and make a living from it. Working and learning from something you love makes everything easier."}
                    </p>
                    <p
                        className={
                            "text-[13px] xss:text-[13px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-text text-center text-pretty mt-7"
                        }
                    >
                        {inSpanish
                            ? "He desempeñado roles como Junior Full Stack y desarrollador backend en una empresa enfocada en servicios financieros de préstamos, además de haber creado páginas web como Freelancer."
                            : "I have worked in roles such as Junior Full Stack and backend developer at a company focused on financial loan services, in addition to having created websites as a freelancer."}
                    </p>
                    <p
                        className={
                            "text-[13px] xss:text-[13px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-text text-center text-pretty mt-7"
                        }
                    >
                        {inSpanish
                            ? "Además de mi experiencia laboral, cuento con una licenciatura en Ingeniería en Sistemas Computacionales de la Universidad de Guanajuato."
                            : "In addition to my work experience, I hold a Bachelor's degree in Computer Systems Engineering from the University of Guanajuato."}
                    </p>
                </div>
            </div>
        </div>
    );
};
