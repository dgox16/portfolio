import { HeaderMain } from "./sections/Header/HeaderMain";
import { NavbarMain } from "./sections/Navbar/NavbarMain";
import { useThemeStore } from "./store/themeStore";
import { SeparatorSection } from "./sections/SeparatorSection";
import { SkillsMain } from "./sections/Skills/SkillsMain";

function App() {
    const { darkMode } = useThemeStore();

    return (
        <main
            className={
                darkMode ? "dark text-foreground bg-background" : "text-foreground bg-background"
            }
        >
            <NavbarMain />
            <HeaderMain />
            <SeparatorSection />
            <SkillsMain />
        </main>
    );
}

export default App;
