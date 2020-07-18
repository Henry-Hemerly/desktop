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

  playerName = (name) => {
    this.state({ player: name})
  }
}