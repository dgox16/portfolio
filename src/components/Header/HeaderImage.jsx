import photo from "../../assets/images/myPhoto.avif";

export const HeaderImage = () => {
    return (
        <div className=" flex justify-center lg:justify-normal col-span-1 lg:col-span-2 order-first lg:order-last">
            <div className="w-[500px] lg:w-[900px]">
                <img alt="Diego Armando" className="rounded-2xl" src={photo} />
            </div>
        </div>
    );
};
