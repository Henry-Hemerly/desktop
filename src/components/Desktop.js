import React from 'react';
import Main from './MemoryGame/Main';

class Desktop extends React.Component {
  state ={
    memoryGames: [],

  }

  createMemoryGame() {
    console.log(this.state.memoryGames.length, '**********************');
    this.setState({
      memoryGames: [...this.state.memoryGames, <Main/>]
    });
  }

  // renderMemoryGames() {
  //   this.state.memoryGames.map( game => {
  //     return (
  //       <Main />
  //     )
  //   })


  // }

  render () {
    return (
      <div className="desktop">
        {this.state.memoryGames.map( game => {
          return (
            <Main />
          )
        })}
      </div>
    )}
}

export default Desktop;