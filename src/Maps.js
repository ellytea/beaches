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
        <section className='maps-subhead'>
          <i class="fas fa-map-marker-alt"></i>
          <h1 className='maps-details'>Find a Beach</h1>
        </section>
        <div className='maps-body'>
            <section>
              <h1 className='title'>San Luis Obispo County</h1>
              <div className='map map-slo-image'></div>
            </section>
            <section>
              <h1 className='title'>Santa Barbara County</h1>
              <div className='map map-santabarbara-image'></div>
            </section>
            <section>
              <h1 className='title'>Los Angelos County</h1>
              <div className='map map-la-image'></div>
            </section>
            <section>
              <h1 className='title'>Orange County</h1>
              <div className='map map-orange-image'></div>
            </section> 
            <section>
              <h1 className='title'>San Diego County</h1>
              <div className='map map-sd-image'></div>
            </section>
            <section> 
              <h1 className='title'>Ventura County</h1>
              <div className='map map-ventura-image'></div>
            </section>                        
          </div>
        </div>
    )
  }
}





export default Maps;