import { AboutMeSvg } from "../components/AboutMe/AboutMeSvg";
import { TitleText } from "../components/Texts/TitleText";
import { useScreenSize } from "../hooks/UseSizeWindow";
import { useLanguageStore } from "../store/languageStore";

const AboutMeParagraph = ({ children }) => {
    return (
        <p
            className={
                "text-[13px] xss:text-[13px] xs:text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] text-text text-center lg:text-left text-pretty"
            }
        >
            {children}
        </p>
    );
};

const AboutMeTextBold = ({ children }) => {
    return <span className="font-bold text-blue whitespace-pre-line">{children}</span>;
};

export const AboutMe = () => {
    const { width } = useScreenSize();
    const { inSpanish } = useLanguageStore();

    return (
        <div className="flex justify-center mx-7 xl:mx-0 " id="about-me">
            <div className="w-full lg:w-recommend">
                <TitleText color={"blue"}>{inSpanish ? "Sobre mi" : "About Me"}</TitleText>
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {width >= 1024 && <AboutMeSvg />}
                    <div className="flex flex-col justify-center items-center lg:items-start col-span-2 lg:col-span-2 pl-0 lg:pl-6">
                        <AboutMeParagraph>
                            {inSpanish ? (
                                <span>
                                    Soy un
                                    <AboutMeTextBold> Desarrollador Full Stack</AboutMeTextBold> de
                                    24 años de edad. Mi experiencia abarca tanto el desarrollo
                                    backend utilizando tecnologías como
                                    <AboutMeTextBold>
                                        {" "}
                                        Django, Rust (con Axum), Supabase y Express JS
                                    </AboutMeTextBold>
                                    , como el frontend con{" "}
                                    <AboutMeTextBold>
                                        React, Astro, Tailwind CSS y HTML.
                                    </AboutMeTextBold>{" "}
                                    Tanto en proyectos personales como en el ámbito laboral, he
                                    trabajado con bases de datos tanto relacionales (
                                    <AboutMeTextBold>PostgreSQL, SQLite</AboutMeTextBold>) como no
                                    relacionales (<AboutMeTextBold>MongoDB</AboutMeTextBold>).
                                </span>
                            ) : (
                                <span>
                                    I am a 24-year-old
                                    <AboutMeTextBold> Full Stack Developer.</AboutMeTextBold> My
                                    experience spans both backend development using technologies
                                    such as{" "}
                                    <AboutMeTextBold>
                                        {" "}
                                        Django, Rust (with Axum), Supabase, and Express JS{" "}
                                    </AboutMeTextBold>
                                    as well as frontend with{" "}
                                    <AboutMeTextBold>
                                        React, Astro, Tailwind CSS and HTML.
                                    </AboutMeTextBold>{" "}
                                    In both personal projects and professional settings, I have
                                    worked with both relational databases (
                                    <AboutMeTextBold>PostgreSQL, SQLite</AboutMeTextBold>) and
                                    non-relational databases (
                                    <AboutMeTextBold>MongoDB</AboutMeTextBold>).
                                </span>
                            )}
                        </AboutMeParagraph>
                        <br />
                        <AboutMeParagraph>
                            {inSpanish
                                ? "He desempeñado roles como Junior Full Stack y desarrollador backend en una empresa enfocada en servicios financieros de préstamos, además de haber creado páginas web como Freelancer."
                                : "I have worked in roles such as Junior Full Stack and backend developer at a company focused on financial loan services, in addition to having created websites as a freelancer."}
                        </AboutMeParagraph>
                        <br />
                        <AboutMeParagraph>
                            {inSpanish ? (
                                <span>
                                    Además de mi experiencia laboral, cuento con una{" "}
                                    <AboutMeTextBold>
                                        licenciatura en Ingeniería en Sistemas Computacionales
                                    </AboutMeTextBold>{" "}
                                    de la Universidad de Guanajuato.
                                </span>
                            ) : (
                                <span>
                                    In addition to my work experience, I hold a{" "}
                                    <AboutMeTextBold>
                                        Bachelor's degree in Computer Systems Engineering{" "}
                                    </AboutMeTextBold>{" "}
                                    from the University of Guanajuato.{" "}
                                </span>
                            )}
                        </AboutMeParagraph>
                    </div>
                </div>
            </div>
        </div>
    );
};
