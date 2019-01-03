import React, { Component } from 'react';
import './App.css';


class Maps extends Component {
  constructor() {
    super();
  }

    render () {
    return (
      <div className='maps-page'>
        <header className="header">
          <h1 className='header-title'>Beachy Keen</h1>
        </header>
        <div className='maps-body'>
            <section className='map map-slo-image'></section>
            <section className='map map-sd-image'></section>
            <section className='map map-santabarbara-image'></section>
            <section className='map map-orange-image'></section> 
            <section className='map map-ventura-image'></section>                        
          </div>
        </div>
    )
  }
}





export default Maps;