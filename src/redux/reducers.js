const initialState = {
    pokemonList: [],
    error: null,
  };
  
  export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POKEMON_SUCCESS':
        return { ...state, pokemonList: action.payload, error: null };
      case 'FETCH_POKEMON_FAILURE':
        return { ...state, pokemonList: [], error: action.payload };
      default:
        return state;
    }
  };
  