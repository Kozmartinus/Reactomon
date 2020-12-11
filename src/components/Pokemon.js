import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardDiv, { PokemonName } from "../elements/CardDiv";
import { ThemeContext } from "../context/ThemeContext";

const Pokemon = (props) => {
  const { name, url } = props.pokemon;
  const splittedUrl = url.split("/");
  const id = splittedUrl[splittedUrl.length - 2];
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <CardDiv theme={theme}>
      <PokemonName theme={theme}>{name}</PokemonName>
      <Link to={`/pokemon/${id}`} pokemonId={id}>
        See details
      </Link>
    </CardDiv>
  );
};

export default Pokemon;
