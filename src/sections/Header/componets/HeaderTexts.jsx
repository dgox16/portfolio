export const TextTitleHeader = ({ children }) => {
    return (
        <p
            className={
                "text-[27px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-display font-bold"
            }
        >
            {children}
        </p>
    );
};

export const TextTitleGradientHeader = ({ children }) => {
    return (
        <p className="text-[27px] sm:text-[40px] whitespace-pre-wrap bg-gradient-to-r from-lavender-700 via-lavender-500 to-red-200 dark:from-pink-600 dark:via-red-600 dark:to-yellow-400 text-transparent bg-clip-text bg-300% animate-gradient md:text-[50px] lg:text-[60px] font-display font-bold">
            {children}
        </p>
    );
};
