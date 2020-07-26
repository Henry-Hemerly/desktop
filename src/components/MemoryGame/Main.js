import React from "react";
import Login from "./Login";
import Game from "./Game";
import Navbar from "./Navbar";
import EndGame from "./EndGame";
import Draggable from "react-draggable";

class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
  };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    const { showLogin, name, score, showEndGame } = this.state;
    return (
      <Draggable>
        <div>
          {showLogin ? <Login name={this.handleLogin} /> : null}
          {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
          <Navbar name={name} score={score} />
          <Game endGame={this.handleEndGame} />
        </div>
      </Draggable>
    );
  }
}

export default Main;