import React, { Component } from 'react';
import './App.css';
import Beaches from './Beaches.js'
import { beachCounties, beaches } from './data.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      beaches: beaches
    }  
  }

  render() {
    return (
      <div className="App">
        <h1>Beachy Keen</h1>
        <Beaches beaches={this.state.beaches} /> 
      </div>
    )
  }
}

export default App;
