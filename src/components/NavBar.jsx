import { NavLink as Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Projects</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar