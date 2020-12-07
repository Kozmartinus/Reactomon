import React, { Component } from "react";

class Type extends Component {
  render() {
    const { name } = this.props.type;
    return (
      <div className="card">
        <p>{name}</p>
      </div>
    );
  }
}

export default Type;
