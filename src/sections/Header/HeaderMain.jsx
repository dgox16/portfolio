import { HeaderImage } from "./componets/HeaderImage";
import { HeaderTitle } from "./componets/HeaderTitle";

export const HeaderMain = () => {
    return (
        <div className="flex justify-center mt-[10px] md:mt-[70px] mx-5 xl:mx-0">
            <div className="w-[70ch] lg:w-recommend grid items-center grid-cols-1 gap-8 lg:grid-cols-6">
                <HeaderTitle />
                <HeaderImage />
            </div>
        </div>
    );
};
