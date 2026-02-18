import './ProjectCard.css'

interface ProjectProps {
    title: string;
    description: string;
    image: string
    technologies: string[];
    link?: string;
}

function ProjectCard({ title, description, image, technologies, link }: ProjectProps) { 
    return (
        <article className="project-card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>

            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>

                <div className="card-tags">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tag">{tech}</span>
                    ))} 
                </div>

                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
                        Ver Proyecto
                    </a>
                )}
            </div>
        </article>
    )
}

export default ProjectCard;