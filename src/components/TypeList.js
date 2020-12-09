import React from "react";
import Type from "./Type";

const TypeList = (props) => {
  return (
    <div>
      {props.types.map((type) => (
        <Type type={type} />
      ))}
    </div>
  );
};

export default TypeList;
