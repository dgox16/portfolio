import { useLanguageStore } from "../../store/languageStore";

export const AboutMeTitle = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="flex justify-center mx-7 xl:mx-0 mb-7 md:mb-16">
            <div className="w-full md:w-[70ch] lg:w-[130ch]">
                <p
                    className={
                        "text-[22px] xs:text-[25px] text-text text-center sm:text-[30px] md:text-[37px] lg:text-[43px] font-display font-bold"
                    }
                >
                    {inSpanish ? "Acerca de Mí" : "About Me"}
                </p>
                <div className="flex justify-center">
                    <p
                        className={
                            "text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] text-subtext1 text-center font-medium w-full lg:w-2/3 text-pretty"
                        }
                    >
                        {inSpanish
                            ? "Soy un joven entusiasta de la tecnología. Tengo 24 años y soy de México 🇲🇽. Llevo desde niño amando la informática y mi sueño siempre ha sido ser programador y vivir de ello. Trabajar y aprender de algo que te encanta lo hace todo más sencillo."
                            : "I'm an enthusiastic technology enthusiast. I'm 24 years old and I am from Mexico 🇲🇽. I have loved computer science since I was a child, and my dream has always been to be a programmer and make a living from it. Working and learning from something you love makes everything easier."}
                    </p>
                </div>
            </div>
        </div>
    );
};
