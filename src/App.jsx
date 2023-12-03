import { HeaderMain } from "./sections/Header/HeaderMain";
import { NavbarMain } from "./sections/Navbar/NavbarMain";
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
            <HeaderMain />
            <p>{darkMode}</p>
        </main>
    );
}

export default App;
