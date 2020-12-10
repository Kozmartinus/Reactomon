import React, { useEffect, useState } from "react";
import PokemonDetail from "./PokemonDetail";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowMyPokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // const id = props.match.params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  return <PokemonDetail pokemon={pokemon} />;
};

export default ShowMyPokemon;
