import Pokemon from '../data/pokemon.json';
import PokemonTypes from '../data/PokemonTypes.json';

const initialState = {
    Pokemon,
    PokemonTypes  
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}


export default reducer;