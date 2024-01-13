export const TextTitleHeader = ({ children }) => {
    return (
        <h1
            className={
                "text-[23px] xs:text-[25px] sm:text-[40px] md:text-[50px] lg:text-[55px] font-display font-bold text-text"
            }
        >
            {children}
        </h1>
    );
};

export const TextTitleGradientHeader = ({ children }) => {
    return (
        <h1 className="text-[23px] xs:text-[25px] sm:text-[40px] whitespace-pre-wrap bg-gradient-to-tr from-mauve to-pink text-transparent bg-clip-text md:text-[50px] lg:text-[55px] font-display font-bold">
            {children}
        </h1>
    );
};
