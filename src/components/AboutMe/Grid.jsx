import { useLanguageStore } from "../../store/languageStore";
import { ElementGrid } from "./ElementGrid";
import { TbCode, TbStarFilled, TbSchool } from "react-icons/tb";

export const Grid = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="flex justify-center m-12 mx-7 xl:mx-0">
            <div className="w-full md:w-[81.3ch]">
                <div className="gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2">
                    <ElementGrid colorStyle={1} headElement={"1+"}>
                        {inSpanish
                            ? "Más de un año de experiencia laboral en el Desarollo Web con tecnologías como Django, JavaScript y Bootstrap ."
                            : "More than one year of work experience in Web Development with technologies such as Django,JavaScript and Bootstrap."}
                    </ElementGrid>
                    <ElementGrid colorStyle={2} headElement={<TbSchool />}>
                        {inSpanish
                            ? "Egresado en la Licenciatura en Ingeniería en Sistemas Computacionales en la Universidad de Guanajuato."
                            : "Graduated with a Bachelor's degree in Computer Systems Engineering from the University of Guanajuato."}
                    </ElementGrid>
                </div>
            </div>
        </div>
    );
};
