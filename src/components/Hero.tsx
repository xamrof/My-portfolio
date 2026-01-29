import './Hero.css'

function Hero(){
    return(
        <section id="hero" className="hero-container">
            <div className="hero-content">
                <h1>Hola, soy <span className="highlight">Maxwell</span></h1>
                <h2>Desarrollador Full Stack</h2>
                <p>
                    Especializado en backend (Node.js, TS) y aprendiendo a crear experiencias increíbles
                    en el Frontend con React. (En construcción)
                </p>
            </div>

            <div className="hero-buttons">
                <a href="/cv.pdf" download className="btn btn-primary">
                    Descargar CV
                </a>
                <a href="#contact" className="btn btn-secondary">
                    Contáctame
                </a>
            </div>

            <div className="hero-image">
                <img src="/avatar.jpg" alt="Foto de perfil" />
            </div>
        </section>  
    )
}

export default Hero