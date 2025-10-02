import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Proyectos destacados</h2>
      
      <div className="featured-projects">
        <a href="https://github.com/brunoc88/red-social-resident-evil" target="_blank" rel="noopener noreferrer">
          <img src="/re.png" alt="Red Social Resident Evil" />
          <p>Red Social de Resident Evil</p>
        </a>

        <a href="https://github.com/brunoc88/sistema-alumnos" target="_blank" rel="noopener noreferrer">
          <img src="/sisalu.png" alt="Sistema de alumnos" />
          <p>Sistema de alumnos</p>
        </a>
      </div>

      <h3>Otros proyectos realizados</h3>
      <ul className="other-projects">
        <li>
          <a href="https://github.com/brunoc88/sistema-prescripcion" target="_blank" rel="noopener noreferrer">
            Sistema de prescripción Médica
          </a>
        </li>
        <li>
          <a href="https://github.com/brunoc88/concesionaria" target="_blank" rel="noopener noreferrer">
            Concesionaria
          </a>
        </li>
        <li>
          <a href="https://github.com/brunoc88/curso-react-router" target="_blank" rel="noopener noreferrer">
            Curso de React Router
          </a>
        </li>
        <li>
          <a href="https://github.com/brunoc88/app-valor-dolar" target="_blank" rel="noopener noreferrer">
            Aplicación de valor del dólar
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Projects
