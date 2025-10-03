import { Link } from "react-router-dom"
import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Proyectos destacados</h2>
      
      <div className="featured-projects">
        <Link to={'/projects/red-social'}>
          <img src="/re/login.PNG" alt="Red Social Resident Evil" />
          <p>Red Social de Resident Evil</p>
        </Link>

        <Link to={'/projects/sistema-alumnos'}>
          <img src="/sisalu.png" alt="Sistema de alumnos" />
          <p>Sistema de alumnos</p>
        </Link>
      </div>

      <h3>Otros proyectos realizados</h3>
      <ul className="other-projects">
        <li>
          <a href="https://github.com/brunoc88/Sistema-de-Prescripcion-Medica" target="_blank" rel="noopener noreferrer">
            Sistema de prescripción Médica
          </a>
        </li>
        <li>
          <a href="https://github.com/brunoc88/Concesionaria" target="_blank" rel="noopener noreferrer">
            Concesionaria
          </a>
        </li>
        <li>
          <a href="https://github.com/brunoc88/Dolar-app" target="_blank" rel="noopener noreferrer">
            Aplicación de valor del dólar
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Projects
