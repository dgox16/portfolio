import { useLanguageStore } from "../../store/languageStore";
import { TitleText } from "../Texts/TitleText";

export const AboutMeTitle = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="flex justify-center mx-7 xl:mx-0 mb-7 md:mb-16" id="about-me">
            <div className="w-full lg:w-recommend">
                <TitleText color={"blue"}>{inSpanish ? "Acerca de Mi" : "About Me"}</TitleText>
                <div className="flex justify-center">
                    <p
                        className={
                            "text-[15px] xs:text-[16px] sm:text-[17px] md:text-[20px] text-subtext1 text-center font-medium text-pretty"
                        }
                    >
                        {inSpanish
                            ? "Soy un joven entusiasta de la tecnología. Tengo 24 años y soy de México. Llevo desde niño amando la informática y mi sueño siempre ha sido ser programador y vivir de ello. Trabajar y aprender de algo que te encanta lo hace todo más sencillo."
                            : "I'm an enthusiastic technology enthusiast. I'm 24 years old and I am from Mexico. I have loved computer science since I was a child, and my dream has always been to be a programmer and make a living from it. Working and learning from something you love makes everything easier."}
                    </p>
                </div>
            </div>
        </div>
    );
};
