import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiAstro, SiSupabase } from "react-icons/si";

export const tags = {
    react: {
        name: "React JS",
        icon: <FaReact />,
        color: "bg-blue",
    },
    tailwind: {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "bg-sapphire",
    },
    mongo: {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "bg-green",
    },
    express: {
        name: "ExpressJS",
        icon: <SiExpress />,
        color: "bg-text",
    },
    astro: {
        name: "Astro",
        icon: <SiAstro />,
        color: "bg-red",
    },
    supabase: {
        name: "Supabase",
        icon: <SiSupabase />,
        color: "bg-green",
    },
};
