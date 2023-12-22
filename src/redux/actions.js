export const FETCH_POKEMON_LIST_REQUEST = "FETCH_POKEMON_LIST_REQUEST";
export const FETCH_POKEMON_LIST_SUCCESS = "FETCH_POKEMON_LIST_SUCCESS";
export const FETCH_POKEMON_LIST_FAILURE = "FETCH_POKEMON_LIST_FAILURE";

export const fetchPokemonListRequest = () => ({
  type: FETCH_POKEMON_LIST_REQUEST,
});

export const fetchPokemonListSuccess = (pokemonList) => ({
  type: FETCH_POKEMON_LIST_SUCCESS,
  payload: pokemonList,
});

export const fetchPokemonListFailure = (error) => ({
  type: FETCH_POKEMON_LIST_FAILURE,
  payload: error,
});
