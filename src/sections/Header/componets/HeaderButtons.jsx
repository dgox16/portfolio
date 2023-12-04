import { Button } from "@nextui-org/react";
import { DownloadIcon } from "../../../assets/icons/DownloadIcon";
import { useLanguageStore } from "../../../store/languageStore";

export const HeaderButtons = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <div className="mt-3 flex justify-center lg:justify-normal">
            <Button
                className="mr-4 bg-gradient-to-tr from-primary-100 to-primary-50 text-black"
                startContent={<DownloadIcon />}
            >
                {inSpanish ? "Descargar CV" : "Download CV"}
            </Button>
            <Button color="primary" variant="bordered" startContent={<DownloadIcon />}>
                Bordered
            </Button>
        </div>
    );
};
