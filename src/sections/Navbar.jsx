import { useLanguageStore } from "../store/languageStore";
import { ButtonTheme } from "../components/Navbar/ButtonTheme";
import { ButtonLanguage } from "../components/Navbar/ButtonLanguage";
import { animateScroll as scroll, Link } from "react-scroll";

export const NavbarMain = () => {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: "easeInOutQuart",
        });
    };

    const { inSpanish } = useLanguageStore();

    const navItems = [
        {
            title: inSpanish ? "Acerca de mi" : "About me",
            label: "about-me",
            url: "about-me",
        },
        {
            title: inSpanish ? "Experiencia" : "Experience",
            label: "experience",
            url: "experience",
        },
        {
            title: inSpanish ? "Proyectos" : "Projects",
            label: "projects",
            url: "projects",
        },
        {
            title: inSpanish ? "Habilidades" : "Skills",
            label: "skills",
            url: "skills",
        },
    ];

    return (
        <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto bg-crust backdrop-blur bg-opacity-80">
            <div className="w-recommend flex h-16 flex-row justify-between items-center mx-7 my-auto">
                <button
                    onClick={() => scrollToTop()}
                    className="font-extrabold text-text"
                    type="button"
                >
                    {inSpanish ? "PORTAFOLIO" : "PORTFOLIO"}
                </button>
                <nav className="hidden md:flex flex-row">
                    {navItems.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            to={link.url}
                            spy={true}
                            offset={-90}
                            smooth={true}
                            duration={500}
                            className="relative block px-2 py-2 text-text font-semibold transition hover:text-lavender"
                            aria-label={link.label}
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <div className="flex flex-row">
                    <ButtonTheme />
                    <ButtonLanguage />
                </div>
            </div>
        </header>
    );
};
