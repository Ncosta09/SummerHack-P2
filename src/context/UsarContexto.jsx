import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer } from "react";
import axios from "axios";

function UsarContexto(props) {
    
    const {children} = props;

    const estadoInicial = {
        busquedaPokemones: [], //tuve que crear un nuevo array porque sino me hacia sobre el estado pokemones y me modificaba el array principal asi trayendome algunos problemas
        pokemones: [],
        favoritos:  JSON.parse(localStorage.getItem('favoritos')) || [] //si no viene nada por el localStorage, se pone el valor predeterminado como array vacio
    }

    const [state, dispatch] = useReducer(Reducer, estadoInicial);
    
    const traemePokemones = async () => {
        console.log("Listar Pokemones");
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        dispatch({type: "LISTAME_POKEMONES", payload: res.data.results});
        
    }

    const buscamePokemones = (name) => {
        console.log("pokemon buscado", name);
        dispatch({type: "BUSCAME_POKEMONES", payload: name});
    }

    const guardamePokemones = (item) => {
        console.log("Guardar Pokemon en favoritos");
        dispatch({type: "GUARDAME_POKEMON_FAVORITOS", payload: item});
        
        console.log("favoritos -->", ...state.favoritos); //viene con uno de delay
    }

    const borramePokemonesFavoritos = (name) => {
        console.log("Borrar pokemon de favoritos");
        dispatch({type: "BORRAME_POKEMON_FAVORITOS", payload: name});

        console.log("Elemento eliminado: ");
    }

    return ( 
        <Contexto.Provider value={{ guardamePokemones, traemePokemones, borramePokemonesFavoritos, buscamePokemones, pokemones: state.pokemones, favoritos: state.favoritos}}> 
            {children} 
        </Contexto.Provider> 
    );
}

export default UsarContexto;