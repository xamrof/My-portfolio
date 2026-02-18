import './Skills.css'

const Skills = () => {

  const skills = [
    { id: 1, name: "JavaScript", level: "Avanzado", category: "Lenguaje" },
    { id: 2, name: "TypeScript", level: "Avanzado", category: "Lenguaje" },
    { id: 3, name: "Node.js", level: "Intermedio", category: "Backend" },
    { id: 4, name: "React", level: "Principiante", category: "Frontend" },
    { id: 5, name: "SQL", level: "Intermedio", category: "Base de Datos" },
    { id: 6, name: "Git", level: "Intermedio", category: "Herramientas" },
  ];

  return (
    <section id="skills" className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
            {skills.map((skill) => (
                <div key={skill.id} className="skill-card">
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