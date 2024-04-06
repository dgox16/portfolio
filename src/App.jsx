import { AboutMe } from "./sections/AboutMe";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { NavbarMain } from "./sections/Navbar";
import { Projects } from "./sections/Projects";
import { SeparatorSection } from "./sections/SeparatorSection";
import { Skills } from "./sections/Skills";
import "@fontsource-variable/onest";

function App() {
    return (
        <div className="dark:mocha bg-base latte transition duration-0 ">
            <header>
                <NavbarMain />
                <Header />
                <SeparatorSection />
            </header>
            <main>
                <AboutMe />
                <SeparatorSection />
                <Experience />
                <SeparatorSection />
                <Projects />
                <SeparatorSection />
                <Skills />
                <SeparatorSection />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default App;
