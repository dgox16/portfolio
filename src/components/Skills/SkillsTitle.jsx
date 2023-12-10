import { useLanguageStore } from "../../store/languageStore";

export const SkillsTitle = () => {
    const { inSpanish } = useLanguageStore();
    return (
        <div className="mb-5">
            <div className="flex justify-center mx-7 -mb-2 md:-mb-5 lg:-mb-7 xl:mx-0">
                <div className="w-full md:w-[122ch] text-center lg:text-left">
                    <p
                        className={
                            "text-[20px] sm:text-[25px] md:text-[37px] lg:text-[43px] font-display font-medium"
                        }
                    >
                        {inSpanish ? "Habilidades de" : "Skills"}
                    </p>
                </div>
            </div>
            <div className="flex justify-center mx-7 xl:mx-0">
                <div className="w-full md:w-[122ch] text-center lg:text-left">
                    <p className="text-[20px] sm:text-[25px] md:text-[37px] lg:text-[43px] font-display font-medium text-lavender-500 dark:text-red-400">
                        {inSpanish ? "Programación" : "Programming"}
                    </p>
                </div>
            </div>
        </div>
    );
};
