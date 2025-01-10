import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="dark:bg-black/90 md:py-4 p-2 overflow-x-clip space-grotesk">
    <Navbar />
    <Hero/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App
