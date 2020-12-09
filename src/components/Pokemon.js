import React from "react";

const Pokemon = (props) => {
  const { name, url } = props.pokemon;
  return (
    <div className="card">
      <p>{name}</p>
      <p>{url}</p>
    </div>
  );
};

export default Pokemon;
