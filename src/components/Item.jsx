import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import "../assets/styles/pokemones.css"

function Item(props) {

    const { name, url } = props;
    const { guardamePokemones, favoritos, borramePokemonesFavoritos } = useContext(Contexto)
 
    let shortUrl = url.split("/");
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + shortUrl[6] + ".png";

    // useEffect(() => {
    //     console.log("useEffect ->");
    //     console.log(favoritos);
    // }, [favoritos])

    let handleGuardar = () => {
        guardamePokemones({ name: name, url: url });
    }

    let handleQuitarFav = () => {
        borramePokemonesFavoritos({name: name});
    }

    const existeEnFavoritos = favoritos.some(favorito => favorito.name === name);
    console.log("Existe en favoritos? ", existeEnFavoritos);

    return (<>
        <li className="poke-card">
            <div className="poke-card-display">
                <Link to={"/pokemones/" + shortUrl[6]} className="poke-link">
                    <div className="poke-img-ubi">
                        <img src={imgUrl} alt={name} className="poke-img" />
                    </div>
                    <div className="line"></div>
                    <div className="poke-text-ubi">
                        <p className="poke-text">{name}</p>
                    </div>
                </Link>
                <div className="poke-fav-btn">
                    {existeEnFavoritos ? (
                        <button onClick={handleQuitarFav}>Quitar de favoritos</button>
                    ) : (
                        <button onClick={handleGuardar}>Favorito</button>
                    )}
                </div>
            </div>
        </li>
    </>);
}

export default Item;