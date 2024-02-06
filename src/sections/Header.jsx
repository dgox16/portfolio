import { HeaderImage } from "../components/Header/HeaderImage";
import { HeaderTitle } from "../components/Header/HeaderTitle";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <motion.div
            className="flex justify-center mt-[10px] md:mt-[70px] mx-7 xl:mx-0"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
        >
            <div className="w-[70ch] lg:w-recommend grid items-center  grid-cols-1 gap-8 lg:grid-cols-6">
                <HeaderTitle />
                <HeaderImage />
            </div>
        </motion.div>
    );
};
