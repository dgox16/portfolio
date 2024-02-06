import { TbCode, TbSchool, TbStarFilled } from "react-icons/tb";
import { useLanguageStore } from "../../store/languageStore";
import { ElementGrid } from "./ElementGrid";

export const Grid = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="flex justify-center m-12 mx-7 xl:mx-0">
            <div className="w-full md:w-recommend">
                <div className="gap-5 md:gap-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                    <ElementGrid colorStyle={1} headElement={"1+"}>
                        {inSpanish
                            ? "Más de un año de experiencia laboral en el Desarollo Web con tecnologías como Django y JavaScript."
                            : "More than one year of work experience in Web Development with technologies such as Django and JavaScript."}
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
