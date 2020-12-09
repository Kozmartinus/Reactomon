import React from "react";

const Type = (props) => {
  const { name } = props.type;
  return (
    <div className="card">
      <p>{name}</p>
    </div>
  );
};

export default Type;
