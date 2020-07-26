import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Desktop from './components/Desktop';
import Main from './components/MemoryGame/Main';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Desktop />
      <Main/>
    </div>

  );
}

export default App;
