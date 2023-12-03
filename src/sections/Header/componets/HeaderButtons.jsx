import { Button } from "@nextui-org/react";
import { DownloadIcon } from "../../../assets/icons/DownloadIcon";

export const HeaderButtons = () => {
    return (
        <div className="mt-3 flex justify-center lg:justify-normal">
            <Button
                className="mr-4 bg-gradient-to-tr from-primary-100 to-primary-50 text-black"
                startContent={<DownloadIcon />}
            >
                Descargar CV
            </Button>
            <Button color="primary" variant="bordered" startContent={<DownloadIcon />}>
                Bordered
            </Button>
        </div>
    );
};
