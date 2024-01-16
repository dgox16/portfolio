import { GridLogos } from "../components/Skills/GridLogos";
import { SkillsTitle } from "../components/Skills/SkillsTitle";
import { motion } from "framer-motion";

export const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            viewport={{ margin: "0px 0px 200px 0px" }}
        >
            <SkillsTitle />
            <GridLogos />
        </motion.div>
    );
};
