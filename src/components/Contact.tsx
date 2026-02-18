import { useState } from "react";
import './Contact.css'

function Contact(){
    const [buttonText, setButtonText] = useState('Copiar Correo')
    const email = "maxwellworks25@gmail.com"

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
        setButtonText("Copiado")
    
        setTimeout(() => {
            setButtonText('Copiar Correo')
        }, 2000)
    }


    return (
        <section id="contact" className="contact-container">
            <div className="contact-content">
                <h2>Hablemos</h2>
                <p>
                    ¿Tienes un proyecto en mente o quieres colaborar?
                    Estoy disponible para nuevas oportunidades.
                </p>

                <div className="email-card">
                    <span className="email-text"></span>
                    <button onClick={handleCopyEmail} className="copy-btn">
                        {buttonText}
                    </button>
                </div>

                <div className="social-links">
                    <a href="https://github.com/xamrof" target="_blank">Github</a>
                    <a href="" target="_blank">LinkedIn</a>
                </div>
            </div>
        </section>
    )


}   

export default Contact