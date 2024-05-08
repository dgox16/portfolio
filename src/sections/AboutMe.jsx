import { TitleText } from "../components/Texts/TitleText";
import { useLanguageStore } from "../store/languageStore";

export const AboutMe = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="flex justify-center mx-7 xl:mx-0 mb-8 md:mb-16" id="about-me">
            <div className="w-full lg:w-recommend">
                <TitleText color={"blue"}>{inSpanish ? "Sobre mi" : "About Me"}</TitleText>
                <div className="flex flex-col justify-center items-center">
                    <p
                        className={
                            "w-full lg:w-[75ch] text-[13px] xss:text-[13px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-text text-center text-pretty"
                        }
                    >
                        {inSpanish
                            ? "Soy un desarrollador Full Stack de 24 años de edad. Mi experiencia abarca tanto el desarrollo backend utilizando tecnologías como Django, Rust (con Axum), Supabase y Express JS, como el frontend con React, Astro, Tailwind CSS y HTML. Tanto en proyectos personales como en el ámbito laboral, he trabajado con bases de datos tanto relacionales (PostgreSQL, SQLite) como no relacionales (MongoDB)."
                            : "I am a 24-year-old Full Stack developer. My experience spans both backend development using technologies such as Django, Rust (with Axum), Supabase, and Express JS, as well as frontend with React, Astro, Tailwind CSS, and HTML. In both personal projects and professional settings, I have worked with both relational databases (PostgreSQL, SQLite) and non-relational databases (MongoDB)."}
                    </p>
                    <p
                        className={
                            "w-full lg:w-[75ch] text-[13px] xss:text-[13px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-text text-center text-pretty mt-4 md:mt-7"
                        }
                    >
                        {inSpanish
                            ? "He desempeñado roles como Junior Full Stack y desarrollador backend en una empresa enfocada en servicios financieros de préstamos, además de haber creado páginas web como Freelancer."
                            : "I have worked in roles such as Junior Full Stack and backend developer at a company focused on financial loan services, in addition to having created websites as a freelancer."}
                    </p>
                    <p
                        className={
                            "w-full lg:w-[75ch] text-[13px] xss:text-[13px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] text-text text-center text-pretty mt-4 md:mt-7"
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
