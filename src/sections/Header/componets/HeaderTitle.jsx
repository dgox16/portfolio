import { HeaderTextGradient } from "./HeaderTextGradient";
import { HeaderText } from "./HeaderText";
import { HeaderButtons } from "./HeaderButtons";

export const HeaderTitle = () => {
    return (
        <div className="col-span-1  lg:col-span-4 mx-7 lg:mx-0 ">
            <div className="flex flex-row  justify-center lg:justify-normal">
                <HeaderText>Soy</HeaderText>
                <HeaderTextGradient> Diego Armando</HeaderTextGradient>
            </div>
            <div className="flex flex-row justify-center lg:justify-normal">
                <HeaderText>programador</HeaderText>
                <HeaderTextGradient> Fullstack.</HeaderTextGradient>
            </div>
            <p className="text-xl dark:text-gray-300 text-gray-600 mt-2 text-center lg:text-left">
                I design and create functional and beautiful applications with passion and a focus
                on user experience and high quality.
            </p>
            <HeaderButtons />
        </div>
    );
};
