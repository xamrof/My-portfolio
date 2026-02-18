import ProjectCard from "./ProjectCard";
import './Portfolio.css';

function Portfolio() {
  // Tu "Base de Datos" de proyectos con IDs únicos
  const projects = [
    {
      id: 1,
      title: "WhatsApp Bot AI",
      description: "Bot inteligente para atención al cliente con búsqueda vectorial y manejo de sesiones multi-usuario.",
      image: "https://via.placeholder.com/400x200?text=Bot+WhatsApp", // Placeholder temporal
      technologies: ["Node.js", "Vector DB", "OpenAI API"],
      link: "https://github.com/tu-usuario/bot-whatsapp"
    },
    {
      id: 2,
      title: "Pizza Menu App",
      description: "Aplicación para gestión de menús con precios dinámicos y animaciones frame-by-frame.",
      image: "https://via.placeholder.com/400x200?text=Pizza+App",
      technologies: ["HTML/JS", "JSON", "CSS Animations"],
      link: "#"
    },
    {
      id: 3,
      title: "Private Web Chat",
      description: "Chat en tiempo real con salas privadas y mensajes efímeros.",
      image: "https://via.placeholder.com/400x200?text=Web+Chat",
      technologies: ["Socket.io", "Node.js", "Express"],
      link: "#"
    },
    {
      id: 4,
      title: "Coupon Scraper Extension",
      description: "Extensión de Chrome para encontrar y aplicar cupones automáticamente.",
      image: "https://via.placeholder.com/400x200?text=Extension",
      technologies: ["JavaScript", "Chrome API", "DOM Manipulation"]
    }
  ];

    return (
        <section id="portfolio" className="portfolio-container">
            <h2>Mis proyectos</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio