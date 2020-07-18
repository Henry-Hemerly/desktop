import React from 'react';
import './App.css';
import Memory from './components/Memory'
import MemoryGame from './components/MemoryGame/Mem'

const createMemoryGame = () => {
  return <Memory></Memory>
}

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <img className="icons" alt="Memory Game Icon" src={require(`./images/memory/icon.png`)} onClick={createMemoryGame}/>
        <img className="icons" alt="Chat Icon" src={require(`./images/chat/icon.png`)} />
      </div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MemoryGame />
    </div>
  );
}

export default App;
