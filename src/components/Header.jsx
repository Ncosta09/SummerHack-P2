import { Link } from "react-router-dom";
import "../assets/styles/header.css"


function Header() {
    return ( <>
        <header>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/somos"}>Somos</Link></li>
                </ul>
            </nav>
        </header>
    </> );
}

export default Header;