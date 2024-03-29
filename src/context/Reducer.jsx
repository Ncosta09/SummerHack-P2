const LISTAME_POKEMONES = "LISTAME_POKEMONES";
const BUSCAME_POKEMONES = "BUSCAME_POKEMONES";
const GUARDAME_POKEMON_FAVORITOS = "GUARDAME_POKEMON_FAVORITOS";
const BORRAME_POKEMON_FAVORITOS = "BORRAME_POKEMON_FAVORITOS";
// const CREAME_POKEMON = "CREAME_POKEMON";
// const BUSCAME_POKEMON = "BUSCAME_POKEMON";

export default function Reducer(state, action){
    const {payload, type} = action;

    switch( type ){
        case LISTAME_POKEMONES:
            return {
                ...state, 
                busquedaPokemones: payload, //traigo los mismos pokemones
                pokemones: payload
            };
        

            case BUSCAME_POKEMONES:
                const pokemonesFiltrados = state.busquedaPokemones.filter(pokemon => pokemon.name.includes(payload)); //busco sobre el nuevo array de busqueda que me tare todos los pokemones
                return {
                    ...state,
                    pokemones: pokemonesFiltrados //muestro en pokemones (q es el q contiene el map) todos los pokemones q busque en el nuevo array
                };            
            
            

        case GUARDAME_POKEMON_FAVORITOS:
            const favoritosGuardados = [...state.favoritos, payload];
            localStorage.setItem('favoritos', JSON.stringify(favoritosGuardados));
            return {
                ...state, 
                favoritos: favoritosGuardados
            };

        case BORRAME_POKEMON_FAVORITOS:
            const favoritosEliminados = state.favoritos.filter(pokemon => pokemon.name != payload.name)
            localStorage.setItem('favoritos', JSON.stringify(favoritosEliminados));
            return {
                ...state, 
                favoritos: favoritosEliminados
            };
    }
}