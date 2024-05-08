import { useLanguageStore } from "../../store/languageStore";
import { TitleText } from "../Texts/TitleText";

export const AboutMeTitle = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="flex justify-center mx-7 xl:mx-0 mb-8 md:mb-16" id="about-me">
            <div className="w-full lg:w-recommend">
                <TitleText color={"blue"}>{inSpanish ? "Sobre mi" : "About Me"}</TitleText>
                <div className="flex flex-col justify-center">
                    <p
                        className={
                            "text-[14px] xss:text-[14px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-text text-center text-pretty"
                        }
                    >
                        {inSpanish
                            ? "Soy un desarrollador Full Stack de 24 años de edad. Mi experiencia abarca tanto el desarrollo backend utilizando tecnologías como Django, Rust (con Axum), Supabase y Express JS, como el frontend con React, Astro, Tailwind CSS y HTML. Tanto en proyectos personales como en el ámbito laboral, he trabajado con bases de datos tanto relacionales (PostgreSQL, SQLite) como no relacionales (MongoDB)."
                            : "I'm an enthusiastic technology enthusiast. I'm 24 years old and I am from Mexico. I have loved computer science since I was a child, and my dream has always been to be a programmer and make a living from it. Working and learning from something you love makes everything easier."}
                    </p>
                    <p
                        className={
                            "text-[14px] xss:text-[14px] xs:text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-text text-center text-pretty mt-7"
                        }
                    >
                        He desempeñado roles como Junior Full Stack y desarrollador backend en una
                        empresa enfocada en servicios financieros de préstamos, además de haber
                        creado páginas web como Freelancer. Además de mi experiencia laboral, cuento
                        con una licenciatura en Ingeniería en Sistemas Computacionales de la
                        Universidad de Guanajuato.
                    </p>
                </div>
            </div>
        </div>
    );
};
