import { Link } from "react-router-dom";
import Contexto from "../context/Contexto";
import { useContext } from "react";
import "../assets/styles/header.css"


function Header() {

    const { favoritos } = useContext(Contexto);

    return ( <>
        <header className="top-header">
            <nav className="top-nav">
                <ul className="top-ul">
                    <li className="top-li"><Link to={"/"} className="top-link">Home</Link></li>
                    <li className="top-li"><Link to={"/somos"} className="top-link">Somos</Link></li>
                    <li className="top-li"><Link to={"/pokemones"} className="top-link">Pokemones</Link></li>
                    <li className="top-li"><Link to={"/favoritos"} className="top-link">Favoritos</Link></li>
                </ul>
            </nav>
        </header>
    </> );
}

export default Header;