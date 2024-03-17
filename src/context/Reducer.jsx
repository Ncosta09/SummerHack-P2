const LISTAME_POKEMONES = "LISTAME_POKEMONES";
const GUARDAME_POKEMON_FAVORITOS = "GUARDAME_POKEMON_FAVORITOS";
const BORRAME_POKEMON_FAVORITOS = "BORRAME_POKEMON_FAVORITOS";
const CREAME_POKEMON = "CREAME_POKEMON";
const BUSCAME_POKEMON = "BUSCAME_POKEMON";

export default function Reducer(state, action){
    const {payload, type} = action;

    switch( type ){
        case LISTAME_POKEMONES:
            return {
                ...state, 
                pokemones: payload
            };

        case GUARDAME_POKEMON_FAVORITOS:
            return {
                ...state, 
                favoritos: [...state.favoritos, payload]
            };

        case BORRAME_POKEMON_FAVORITOS:
            return {
                ...state, 
                favoritos: state.favoritos.filter(pokemon => pokemon.name != payload.name)
            };
    }
}