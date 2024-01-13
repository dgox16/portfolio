import { useLanguageStore } from "../../store/languageStore";

export const SkillsTitle = () => {
    const { inSpanish } = useLanguageStore();
    return (
        <div className="mb-5">
            <div className="flex justify-center mx-7 -mb-4 md:-mb-6 lg:-mb-7 xl:mx-0">
                <div className="w-full md:w-[122ch] text-center lg:text-left">
                    <p
                        className={
                            "text-[25px] sm:text-[30px] md:text-[37px] lg:text-[43px] font-display font-bold text-text"
                        }
                    >
                        {inSpanish ? "Habilidades de" : "Skills"}
                    </p>
                </div>
            </div>
            <div className="flex justify-center mx-7 xl:mx-0">
                <div className="w-full md:w-[122ch] text-center lg:text-left">
                    <p className="text-[25px] sm:text-[30px] md:text-[37px] lg:text-[43px] font-display font-bold text-yellow">
                        {inSpanish ? "Programación" : "Programming"}
                    </p>
                </div>
            </div>
        </div>
    );
};
