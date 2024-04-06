export const ProjectCardFooter = ({ link, github }) => {
    return (
        <div className="flex justify-center items-end mt-5">
            <footer className="flex justify-center gap-x-4">
                {github && (
                    <a
                        type="button"
                        className="w-24 hover:scale-105 transition duration-150 rounded-xl h-10 flex justify-center text-text items-center bg-crust border-2 border-text font-medium"
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
                        className="w-24 hover:scale-105 transition duration-150 rounded-xl h-10 flex justify-center text-text items-center bg-crust border-2 border-text font-medium"
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
