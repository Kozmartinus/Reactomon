import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  state = {
    pokemons: [],
    types: [],
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
              render={(props) => <React.Fragment></React.Fragment>}
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
