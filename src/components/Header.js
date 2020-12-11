import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import HeaderElement, {
  PageTitle,
  HeaderLink,
} from "../elements/HeaderElement";
import { ThemeContext } from "../context/ThemeContext";
import ToggleButton from "./ToggleButton";
import "../App.css";

function Header() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [selected, setSelected] = useState(true);

  return (
    <HeaderElement theme={theme}>
      <div>
        <PageTitle theme={theme}>POKEMON</PageTitle>
        <div className="toggle-div">
          <ToggleButton
            selected={selected}
            toggleSelected={() => {
              console.log(selected + " " + { theme });
              setSelected(!selected);
              setTheme(theme === "pokemon" ? "b&w" : "pokemon");
            }}
          />
        </div>
      </div>
      <Link to="/">
        <HeaderLink theme={theme}>Home</HeaderLink>
      </Link>{" "}
      |{" "}
      <Link to="/pokemons">
        <HeaderLink theme={theme}>Pokemons</HeaderLink>
      </Link>{" "}
      |{" "}
      <Link to="/types">
        <HeaderLink theme={theme}>Types</HeaderLink>
      </Link>
    </HeaderElement>
  );
}

export default Header;
