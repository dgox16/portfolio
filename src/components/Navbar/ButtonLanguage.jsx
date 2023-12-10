import { Button } from "@nextui-org/react";
import ReactCountryFlag from "react-country-flag";
import { useLanguageStore } from "../../store/languageStore";

export const ButtonLanguage = () => {
    const { inSpanish, changeLanguage } = useLanguageStore();
    return (
        <Button
            color={inSpanish ? "secondary" : "danger"}
            variant="flat"
            isIconOnly={true}
            title="ChangeLanguage"
            onClick={() => {
                changeLanguage();
            }}
        >
            {inSpanish ? (
                <ReactCountryFlag
                    countryCode="GB"
                    svg={true}
                    style={{
                        width: "1.7em",
                        height: "1.7em",
                    }}
                    title="English"
                />
            ) : (
                <ReactCountryFlag
                    countryCode="ES"
                    svg={true}
                    style={{
                        width: "1.7em",
                        height: "1.7em",
                    }}
                    title="Español"
                />
            )}
        </Button>
    );
};
