import React, { useState, useEffect } from "react";

const PokemonDetail = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon');
        }
        const data = await response.json();
        const pokemonData = await Promise.all(data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          if (!pokemonResponse.ok) {
            throw new Error('Failed to fetch Pokémon details');
          }
          return pokemonResponse.json();
        }));
        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div>
      <div className="pokemon-container">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            {pokemon.sprites && pokemon.sprites.front_default && (
              <img src={pokemon.sprites.front_default} alt={`Pokemon ${index + 1}`} />
            )}
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetail;

