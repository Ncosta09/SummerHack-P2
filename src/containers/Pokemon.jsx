import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Pokemon() {

    const location = useLocation(); //Me captura la url para saber donde estamos
    const urlPartida = location.pathname.split("/"); //Separa la URL por /
    console.log("URL ---->", urlPartida);
    //se procede a cambiar el [2], por el [3] ya que se agranda el parametro por el /SummerHack-P2
    const urlPorPokemon =  "https://pokeapi.co/api/v2/pokemon/" + urlPartida[3] + "/"; //La url esta partida en 3 comenzando en la posicion 0, por eso elegimos el 2

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
        {/* Aparece con la variable "pokemon" todas las variables que necesites de la api */}
        <h1>{pokemon?.name}</h1>
        <img src={pokemon?.sprites?.other["official-artwork"].front_default} alt={pokemon?.name} />

    </> );
}

export default Pokemon;