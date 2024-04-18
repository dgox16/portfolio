import { ButtonDownloadCv } from "./HeaderButtons/ButtonDownloadCv";
import { ButtonsSocial } from "./HeaderButtons/ButtonsSocial";

export const HeaderButtons = () => {
    return (
        <div className="gap-0 lg:gap-2 xl:gap-4 grid grid-cols-1 lg:grid-cols-9 mt-5">
            <ButtonDownloadCv />
            <ButtonsSocial />
        </div>
    );
};
