import PropTypes from "prop-types";
import React from "react";
import pikachuImage from "../images/pikachu.png";
import moonImage from "../images/moon.png";

import "../App.css";

const ToggleButton = (props) => {
  const { selected, toggleSelected } = props;
  return (
    <div className="toggle-container" onClick={toggleSelected}>
      <div className={`dialog-button ${selected ? "" : "disabled"}`}>
        <img
          src={selected ? pikachuImage : moonImage}
          alt="picture"
          width="38"
          height="32"
        />
      </div>
    </div>
  );
};

export default ToggleButton;

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired,
};
