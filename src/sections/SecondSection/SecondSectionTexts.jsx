export const TextTitleSc = ({ children }) => {
    return (
        <p
            className={
                "text-[25px] text-center md:text-[30px] lg:text-[40px] font-medium font-display"
            }
        >
            {children}
        </p>
    );
};

export const TextTitleGradientSc = ({ children }) => {
    return (
        <p className="text-[25px] text-center whitespace-pre-wrap bg-gradient-to-r from-primary-100 via-primary-50 to-primary-200 text-transparent bg-clip-text bg-300% animate-gradient md:text-[30px] lg:text-[40px] font-medium font-display">
            {children}
        </p>
    );
};
