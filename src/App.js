import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Pagination from "./components/Pagination";

import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const [pokemonsData, typesData] = await Promise.all([
      axios.get("https://pokeapi.co/api/v2/pokemon"),
      axios.get("https://pokeapi.co/api/v2/type"),
    ]);

    this.setState({
      pokemons: pokemonsData.data,
      types: typesData.data,
    });
  }

  loadContent = (url) => {
    axios.get(url).then((res) =>
      this.setState({
        pokemons: res.data,
        types: this.state.types,
      })
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/pokemons"
              render={(props) => (
                <React.Fragment>
                  <PokemonList pokemons={this.state.pokemons.results} />
                  <hr />
                  <Pagination
                    paginationLinks={this.state.pokemons}
                    loadContent={this.loadContent}
                  />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/types"
              render={(props) => (
                <React.Fragment>
                  <TypeList types={this.state.types.results} />
                </React.Fragment>
              )}
            />
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
