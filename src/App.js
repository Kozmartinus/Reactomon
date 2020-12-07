import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";

import "./App.css";

class App extends Component {
  state = {
    pokemons: [],
    types: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) =>
      this.setState({
        pokemons: res.data,
        types: [...this.state.types],
      })
    );
  }

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
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/types"
              render={(props) => <React.Fragment></React.Fragment>}
            />
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
