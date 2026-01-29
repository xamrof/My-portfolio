import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"



function App() {
  return (
    <div>
      <Navbar />
      <main>
      <Hero/>
      <Skills/>
        <section id="projects"><h2> Sección Proyectos (En construcción)</h2></section>
      </main>
    </div>
  )
}

export default App