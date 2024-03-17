import { useEffect, useState, useContext } from "react";
import Item from "../components/Item";
import Contexto from "../context/Contexto";
import "../assets/styles/pokemones.css"

function Pokemones() {

    const { traemePokemones, pokemones } = useContext(Contexto);

    useEffect(() => {
        console.log("useEffect ->");
        traemePokemones();
    }, [])

    return (<>

        <div className="all-class">
            <div className="all-section">

                <h1 className="section-title">Pokemones</h1>

                <ul className="unorder-list">
                    {pokemones.map((pokemon) =>
                        <Item {...pokemon} key={pokemon.name}></Item>
                    )};
                </ul>

            </div>
        </div>

    </>);
}

export default Pokemones;