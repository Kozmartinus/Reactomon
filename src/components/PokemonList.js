import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
