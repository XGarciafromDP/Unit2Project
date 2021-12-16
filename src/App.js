import React, { Component } from "react";
import "./App.css";
import Player from "./Components/player";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAScore: 0,
      winningScore: 0,
      winner: "Player A"
    };
  }
  reset = () => {
    this.setState({
      playerAScore: 0,
      playerBScore: 0,
      winningScore: 0,
      winner: "Player A"
    });
  };

  handlePlayerAClick = () => {
    this.setState((state) => {
      state.playerAScore += 1;
      return state;
    });
  };
  handlePlayerBClick = () => {
    this.setState((state) => {
      state.playerBScore += 1;
      return state;
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Dice Game</h1>
          <h3>Put ya money up</h3>
          <Player />
        </div>
        <button className="ResetButton" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
