import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <>
            <div>
                <h2>Puedes encontrarme y contactarme en las siguientes plataformas</h2>
            </div>
            <div>
                <img src="/gmail.png" alt="gmail" /> brunocerutti88@gmail.com
                <Link to={'https://www.linkedin.com/in/bruno-cerutti-a0214a208/'}><img src="/linkedin.png" alt="linkedin" />Bruno Cerutti</Link>
                <Link to={'https://github.com/brunoc88'}><img src="/github.png" alt="github" />brunoc88</Link>
            </div>
        </>
    )
}

export default Contact