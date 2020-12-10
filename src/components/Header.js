import React from "react";
import { Link } from "react-router-dom";
import HeaderElement, {
  PageTitle,
  HeaderLink,
} from "../elements/HeaderElement";

function Header() {
  return (
    <HeaderElement>
      <PageTitle>POKEMON</PageTitle>
      <Link to="/">
        <HeaderLink>Home</HeaderLink>
      </Link>{" "}
      |{" "}
      <Link to="/pokemons">
        <HeaderLink>Pokemons</HeaderLink>
      </Link>{" "}
      |{" "}
      <Link to="/types">
        <HeaderLink>Types</HeaderLink>
      </Link>
    </HeaderElement>
  );
}

export default Header;
