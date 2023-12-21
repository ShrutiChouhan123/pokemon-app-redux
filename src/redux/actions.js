export const fetchPokemon = () => {
    return async dispatch => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        dispatch({ type: 'FETCH_POKEMON_SUCCESS', payload: data.results });
      } catch (error) {
        dispatch({ type: 'FETCH_POKEMON_FAILURE', payload: error.message });
      }
    };
  };
