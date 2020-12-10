import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) => {
  const { name, url } = props.pokemon;
  const splittedUrl = url.split("/");
  const id = splittedUrl[splittedUrl.length - 2];
  return (
    <div className="card">
      <p>{name}</p>
      <Link to={`/pokemon/${id}`} pokemonId={id}>
        See details
      </Link>
    </div>
  );
};

export default Pokemon;
