import { Image } from "@nextui-org/react";
import photo from "../../../assets/images/photo.avif";

export const HeaderImage = () => {
    return (
        <div className=" flex justify-center lg:justify-normal col-span-1 lg:col-span-2 order-first lg:order-last">
            <Image isZoomed={true} width={900} alt="NextUI hero Image" src={photo} />
        </div>
    );
};
