import { motion } from "framer-motion";

export const ProjectCardFooter = ({ link, github }) => {
    return (
        <footer className="flex items-end justify-center mt-5 gap-x-4">
            {github && (
                <motion.a
                    whileHover={{
                        scale: 1.06,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="w-24 rounded-xl h-10 flex justify-center text-text items-center bg-crust border-2 border-text"
                    href={github}
                    role="link"
                >
                    Github
                </motion.a>
            )}
            {link && (
                <motion.a
                    whileHover={{
                        scale: 1.06,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="w-24 rounded-xl h-10 flex justify-center text-text items-center bg-crust border-2 border-text"
                    href={link}
                    role="link"
                >
                    Preview
                </motion.a>
            )}
        </footer>
    );
};
