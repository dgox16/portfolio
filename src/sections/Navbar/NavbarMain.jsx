import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NavbarButtonTheme } from "./NavbarButtonTheme";
import { NavbarButtonLanguage } from "./NavbarButtonLanguage";
import { useLanguageStore } from "../../store/languageStore";

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
                    <NavbarButtonTheme />
                </NavbarItem>
                <NavbarItem>
                    <NavbarButtonLanguage />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
