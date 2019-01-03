import React, { Component } from 'react';
import './App.css';


class LandingPage extends Component {
  constructor() {
    super()
    this.state = {
      landingPage: true
    }
  }
  
  hide = (event) => {
    this.props.renderBeaches(event)
    this.setState({
      landingPage: false
    })
  }

  render() {
    if (this.state.landingPage) {
      return (
        <div className='landing-page'>
          <div className='landing-details-section'>
            <h1 className='landing-headline'>BEACHY KEEN</h1>
            <p className='landing-subhead'>SOUTHERN CALIFORNIA BEACHES</p>
            <button className='landing-button' 
              onClick={this.hide}>Find Your Happy Place</button>
          </div>
          <div className='sun'></div>
        </div>
      )
    } else {
      return (
        <div className='none'></div>
      )
    }
  } 
}

export default LandingPage;