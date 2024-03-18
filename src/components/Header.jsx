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
                    <li className="top-li"><Link to={"/SummerHack-P2/"} className="top-link">Home</Link></li>
                    <li className="top-li"><Link to={"/SummerHack-P2/somos"} className="top-link">Somos</Link></li>
                    <li className="top-li"><Link to={"/SummerHack-P2/pokemones"} className="top-link">Pokemones</Link></li> {/*cambios: SummerHack-P2*/}
                    <li className="top-li"><Link to={"/SummerHack-P2/favoritos"} className="top-link">Favoritos</Link></li> {/*cambios: SummerHack-P2*/}
                </ul>
            </nav>
        </header>
    </> );
}

export default Header;