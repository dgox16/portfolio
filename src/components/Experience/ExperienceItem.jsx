import { useScreenSize } from "../../hooks/UseSizeWindow";

export const ExperienceItem = ({ item }) => {
    const { width } = useScreenSize();
    return (
        <>
            {width >= 1024 ? (
                <div className="relative ml-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-surface2 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]">
                    <div className="relative pb-12 md:col-span-2">
                        <div className="sticky top-0">
                            <span className="text-green -left-[44px] absolute rounded-full text-6xl">
                                &bull;
                            </span>

                            <h3 className="text-xl font-bold text-green">{item.job}</h3>
                            <h4 className="font-semibold text-xl text-text">{item.company}</h4>
                            <time className="p-0 m-0 text-sm text-subtext1">{item.date}</time>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-2 pb-4 text-text md:col-span-3">
                        {item.description}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex justify-center">
                        <div className="bg-green rounded-3xl py-2 px-4 sm:px-6 my-4 sm:my-7 w-fit">
                            <p className="text-[13px] xs:text-[14px] md:text-[19px] font-medium text-crust">
                                {item.date}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className=" bg-mantle p-5 sm:p-6 md:p-8 rounded-2xl">
                            <p className="uppercase text-[19px]/[18px] xss:text-[20px]/[20px] xs:text-[22px]/[22px] sm:text-[24px] md:text-[30px] font-bold text-text text-center sm:text-left text-pretty">
                                {item.job}
                            </p>
                            <p className="text-[14px] xss:text-[16px] xs:text-[17px] sm:text-[19px] md:text-[25px] font-medium text-subtext1 mb-2 md:mb-4 text-center sm:text-left">
                                {item.company}
                            </p>
                            <p className="text-[13px] xss:text-[13px] xs:text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] text-subtext1 text-pretty text-center sm:text-left">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
