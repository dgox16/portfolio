import { HeaderImage } from "../components/Header/HeaderImage";
import { HeaderTitle } from "../components/Header/HeaderTitle";

export const Header = () => {
    return (
        <div className="flex justify-center pt-[100px] md:pt-[90px] mx-7 xl:mx-0">
            <div className="w-[70ch] lg:w-recommend grid items-center  grid-cols-1 gap-8 lg:grid-cols-6">
                <HeaderTitle />
                <HeaderImage />
            </div>
        </div>
    );
};
