import React from "react";

const PokemonDetail = (props) => {
  const { name } = props.pokemon;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default PokemonDetail;
