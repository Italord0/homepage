import { Link } from "react-scroll"
import "../styles/navbar.css"

export const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='nav-links'>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500}><li>Home</li></Link>
                    <Link to="about" spy={true} smooth={true} offset={-120} duration={500}><li>About</li></Link>
                    <Link to="projects" spy={true} smooth={true} offset={0} duration={500}><li>Projects</li></Link>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500}><li>Contact</li></Link>
                </ul>
            </nav>
        </div >

    )
}
