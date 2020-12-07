import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { next, previous } = this.props.paginationLinks;
    const previousButton = <button style={btnStyle}>{previous}</button>;
    const nextButton = <button style={btnStyle}>{next}</button>;
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
