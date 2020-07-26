import React from 'react';
import Desktop from './Desktop';

function Navigation() {
  return (
  <div className="top-bar">
    <img className="icons" alt="Memory Game Icon" src={require(`../components/images/memory/icon.png`)} onClick={Desktop.createMemoryGame}/>
    <img className="icons" alt="Chat App Icon" src={require(`../components/images/chat/icon.png`)} />
  </div>)
}

export default Navigation;