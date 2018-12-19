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