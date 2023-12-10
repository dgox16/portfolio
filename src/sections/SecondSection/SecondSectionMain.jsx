import { useLanguageStore } from "../../store/languageStore";
import { SeparatorSc } from "../SeparatorSection";
import { TextTitleGradientSc, TextTitleSc } from "./SecondSectionTexts";

export const SecondSectionMain = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="flex justify-center">
            <div className="w-recommend grid items-center grid-cols-1 gap-8 lg:grid-cols-6">
                <div className="col-span-1 lg:col-span-3 mx-7 lg:mx-0">
                    <div className="flex flex-row text-center justify-center lg:justify-normal ">
                        <TextTitleSc fontSizeLg={"40"} fontSizeMd={"30"} fontSize={"20"}>
                            {inSpanish ? "Acerca de" : "About"}
                        </TextTitleSc>
                        <TextTitleGradientSc fontSizeLg={"40"} fontSizeMd={"30"} fontSize={"20"}>
                            {inSpanish ? " Mi" : " Me"}
                        </TextTitleGradientSc>
                    </div>
                    <SeparatorSc />
                    <div className="flex justify-center md:justify-normal">
                        <p className="text-center md:text-left w-[80%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
                            tincidunt lectus. Sed ut sapien at augue aliquam ultrices vitae id
                            mauris. Ut in maximus lectus, et molestie odio. Nunc ut ligula.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-3 mx-7 lg:ml-[6rem]">
                    <div className="flex flex-row text-center justify-center lg:justify-normal ">
                        <TextTitleSc fontSizeLg={"40"} fontSizeMd={"30"} fontSize={"20"}>
                            {inSpanish ? "Mis" : "My"}
                        </TextTitleSc>
                        <TextTitleGradientSc fontSizeLg={"40"} fontSizeMd={"30"} fontSize={"20"}>
                            {inSpanish ? " Metas" : " Goals"}
                        </TextTitleGradientSc>
                    </div>
                    <SeparatorSc />
                    <div className="flex justify-center md:justify-normal">
                        <p className="text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
                            tincidunt lectus. Sed ut sapien at augue aliquam ultrices vitae id
                            mauris. Ut in maximus lectus, et molestie odio. Nunc ut ligula.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
