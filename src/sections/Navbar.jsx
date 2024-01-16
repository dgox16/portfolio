import { useLanguageStore } from "../store/languageStore";
import { ButtonTheme } from "../components/Navbar/ButtonTheme";
import { ButtonLanguage } from "../components/Navbar/ButtonLanguage";

export const NavbarMain = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <nav className="flex justify-center mx-7 xl:mx-0 items-center">
            <div className="w-recommend flex h-16 flex-row justify-between items-center my-auto">
                <p className="font-extrabold text-text">{inSpanish ? "PORTAFOLIO" : "PORTFOLIO"}</p>
                <div className="flex flex-row">
                    <ButtonTheme />
                    <ButtonLanguage />
                </div>
            </div>
        </nav>
    );
};
