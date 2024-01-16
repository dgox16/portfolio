import { AboutMe } from "./sections/AboutMe";
import { Header } from "./sections/Header";
import { NavbarMain } from "./sections/Navbar";
import { SeparatorSection } from "./sections/SeparatorSection";
import { Skills } from "./sections/Skills";
import "@fontsource-variable/onest";

function App() {
    return (
        <div className="dark:mocha bg-base latte">
            <header>
                <NavbarMain />
                <Header />
                <SeparatorSection />
            </header>
            <main>
                <AboutMe />
                <SeparatorSection />
                <Skills />
            </main>
        </div>
    );
}

export default App;
