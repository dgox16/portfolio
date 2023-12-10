import { Card, CardBody } from "@nextui-org/react";
import { TextTitleGradientHeader } from "../Header/componets/HeaderTexts";
import {
    CssIcon,
    DjangoIcon,
    DockerIcon,
    ExpressIcon,
    GitIcon,
    HandlebarsIcon,
    HtmlIcon,
    JavascriptIcon,
    LinuxIcon,
    LuaIcon,
    MongoIcon,
    MySqlIcon,
    NodeIcon,
    PythonIcon,
    ReactIcon,
    TailwindIcon,
    ViteIcon,
} from "../../assets/icons/LogoIcons";

export const SkillsMain = () => {
    const listIcons = [
        JavascriptIcon,
        ReactIcon,
        HtmlIcon,
        CssIcon,
        NodeIcon,
        MongoIcon,
        DjangoIcon,
        ExpressIcon,
        MySqlIcon,
        DockerIcon,
        TailwindIcon,
        PythonIcon,
        GitIcon,
        HandlebarsIcon,
        ViteIcon,
        LinuxIcon,
        LuaIcon,
    ];
    return (
        <>
            <div className="flex justify-center">
                <TextTitleGradientHeader>Skills Programming</TextTitleGradientHeader>
            </div>
            <div className="flex justify-center mx-7 xl:mx-0">
                <Card className="w-full md:w-[122ch] bg-white">
                    <CardBody>
                        <div className="gap-4 grid grid-cols-4 md:grid-cols-5">
                            {/* biome-ignore lint/style/useNamingConvention: <explanation> */}
                            {listIcons.map((Icon, index) => (
                                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                <div key={index} className="flex justify-center mt-4">
                                    <Icon />
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};
