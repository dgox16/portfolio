const styles = {
    green: ["flex-1 h-2 bg-green/50", "flex-1 h-2 bg-green/70", "flex-1 h-2 bg-green"],
    blue: ["flex-1 h-2 bg-blue/50", "flex-1 h-2 bg-blue/70", "flex-1 h-2 bg-blue"],
    yellow: ["flex-1 h-2 bg-yellow/50", "flex-1 h-2 bg-yellow/70", "flex-1 h-2 bg-yellow"],
    red: ["flex-1 h-2 bg-red/50", "flex-1 h-2 bg-red/70", "flex-1 h-2 bg-red"],
    teal: ["flex-1 h-2 bg-teal/50", "flex-1 h-2 bg-teal/70", "flex-1 h-2 bg-teal"],
};

export const TitleText = ({ children, color }) => {
    const stylesArray = styles[color] || [];
    return (
        <div className="w-full mx-auto">
            <div className="text-center ">
                <div className="relative flex flex-col items-center">
                    <h1 className="text-[23px] xss:text-[26px] xs:text-[30px] sm:text-[40px]/[50px] md:text-[50px]/[60px] lg:text-[50px] xl:text-[55px]/[80px] font-bold text-text">
                        {children}
                    </h1>
                    <div className="flex w-24 mb-5 mt-1 md:mb-10 overflow-hidden rounded">
                        {stylesArray.map((item, index) => (
                            <div key={index} className={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
