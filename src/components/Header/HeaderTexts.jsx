export const TextTitleHeader = ({ children }) => {
    return (
        <h1
            className={
                "text-[22px] xs:text-[28px] sm:text-[40px] md:text-[50px] lg:text-[45px] xl:text-[55px] font-extrabold text-text"
            }
        >
            {children}
        </h1>
    );
};

export const TextTitleGradientHeader = ({ children }) => {
    return (
        <h1 className="text-[22px] xs:text-[28px] sm:text-[40px] whitespace-pre-wrap bg-gradient-to-tr from-blue via-mauve to-pink text-transparent bg-clip-text md:text-[50px] lg:text-[45px] xl:text-[55px] font-extrabold">
            {children}
        </h1>
    );
};
