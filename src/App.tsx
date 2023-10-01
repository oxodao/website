import Hero from "./pages/hero"
import MainMenu from "./components/main_menu"
import AboutMe from "./pages/about_me"
import Projects from "./pages/projects"
import Footer from "./pages/footer"
import Contact from "./pages/contact"

export default function App() {
  return <>
    <Hero />

    <MainMenu />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
  </>
}
