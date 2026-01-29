import './Skills.css'

const Skills = () => {

  const skills = [
    { name: "JavaScript", level: "Avanzado", category: "Lenguaje" },
    { name: "TypeScript", level: "Avanzado", category: "Lenguaje" },
    { name: "Node.js", level: "Intermedio", category: "Backend" },
    { name: "React", level: "Principiante", category: "Frontend" },
    { name: "SQL", level: "Intermedio", category: "Base de Datos" },
    { name: "Git", level: "Intermedio", category: "Herramientas" },
  ];

  return (
    <section id="skills" className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                    <h3>{skill.name}</h3>
                    <p className='skill-category'>{skill.category}</p>
                    <span className="skill-level">{skill.level}</span>
                </div>
            ))}
        </div>
    </section>
  )
} 

export default Skills