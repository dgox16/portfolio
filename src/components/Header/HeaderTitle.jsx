import { useLanguageStore } from "../../store/languageStore";
import { HeaderButtons } from "./HeaderButtons";
import { TextTitleGradientHeader, TextTitleHeader } from "./HeaderTexts";

export const HeaderTitle = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="col-span-1  lg:col-span-4 lg:mx-0">
            <div className="flex flex-row  justify-center lg:justify-normal">
                <TextTitleHeader>{inSpanish ? "Soy" : "I'm"}</TextTitleHeader>
                <TextTitleGradientHeader> Diego Armando,</TextTitleGradientHeader>
            </div>
            <div className="flex flex-row justify-center lg:justify-normal">
                <TextTitleHeader>{inSpanish ? "programador" : "fullstack"}</TextTitleHeader>
                <TextTitleGradientHeader>
                    {inSpanish ? " fullstack" : " developer"}
                </TextTitleGradientHeader>
            </div>
            <p className="text-[14px] xss:text-[14px] xs:text-[16px] sm:text-[19px] md:text-[22px] lg:text-[18px] xl:text-[22px] text-subtext1 mt-2 text-center lg:text-left font-medium pr-0 lg:pr-20 text-pretty">
                {inSpanish
                    ? "Diseño y creo aplicaciones funcionales y hermosas con pasión y enfoque en la experiencia del usuario y la alta calidad."
                    : "I design and create functional and beautiful applications with passion and a focus on user experience and high quality."}
            </p>
            <HeaderButtons />
        </div>
    );
};
