import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useLanguageStore } from "../store/languageStore";
import { ButtonTheme } from "../components/Navbar/ButtonTheme";
import { ButtonLanguage } from "../components/Navbar/ButtonLanguage";

export const NavbarMain = () => {
    const { inSpanish } = useLanguageStore();

    return (
        <Navbar maxWidth={"xl"} isBordered={true}>
            <NavbarContent className="pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">
                        {inSpanish ? "PORTAFOLIO" : "PORTFOLIO"}
                    </p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem>
                    <ButtonTheme />
                </NavbarItem>
                <NavbarItem>
                    <ButtonLanguage />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
