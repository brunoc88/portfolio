import "./Stack.css"

const Stack = () => {
  return (
    <div className="stack-container">
      <h2>Mi stack</h2>
      <p className="stack-description">
        Soy desarrollador Fullstack con foco en backend. Me especializo en Node.js/Express, bases de datos SQL y NoSQL, 
        y manejo autenticación segura con JWT y cookies. También trabajo con React para frontend y estoy 
        profundizando en TypeScript, Next.js y Prisma.
      </p>

      <div className="stack-columns">
        {/* Backend */}
        <div className="stack-section">
          <h3>Backend:</h3>
          <ul>
            <li>Node.js con Express</li>
            <li>Autenticación: por cabeceras y cookies</li>
            <li>ORM/ODM: Sequelize (SQL) y Mongoose (MongoDB)</li>
            <li>Testing: Jest + Supertest</li>
            <li>Creación de middlewares personalizados</li>
          </ul>
          <div className="stack-logos">
            <img src="/node.png" alt="Node.js" />
            <img src="/express.jpg" alt="Express" />
            <img src="/sequelize.png" alt="Sequelize" />
            <img src="/mongoose.png" alt="MongoDB" />
            <img src="/jest.png" alt="MongoDB" />
          </div>
        </div>

        {/* Frontend */}
        <div className="stack-section">
          <h3>Frontend:</h3>
          <ul>
            <li>Pug (para renderizado dinámico en server-side)</li>
            <li>React (frontend moderno con componentes)</li>
          </ul>
          <div className="stack-logos">
            <img src="/react.png" alt="React" />
            <img src="/pug.png" alt="Pug" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
