import { IconContext } from "react-icons";

export const ProjectCardTags = ({ tags }) => {
    return (
        <ul className="flex flex-row mb-1 justify-center gap-x-2">
            {tags.map((tag, i) => (
                <li key={`tag_${i + i}`}>
                    <span
                        className={`flex text-base gap-x-2 rounded-full text-[12px] ${tag.color} p-2 `}
                        title={tag.name}
                    >
                        <IconContext.Provider value={{ size: "22" }}>
                            {tag.icon}
                        </IconContext.Provider>
                    </span>
                </li>
            ))}
        </ul>
    );
};
