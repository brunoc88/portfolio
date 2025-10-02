import "./About.css"

const About = () => {
  return (
    <div className="about-container">
      <h2>Un poco sobre mi...</h2>

      {/* Mis inicios */}
      <div className="about-section">
        <div className="about-text">
          <h3>Mis inicios</h3>
          <p>
            Mi camino hacia la programación fue bastante inesperado. Durante la pandemia,
            mientras buscaba nuevas oportunidades, descubrí la carrera de Desarrollo de Software.
            En ese momento decidí dar mis primeros pasos y aprender las bases de la programación.
            Aunque pasé bastante tiempo cursando, me di cuenta de que lo que buscaba estaba más allá
            de lo que la universidad podía ofrecerme, así que elegí seguir otro rumbo.
          </p>
        </div>
        <div className="about-img">
          <img src="/universidad.png" alt="Inicios" />
        </div>
      </div>

      {/* Como fui progresando */}
      <div className="about-section reverse">
        <div className="about-text">
          <h3>Como fui progresando</h3>
          <p>
            Tomar la decisión de continuar fuera de la universidad no fue fácil.
            Al principio estuve en un momento de mucha incertidumbre: “¿qué hago?, ¿por dónde empiezo?”.
            Empecé repasando lo que ya había aprendido y, al mismo tiempo, descubrí
            la importancia de estudiar de forma autodidacta. 
            No siempre fue sencillo, pero mi pasión por la programación y mis ganas de mejorar
            me dieron el impulso necesario para seguir adelante.
          </p>
        </div>
        <div className="about-img">
          <img src="/programando.png" alt="Progresando" />
        </div>
      </div>

      {/* Mi perfil como programador */}
      <div className="about-section">
        <div className="about-text">
          <h3>Mi Perfil como programador hoy</h3>
          <p>
            Soy un programador que no es egocéntrico y que acepta sus errores. 
            Al contrario, me gusta que si me equivoco me lo hagan saber. 
            Siempre trato de ser empático con las personas, ser frontal.
            Con el paso del tiempo mis habilidades han mejorado, haciendo códigos más limpios,
            más ordenados, tratando de no repetir tanto. 
            Pero lo que creo que es la clave de porque amo mi profesión es que amo crear, planificar, 
            darle la forma, estructurar. Ver como cada día se va pareciendo a lo planificado. 
            También quiero remarcar que lo que más me importa es que los sitios que haga sean seguros y funcionales. 
            Me gusta el estilo pero priorizo mucho un backend robusto.
          </p>
        </div>
        <div className="about-img">
          <img src="/diagram.png" alt="Perfil programador" />
        </div>
      </div>
    </div>
  )
}

export default About
