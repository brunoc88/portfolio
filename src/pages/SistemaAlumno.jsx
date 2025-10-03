const SistemaAlumnos = () => {
    return (
        <section className="project">
            <h2 className="project-title">Sistema de Alumnos</h2>

            {/* Galería de imágenes */}
            <div className="project-gallery">
                <img src="/sis/index.PNG" alt="index" />
                <img src="/sis/materia.PNG" alt="materia" />
                <img src="/sis/listadodemateriasdealumno.PNG" alt="listado" />
                <img src="/sis/misnotas.PNG" alt="notas" />
                <img src="/sis/ponerNota.PNG" alt="ponerNota" />
                <img src="/sis/registroalu.PNG" alt="registro" />
            </div>

            {/* Descripción */}
            <div className="project-description">
                <h3>Descripción:</h3>
                <p>
                    Sistema de gestión de alumnos con dos tipos de usuarios: Admin y Estudiante.
                    Usuario Admin: Puede realizar todas las operaciones CRUD sobre Materias, Notas, Alumnos y Usuarios. 
                    Usuario Estudiante: Solo puede iniciar sesión y consultar sus notas.
                </p>
            </div>

            {/* Stack */}
            <div className="project-stack">
                <h3>Stack utilizado:</h3>
                <p>
                    Express, jwt, sequelize, Bcrypt, cookie-parser, method-override, Pug
                </p>
            </div>

            {/* Link */}
            <div className="project-link">
                <p>Para más información visitar:</p>
                <a
                    href="https://github.com/brunoc88/sistema-de-alumnos"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub - Sistema de Alumnos
                </a>
            </div>
        </section>
    )
}

export default SistemaAlumnos