import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NavbarButtonTheme } from "./NavbarButtonTheme";

export const NavbarMain = () => {
    return (
        <Navbar maxWidth={"xl"} isBordered={true}>
            <NavbarContent className="pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">PORTAFOLIO</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem>
                    <NavbarButtonTheme />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
