import { useEffect, useState, useContext } from "react";
import Item from "../components/Item";
import Contexto from "../context/Contexto";
import pikachuPng from "../assets/static/Pikachu-PNG-Picture.png"
import "../assets/styles/pokemones.css"

function Favoritos() {

    const { favoritos } = useContext(Contexto);

    useEffect(() => {
        console.log("useEffect ->");
        console.log(favoritos);
    }, []);

    return (<>
        {favoritos.length > 0 ? (
            <div className="all-class">
                <div className="all-section">

                    <h1 className="section-title">Favoritos</h1>

                    <ul className="unorder-list">
                        {favoritos.map((favorito) =>
                            <Item {...favorito} key={favorito.name}></Item>
                        )}
                    </ul>
                </div>
            </div>
            ) : (
            <div className="favs-error">
                <h3>No tenes ningun pokemon como favorito</h3>
                <img src={pikachuPng} alt="" />
            </div>
            )}

    </>);
}

export default Favoritos;