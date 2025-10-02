import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-card">
                <div className="home-image">
                    <img src="/yo.jpg" alt="Bruno" />
                </div>
                <div className="home-content">
                    <p>
                        ¡Hola! Soy Bruno 👋 <br/>
                        Bienvenido a mi portafolio como desarrollador. <br/>
                        Aquí quiero compartirte un poco sobre mí, mi recorrido en programación y los proyectos que he estado construyendo.
                    </p>
                    <div className="home-buttons">
                        <button className="btn">Comenzar</button>
                        <button className="btn">Salir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
