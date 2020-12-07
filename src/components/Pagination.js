import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { next, previous } = this.props.paginationLinks;
    const previousButton = (
      <button
        onClick={this.props.loadContent.bind(this, previous)}
        style={btnStyle}
      >
        Previous page
      </button>
    );
    const nextButton = (
      <button
        onClick={this.props.loadContent.bind(this, next)}
        style={btnStyle}
      >
        Next page
      </button>
    );
    return (
      <div>
        {previous ? previousButton : ""}
        {next ? nextButton : ""}
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  margin: "6px 12px",
  borderRadius: "10%",
  cursor: "pointer",
};

export default Pagination;
