import React, { Component } from 'react';
import './App.css';
import Beaches from './Beaches.js'

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div className="App">
        <h1>Beachy Keen</h1>
        <Beaches />
      </div>
    )
  }
}

export default App;
