import React, { Component } from 'react';
// import './styles/main.scss';
import Beaches from './Beaches.js'
import LandingPage from './LandingPage.js';


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
        <LandingPage renderBeaches={this.renderMain} />
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
