import React from "react";
import Images from "./Images";
import Draggable from "react-draggable";

class Game extends React.Component {
  render() {
    return (

      <div className="game">
        <Images endGame={this.props.endGame} />
      </div>

    );
  }
}

export default Game;