import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";

function Pokemones() {

    const [pokemones, setPokemones] = useState([]);

    const traemePokemones = async () => {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        console.log("pokeApi", res.data.results);
        setPokemones(res.data.results);
    }

    useEffect(() => {
        console.log("useEffect ->");
        traemePokemones();
    },[])

    return ( <>
        <h1>Pokemones</h1>

        <ul>
            {pokemones.map((pokemon) => 
                <Item {...pokemon} key = {pokemon.name}></Item>
            )}; 
        </ul>

    </> );
}

export default Pokemones;