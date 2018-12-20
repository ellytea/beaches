import React, { Component } from 'react';
import './App.css';


class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      landingPage: true
    };
  }
  
  hide = (event) => {
    this.props.renderBeaches(event);
    this.setState({
      landingPage: false
    });
  }

  render() {
    if (this.state.landingPage) {
      return (
        <div className='landing-page'>
          <div className="sun">
            <div className="ray_box">
              <div className="ray ray1"></div>
              <div className="ray ray2"></div>
              <div className="ray ray3"></div>
              <div className="ray ray4"></div>
              <div className="ray ray5"></div>
              <div className="ray ray6"></div>
              <div className="ray ray7"></div>
              <div className="ray ray8"></div>
              <div className="ray ray9"></div>
              <div className="ray ray10"></div>
            </div>
          </div>
          <h1 className='headline'>BEACHY KEEN</h1>
          <p className='subhead'>SO CAL BEACHES</p>
            <button className='find-button' 
              onClick={this.hide}>Find Your Happy Place
            </button>
        </div>
      );
    } else {
      return (
        <div className='none'></div>
      );
    }
  } 
}

export default LandingPage;