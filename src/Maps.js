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
          <section className='map map-slo'>
            <h2 className="map-name">SAN LUIS OBISBO</h2>
          </section>
          <section className='map map-sd'>
            <h2 className="map-name">SAN DIEGO</h2>
          </section>
          <section className='map map-santabarbara'>
            <h2 className="map-name">SANTA BARBARA</h2>
          </section>
          <section className='map map-santamonica'>
            <h2 className="map-name">SANTA MONICA</h2>
          </section>  
          <section className='map map-losangelos'>
            <h2 className="map-name">LOS ANGELOS</h2>
          </section>
          <section className='map map-orange'>
            <h2 className="map-name">ORANGE COUNTY</h2>
          </section> 
          <section className='map map-ventura'>
            <h2 className="map-name">VENTURA COUTY</h2>
          </section>                        
        </div>
      </div>
    )
  }
}





export default Maps;