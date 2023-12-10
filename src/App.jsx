import { AboutMe } from "./sections/AboutMe";
import { Header } from "./sections/Header";
import { NavbarMain } from "./sections/Navbar";
import { SeparatorSection } from "./sections/SeparatorSection";
import { Skills } from "./sections/Skills";
import { useThemeStore } from "./store/themeStore";

function App() {
    const { darkMode } = useThemeStore();

    return (
        <main
            className={
                darkMode ? "dark text-foreground bg-background" : "text-foreground bg-background"
            }
        >
            <NavbarMain />
            <Header />
            <SeparatorSection />
            <Skills />
            <SeparatorSection />
            <AboutMe />
        </main>
    );
}

export default App;
