export const TextTitleHeader = ({ children }) => {
    return (
        <h1
            className={
                "text-[23px] xss:text-[26px] xs:text-[30px] sm:text-[40px]/[50px] md:text-[50px]/[60px] lg:text-[50px] xl:text-[55px]/[80px] font-extrabold text-text"
            }
        >
            {children}
        </h1>
    );
};

export const TextTitleGradientHeader = ({ children }) => {
    return (
        <h1 className="text-[23px] xss:text-[26px] xs:text-[30px] sm:text-[40px]/[50px] md:text-[50px]/[60px] lg:text-[50px] xl:text-[55px]/[80px] whitespace-pre-wrap bg-gradient-to-tr from-blue via-mauve to-pink text-transparent bg-clip-text  font-extrabold">
            {children}
        </h1>
    );
};
