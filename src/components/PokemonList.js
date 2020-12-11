import React, { useContext } from "react";
import MainDiv from "../elements/MainDiv";
import Pokemon from "./Pokemon";
import { ThemeContext } from "../context/ThemeContext";

const PokemonList = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <MainDiv theme={theme}>
      {props.pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </MainDiv>
  );
};

export default PokemonList;
