export const ProjectCardFooter = ({ link, github }) => {
    return (
        <div className="flex justify-center items-end mt-5">
            <footer className="flex justify-center gap-x-4">
                {github && (
                    <a
                        type="button"
                        className="w-20 sm:w-24 hover:scale-105 transition duration-150 rounded-xl h-9 sm:h-10 flex justify-center sm:text-[16px] text-text items-center bg-crust border-2 border-text font-medium text-sm"
                        href={github}
                        rel="noreferrer"
                        target="_blank"
                        role="link"
                    >
                        Github
                    </a>
                )}
                {link && (
                    <a
                        type="button"
                        className="w-20 sm:w-24 hover:scale-105 transition duration-150 rounded-xl h-9 sm:h-10 flex justify-center sm:text-[16px] text-text items-center bg-crust border-2 border-text font-medium text-sm"
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                        role="link"
                    >
                        Preview
                    </a>
                )}
            </footer>
        </div>
    );
};
