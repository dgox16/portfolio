import { useLanguageStore } from "../../../store/languageStore";
import { HeaderButtons } from "./HeaderButtons";
import { TextTitleGradientHeader, TextTitleHeader } from "./HeaderTexts";

export const HeaderTitle = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="col-span-1  lg:col-span-4 lg:mx-0 ">
            <div className="flex flex-row  justify-center lg:justify-normal">
                <TextTitleHeader fontSizeLg={"60"} fontSizeMd={"40"} fontSize={20}>
                    {inSpanish ? "Soy" : "I'm"}
                </TextTitleHeader>
                <TextTitleGradientHeader fontSizeLg={60} fontSizeMd={40} fontSize={20}>
                    {" "}
                    Diego Armando,
                </TextTitleGradientHeader>
            </div>
            <div className="flex flex-row justify-center lg:justify-normal">
                <TextTitleHeader fontSizeLg={60} fontSizeMd={40} fontSize={20}>
                    {inSpanish ? "programador" : "fullstack"}
                </TextTitleHeader>
                <TextTitleGradientHeader fontSizeLg={90} fontSizeMd={40} fontSize={20}>
                    {inSpanish ? " fullstack." : " developer."}
                </TextTitleGradientHeader>
            </div>
            <p className="text-[17px] sm:text-[19px] md:text-[22px] dark:text-gray-300 text-gray-600 mt-2 text-center lg:text-left">
                {inSpanish
                    ? "Diseño y creo aplicaciones funcionales y hermosas con pasión y enfoque en la experiencia del usuario y la alta calidad."
                    : "I design and create functional and beautiful applications with passion and a focus on user experience and high quality."}
            </p>
            <HeaderButtons />
        </div>
    );
};
