export const ElementGrid = ({ children, headElement, colorStyle }) => {
    const st = {
        1: "bg-blue",
        2: "bg-green",
        3: "bg-purple",
        4: "bg-blue",
    };

    const styles = `w-16 h-16 md:w-20 md:h-20 mb-7 ${st[colorStyle]} text-base rounded-full flex justify-center m-auto items-center text-center font-bold text-3xl md:text-5xl shadow-xl`;
    return (
        <div className="flex justify-center flex-col">
            <div className={styles}>{headElement}</div>
            <div className="flex justify-center">
                <p className={"text-center w-[82%] text-subtext1 font-medium md:w-full"}>
                    {children}
                </p>
            </div>
        </div>
    );
};
