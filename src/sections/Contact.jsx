import { IconContext } from "react-icons";
import { TbMail } from "react-icons/tb";
import { TitleText } from "../components/Texts/TitleText";
import { useLanguageStore } from "../store/languageStore";
import { useScreenSize } from "../hooks/UseSizeWindow";

export const Contact = () => {
    const { inSpanish } = useLanguageStore();
    const { width } = useScreenSize();

    const sizeIcon = width > 768 ? 40 : width > 350 ? 30 : 23;

    return (
        <div className="flex justify-center items-center flex-col">
            <TitleText color={"teal"}>{inSpanish ? "Contacto" : "Contact"}</TitleText>
            <p className="w-[26ch] sm:w-[40ch] text-center text-subtext1 font-medium text-[16px] xs:text-[18px] sm:text-xl">
                {inSpanish
                    ? "Estoy abierto a cualquier oportunidad y/o propuesta. No dudes en contactarme y compartirme cualquiera de tus ideas, que me pondré en contacto contigo lo antes posible."
                    : "I'm open to any opportunity and/or proposal. Feel free to contact me and share any of your ideas, and I'll get back to you as soon as possible."}
            </p>
            <a className="flex justify-center mt-10 mb-2" href="mailto:dgox16@gmail.com">
                <button
                    type="button"
                    className=" w-64 xs:w-72 sm:w-96 p-8 text-base flex items-center justify-center font-display font-bold rounded-xl h-12 bg-gradient-to-tr from-green via-teal to-sapphire hover:scale-105 transition duration-150"
                >
                    <IconContext.Provider value={{ size: sizeIcon }}>
                        <div className="mr-3">
                            <TbMail />
                        </div>
                    </IconContext.Provider>
                    <p className="text-[19px] xs:text-[20px] md:text-[30px]">
                        {inSpanish ? "Vamos a hablar!" : "Let's Talk!"}
                    </p>
                </button>
            </a>
            <a
                href="https://wa.me/524451312061"
                className="text-teal font-semibold mb-10 hover:brightness-125"
            >
                {inSpanish ? "O contáctame por WhatsApp." : "Or contact me via WhatsApp."}
            </a>
        </div>
    );
};
