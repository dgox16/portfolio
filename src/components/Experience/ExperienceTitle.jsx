import { motion } from "framer-motion";
import { useLanguageStore } from "../../store/languageStore";

export const ExperienceTitle = () => {
    const { inSpanish } = useLanguageStore();
    return (
        <motion.div
            className="max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
        >
            <div className="text-center ">
                <div className="relative flex flex-col items-center">
                    <h1 className="text-[25px] sm:text-[30px] md:text-[37px] lg:text-[43px] font-bold text-text">
                        {inSpanish ? "Experiencia Laboral" : "Work experience"}
                    </h1>
                    <div className="flex w-24 mt-1 mb-3 md:mb-0 overflow-hidden rounded">
                        <div className="flex-1 h-2 bg-green/50" />
                        <div className="flex-1 h-2 bg-green/70" />
                        <div className="flex-1 h-2 bg-green" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
