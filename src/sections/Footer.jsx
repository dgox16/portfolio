import { useLanguageStore } from "../store/languageStore";

export const Footer = () => {
    const { inSpanish } = useLanguageStore();
    return (
        <div className="bg-crust flex justify-center">
            <div className=" w-recommend text-center">
                <p className="py-2 text-subtext1 text-[12px] sm:text-[14px]">
                    © 2024 Diego Armando Gómez Martínez.{" "}
                    <span className="hidden sm:inline"> | </span>
                    <br aria-hidden={true} className="block sm:hidden" />{" "}
                    {inSpanish
                        ? "Casi todos los derechos reservados."
                        : "Almost all rights reserved."}
                </p>
            </div>
        </div>
    );
};
