import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Switch } from "@nextui-org/react";

export const NavbarMain = () => {
    return (
        <Navbar maxWidth={"xl"} isBordered>
            <NavbarContent className="pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">PORTAFOLIO</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Switch defaultSelected color="primary" />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
