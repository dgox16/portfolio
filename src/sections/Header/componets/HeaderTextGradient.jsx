export const HeaderTextGradient = ({ children }) => {
    return (
        <p className="text-[30px] whitespace-pre-wrap font-semibold bg-gradient-to-r from-primary-100 via-primary-50 to-primary-200 text-transparent bg-clip-text bg-300% animate-gradient md:text-[40px] lg:text-[60px]">
            {children}
        </p>
    );
};
