import React, {Component} from 'react';
import Game from './Game.js';
import Imgs from './Imgs.js';
import Outputs from '/.Outputs.js';
import UI from './UI.js';
import Welcome from './Welcome.js';

class Compiler extends Component {
  state = {
    player: '',
    score: 0,
    start: true,
    end: false
  }

  playerName = (name, boolean) => {
    this.state({ player: name, start: boolean})
  }

  finishGame = () => {
    if (end) {
      this.setState({
        end: boolean, score: this.state.score++});
    } else {
      this.setState({
        end: boolean });
    }
  }

  render() {
    return (
      <>
        {start ? <Welcome name={this.playerName}/> : null}
        {end ? <Outputs new={this.finishGame}/> : null}
        <UI name={name} score={score} />
        <Game end={this.finishGame} />
      </>
    )
  }
}