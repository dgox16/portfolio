import { IconContext } from "react-icons";
import { useScreenSize } from "../../hooks/UseSizeWindow";

export const ProjectCardTags = ({ tags }) => {
    const { width } = useScreenSize();
    const sizeIcon = width >= 1024 ? "22" : "18";

    return (
        <ul className="flex flex-row mb-1 justify-center gap-x-2">
            {tags.map((tag, i) => (
                <li key={`tag_${i + i}`}>
                    <span
                        className={`flex text-base gap-x-2 rounded-full text-[12px] ${tag.color} p-2 `}
                        title={tag.name}
                    >
                        <IconContext.Provider value={{ size: sizeIcon }}>
                            {tag.icon}
                        </IconContext.Provider>
                    </span>
                </li>
            ))}
        </ul>
    );
};
