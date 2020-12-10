import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import ShowMyPokemon from "./components/ShowMyPokemon";
import TypeList from "./components/TypeList";
import Pagination from "./components/Pagination";

import "./App.css";
import MainDiv from "./elements/MainDiv";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    (async function getInitialData() {
      const [pokemonsData, typesData] = await Promise.all([
        axios.get("https://pokeapi.co/api/v2/pokemon"),
        axios.get("https://pokeapi.co/api/v2/type"),
      ]);

      setPokemons(pokemonsData.data);
      setTypes(typesData.data);
    })();
  }, []);

  const loadContent = (url) => {
    axios.get(url).then((res) => setPokemons(res.data));
  };

  return (
    <Router>
      <MainDiv>
        <Header />
        <Route
          exact
          path="/pokemons"
          render={(props) => (
            <React.Fragment>
              <PokemonList pokemons={pokemons.results} />
              <hr />
              <Pagination
                paginationLinks={pokemons}
                loadContent={loadContent}
              />
            </React.Fragment>
          )}
        />
        <Route exact path="/pokemon/:id" component={ShowMyPokemon} />
        <Route
          exact
          path="/types"
          render={(props) => (
            <React.Fragment>
              <TypeList types={types.results} />
            </React.Fragment>
          )}
        />
        <Route exact path="/" component={Home} />
      </MainDiv>
    </Router>
  );
};

export default App;
