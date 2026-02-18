import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"



function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
      <Hero/>
      <Skills/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App