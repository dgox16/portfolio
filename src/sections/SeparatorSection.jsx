import { Divider } from "@nextui-org/react";

export const SeparatorSection = () => {
    return (
        <div className="flex justify-center">
            <Divider className="w-recommend my-6 md:my-24 " />
        </div>
    );
};

export const SeparatorSc = () => {
    return (
        <div className="flex justify-center lg:justify-normal">
            <Divider className="w-2/3 md:w-4/5 my-1 md:my-2 " />
        </div>
    );
};
