import { HeaderTitle } from "./componets/HeaderTitle";
import { HeaderImage } from "./componets/HeaderImage";

export const HeaderMain = () => {
    return (
        <div className="flex justify-center mt-[10px] md:mt-[70px]">
            <div className="w-recommend grid items-center grid-cols-1 gap-8 lg:grid-cols-6">
                <HeaderTitle />
                <HeaderImage />
            </div>
        </div>
    );
};
