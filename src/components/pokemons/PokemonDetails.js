// src/components/PokemonDetail.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  let id = useParams();
  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon detail:", error);
      }
    };

    fetchPokemonDetail();
  });

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

export default PokemonDetail;
