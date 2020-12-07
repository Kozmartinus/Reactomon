import React, { Component } from "react";

class PokemonDetail extends Component {
  render() {
    const { name, url } = this.props.pokemon;
    return (
      <div className="card">
        <p>{name}</p>
        <p>{url}</p>
      </div>
    );
  }
}

export default PokemonDetail;
