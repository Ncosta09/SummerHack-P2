import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Pokemon() {

    const location = useLocation(); //Me captura la url para saber donde estamos
    const urlPartida = location.pathname.split("/"); //Separa la URL por /
    const urlPorPokemon =  "https://pokeapi.co/api/v2/pokemon/" + urlPartida[2] + "/"; //La url esta partida en 3 comenzando en la posicion 0, por eso elegimos el 2

    const [pokemon, setPokemon] = useState([]);

    const traemePokemon = async () => {
        const res = await axios.get(urlPorPokemon);
        console.log("pokeApi", res.data);
        setPokemon(res.data);
    }

    useEffect(() => {
        console.log("useEffect ->");
        traemePokemon();
    },[])


    return ( <>
        <h1>{pokemon?.name}</h1>
        <img src={pokemon?.sprites?.other["official-artwork"].front_default} alt={pokemon?.name} />

    </> );
}

export default Pokemon;