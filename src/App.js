import React, { Component } from 'react';
import Beaches from './Beaches.js'
import LandingPage from './LandingPage.js';
import Maps from './Maps.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      landingPage: true,
      Beaches: false,
      Maps: false,
    };
    this.keys = Object.keys(this.state);  
  }

  renderMain = (event) => {
    const section = event.target.classList[0];
    this.setState({
      Beaches: false,
      Maps: false,
      [section]: true
    });
  }

  exitLandingPage = () => {
    this.setState({
      Beaches: true,
      landingPage: false
    })
  }

  render() {
    if (this.state.landingPage) {
      return ( 
        <LandingPage renderBeaches={this.exitLandingPage} />
      )
    }
    return (
      <div className="App">
        <nav className="main-nav">
          <div className="nav-buttons">
            <button className='Beaches nav-button' 
              onClick={this.renderMain}>BEACHES</button>
            <button className='Maps nav-button' 
              onClick={this.renderMain}>MAPS</button>
          </div>
        </nav>
        {
          this.keys.map( key => {
            if (this.state[key]) {
              switch (key) {
              case 'Beaches':
                return <Beaches key={key} />;
              case 'Maps':
                return <Maps key={key} />;
              }
            }
          })
        }
      </div>
    )
  }
}

export default App;
