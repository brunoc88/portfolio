import { NavLink as Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'home'}>Home</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link to={'stack'}>Stack</Link>
                    </li>
                    <li>
                        <Link>Projects</Link>
                    </li>
                    <li>
                        <Link to={'contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar