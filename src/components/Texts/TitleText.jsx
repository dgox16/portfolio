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
                    <h1 className="text-[21px] xss:text-[24px] xs:text-[28px] sm:text-[35px]/[50px] md:text-[45px]/[60px] lg:text-[45px] xl:text-[50px]/[80px] font-bold text-text">
                        {children}
                    </h1>
                    <div className="flex w-24 mb-5 mt-1 md:mb-10 overflow-hidden rounded">
                        {stylesArray.map((item, index) => (
                            <div key={`line_${index + index}`} className={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
