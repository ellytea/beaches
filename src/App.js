import React, { Component } from 'react';
import './App.css';
import Beaches from './Beaches.js'
import LandingPage from './LandingPage.js';
// import { beachCounties, beaches } from './data.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      Beaches: false,
    };
    this.keys = Object.keys(this.state);  
  }

    renderMain = (event) => {
    const section = event.target.classList[0];
    this.setState({
      Beaches: true,
      [section]: false
    });
  }

  render() {
    return (
      <div className="App">
        <LandingPage renderBeaches={this.renderMain}/>
        <h1>Beachy Keen</h1>
        {
          this.keys.map( key => {
            if (this.state[key]) {
              switch (key) {
              case 'Beaches':
                return <Beaches key={key} />;
              
              }
            }
          })
        }
      </div>
    )
  }
}

export default App;
