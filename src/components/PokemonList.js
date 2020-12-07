import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokemonList extends Component {
  render() {
    return (
      <div>
        {this.props.pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default PokemonList;
