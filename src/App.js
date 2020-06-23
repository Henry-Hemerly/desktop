import React from 'react';
import './App.css';
import Memory from './components/Memory'

const createMemoryGame = () => {
  return <Memory></Memory>
}

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <img className="icons" src={require(`./images/memory/icon.png`)} onClick={createMemoryGame}/>
        <img className="icons" src={require(`./images/chat/icon.png`)} />
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
    </div>
  );
}

export default App;
