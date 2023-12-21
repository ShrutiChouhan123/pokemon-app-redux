import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const PokemonList = () => {
  const [currentPage, setCurrentPage] = useState(1); // Start from page 1
  const itemsPerPage = 9;

  const dispatch = useDispatch();
  const { pokemonList, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // this code for pagignation
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedPokemon = pokemonList.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {displayedPokemon.map((pokemon, id) => (
          <div
            key={id}
            className="card"
            style={{ float: "left", width: "18rem" }}
          >
            <img
              className="card-img-top"
              // src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <div className="card-body">
              <h5 className="card-title">{pokemon.name}</h5>
            </div>
          </div>
        ))}
      </ul>

      <div className="pagignation">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{ borderRadius: "70px" }}
        >
          <i
            class="fa fa-arrow-left"
            style={{ fontSize: "36px", color: "black" }}
          ></i>
        </button>
        <span> {currentPage} </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= pokemonList.length}
          style={{ borderRadius: "70px" }}
        >
          <i
            class="fa fa-arrow-right"
            style={{ fontSize: "36px", color: "black" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
