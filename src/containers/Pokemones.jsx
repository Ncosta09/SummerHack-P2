import { useEffect, useState, useContext } from "react";
import Item from "../components/Item";
import Contexto from "../context/Contexto";
import "../assets/styles/pokemones.css"

function Pokemones() {

    const { traemePokemones, pokemones, buscamePokemones } = useContext(Contexto);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        console.log("useEffect ->");
        traemePokemones();
    }, [])

    const buscarPokemon = (e) => {
        setBusqueda(e.target.value);
    } 

    const handleBuscar = () => {
        if (busqueda.trim() == "") {
            traemePokemones();
        } else {
            buscamePokemones(busqueda);
        }
    }

    return (<>

        <div className="all-class">
            <div className="all-section">

                <div className="section-title-search">
                    <h1 className="section-title">Pokemones</h1>

                    <div className="searchbar">
                        <input type="text" placeholder="Buscar..." onChange={buscarPokemon}/>
                        <button onClick={handleBuscar}>🔎</button>
                    </div>
                </div>

                <ul className="unorder-list">
                    {pokemones.map((pokemon) =>
                        <Item {...pokemon} key={pokemon.name}></Item>
                    )}
                </ul>

            </div>
        </div>

    </>);
}

export default Pokemones;