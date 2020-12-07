import React, { Component } from "react";
import Type from "./Type";

class TypeList extends Component {
  render() {
    return (
      <div className="cards-container">
        {this.props.types.map((type) => (
          <Type type={type} />
        ))}
      </div>
    );
  }
}

export default TypeList;
