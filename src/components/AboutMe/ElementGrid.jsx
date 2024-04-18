export const ElementGrid = ({ children, headElement, colorStyle }) => {
    const st = {
        1: "bg-blue",
        2: "bg-green",
        3: "bg-purple",
        4: "bg-blue",
    };

    const styles = `w-16 h-16 md:w-20 md:h-20 mb-4 sm:mb-7 ${st[colorStyle]} text-mantle rounded-full flex justify-center m-auto items-center text-center font-bold text-2xl md:text-5xl shadow-xl`;
    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center">
                <div className={styles}>{headElement}</div>
            </div>
            <div className="flex justify-center">
                <p
                    className={
                        "text-center w-full text-subtext1 text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] md:w-[80%]"
                    }
                >
                    {children}
                </p>
            </div>
        </div>
    );
};
