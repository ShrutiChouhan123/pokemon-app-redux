import {
  fetchPokemonListRequest,
  fetchPokemonListSuccess,
  fetchPokemonListFailure,
} from "./actions";

export const fetchPokemonList = () => async (dispatch) => {
  dispatch(fetchPokemonListRequest());
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon");
    }
    const data = await response.json();
    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error("Failed to fetch Pokémon details");
        }
        return pokemonResponse.json();
      })
    );
    dispatch(fetchPokemonListSuccess(pokemonData));
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    dispatch(fetchPokemonListFailure(error.message));
  }
};
