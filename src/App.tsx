import Hero from "./components/Hero"
import Navbar from "./components/Navbar"



function App() {
  return (
    <div>
      <Navbar />
      <main>
      <Hero/>
        <section id="hero"><h2>Sección Hero (En construcción)</h2></section>
        <section id="projects"><h2> Sección Proyectos (En construcción)</h2></section>
      </main>
    </div>
  )
}

export default App