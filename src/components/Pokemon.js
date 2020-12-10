import React from "react";
import { Link } from "react-router-dom";
import CardDiv, { PokemonName } from "../elements/CardDiv";

const Pokemon = (props) => {
  const { name, url } = props.pokemon;
  const splittedUrl = url.split("/");
  const id = splittedUrl[splittedUrl.length - 2];
  return (
    <CardDiv>
      <PokemonName>{name}</PokemonName>
      <Link to={`/pokemon/${id}`} pokemonId={id}>
        See details
      </Link>
    </CardDiv>
  );
};

export default Pokemon;
