import { useLanguageStore } from "../../store/languageStore";

export const ButtonLanguage = () => {
    const { inSpanish, changeLanguage } = useLanguageStore();
    return (
        <button
            className="flex hover:scale-110 transition justify-center rounded-xl text-text h-10 w-10 items-center font-semibold"
            type="button"
            title="ChangeLanguage"
            onClick={() => {
                changeLanguage();
            }}
        >
            <p>{inSpanish ? "ENG" : "ESP"}</p>
        </button>
    );
};
