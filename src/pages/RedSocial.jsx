import "./RedSocial.css";

const RedSocial = () => {
  return (
    <section className="project">
      <h2 className="project-title">Red Social de Resident Evil</h2>

      {/* Galería de imágenes */}
      <div className="project-gallery">
        <img src="/re/login.PNG" alt="login" />
        <img src="/re/crearCuenta.PNG" alt="crear cuenta" />
        <img src="/re/createBio.PNG" alt="crear biografia" />
        <img src="/re/index.PNG" alt="index" />
        <img src="/re/bio-extended.PNG" alt="index" />
        <img src="/re/chat.PNG" alt="chat" />
      </div>

      {/* Descripción */}
      <div className="project-description">
        <h3>Descripción:</h3>
        <p>
          Se trata de una red social para fanáticos de la franquicia de Resident Evil,
          donde los usuarios registrados pueden publicar información de personajes,
          dar like o comentar una publicación. También se implementó que los usuarios
          con cuenta pudieran seguirse como a la vez chatear entre ellos.
          Para moderar el sitio se creó un rol de admin teniendo la facultad de poder
          eliminar publicaciones, comentarios o incluso la cuenta de algún usuario común.
        </p>
      </div>

      {/* Stack */}
      <div className="project-stack">
        <h3>Stack utilizado:</h3>
        <p>
          Express, Mongoose, Multer, Bcrypt, JWT, Jest, Supertest, React,
          React-Router, Axios
        </p>
      </div>

      {/* Link */}
      <div className="project-link">
        <p>Para más información visitar:</p>
        <a
          href="https://github.com/brunoc88/my-resident-evil-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub - Red Social de Resident Evil
        </a>
      </div>
    </section>
  );
}

export default RedSocial