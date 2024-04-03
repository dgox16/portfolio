import { GridLogos } from "../components/Skills/GridLogos";
import { TitleText } from "../components/Texts/TitleText";
import { useLanguageStore } from "../store/languageStore";

export const Skills = () => {
    const { inSpanish } = useLanguageStore();
    return (
        <div id="skills">
            <TitleText color={"yellow"}>{inSpanish ? "Mis Habilidades" : "My Skills"}</TitleText>
            <GridLogos />
        </div>
    );
};
