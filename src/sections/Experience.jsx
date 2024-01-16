import { ExperienceTitle } from "../components/Experience/ExperienceTitle";
import { useLanguageStore } from "../store/languageStore";

export const Experience = () => {
    const { inSpanish } = useLanguageStore();
    return (
        <>
            <section className="items-center">
                <div className="flex items-center flex-col justify-center mx-7 lg:py-8 lg:px-6">
                    <ExperienceTitle />
                    <div className="mx-auto my-2 w-full lg:w-[80ch]">
                        <div className="relative flex justify-between">
                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                <div>
                                    <div className="flex items-center justify-center w-8 h-8 bg-green/50 rounded-full ">
                                        <div className="w-4 h-4 bg-green rounded-full" />
                                    </div>
                                </div>
                                <div className="w-1 h-3/4 bg-green/50" />
                            </div>
                            <div>
                                <h2 className="inline-block px-4 py-2 mb-4 font-medium bg-green rounded-3xl text-base text-xs xs:text-base">
                                    {inSpanish
                                        ? "Octubre 2022 - Actualidad"
                                        : "October 2022 - Current"}
                                </h2>
                                <div className="relative flex-1 mb-10 bg-mantle shadow rounded-3xl">
                                    <div className="relative z-20 p-4">
                                        <p className="mb-2 text-xl font-bold text-text hidden sm:block">
                                            {inSpanish
                                                ? "Desarrollador Fullstack - SICAP VIP"
                                                : "Fullstack developer - SICAP VIP"}
                                        </p>

                                        <p className="text-sm xs:text-[1rem] font-bold text-text block sm:hidden">
                                            {inSpanish
                                                ? "Desarrollador Fullstack"
                                                : "Fullstack developer"}
                                        </p>
                                        <p className="mb-2 text-sm xs:text-[1rem] font-medium text-text block sm:hidden">
                                            SICAP VIP
                                        </p>
                                        <p className="text-sm xs:text-[1rem] text-subtext1">
                                            {inSpanish
                                                ? "Desarrollo y actualizo tecnologías de aplicaciones web enfocadas al área de préstamos. Para este trabajo contribuyo como programador backend en Django y Sqlite3; mientras que uso Bootstrap y Vanilla JS para frontend."
                                                : "I develop and update web application technologies focused on the loan sector. For this job, I contribute as a backend programmer in Django and Sqlite3, while using Bootstrap and Vanilla JS for the frontend."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
