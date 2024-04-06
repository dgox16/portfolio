import { TbFileDownload } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useLanguageStore } from "../../../store/languageStore";

export const ButtonDownloadCv = () => {
    const { inSpanish } = useLanguageStore();

    const handleDownload = () => {
        const url = "/Resume-DiegoArmando.pdf";
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "cv.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="flex justify-center lg:justify-normal col-span-2">
            <button
                onClick={handleDownload}
                type="button"
                className="w-4/5 lg:w-full text-base hover:scale-105 transition duration-150 flex items-center justify-center font-display text-xl font-bold rounded-xl h-12 bg-gradient-to-tr from-blue via-mauve to-pink"
            >
                <IconContext.Provider value={{ size: "20" }}>
                    <div className="mr-1">
                        <TbFileDownload />
                    </div>
                </IconContext.Provider>
                <p className="text-[15px]">{inSpanish ? "Descargar CV" : "Download CV"}</p>
            </button>
        </div>
    );
};
