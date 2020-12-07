import React, { Component } from "react";
import PokemonDetail from "./PokemonDetail";

class PokemonList extends Component {
  render() {
    return (
      <div className="cards-container">
        {this.props.pokemons.map((pokemon) => (
          <PokemonDetail pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default PokemonList;
