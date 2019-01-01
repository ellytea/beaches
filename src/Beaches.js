import React, { Component } from 'react';
import BeachesCard from './BeachesCard.js';
import Filter from './Filter.js';
import './App.css';


class Beaches extends Component {
  constructor() {
    super();
    this.state = {
      allBeaches: [],
      beaches: [],
      beachCounties: [],
      beachCard: ''
    }
  }

  componentDidMount(){
    fetch('https://whateverly-datasets.herokuapp.com/api/v1/beaches')
      .then(response => response.json())
      .then(data => {
        this.setState({
          beaches: data.beaches,
          allBeaches: data.beaches
        })
      })
      .catch(error => console.log('error'))


    fetch('https://whateverly-datasets.herokuapp.com/api/v1/beachCounties')
      .then(response => response.json())
      .then(data => {
        this.setState({
          beachCounties: data.beachCounties,
        })
      })
      .catch(error => console.log('error'))
  }

  beachVisibility = (e) => {
    let name = e.target.innerText;
    let selectedBeach = this.state.beaches.find((beach) => {
      return beach.name.toUpperCase() === name;
    })
    this.setState({
      beachCard: selectedBeach
    })
  }

  closeBeach = (e) => {
    this.setState({
      beachCard: undefined
    })
  }

  filterByCounty = (e) => {
    let filteredBeaches = [];

    this.state.beaches.filter((beach) => {
      if (e.target.value === beach.county) {
        filteredBeaches.push(beach)
        this.setState({
          beaches: filteredBeaches
        })
      } else if (e.target.value === 'all-counties') {
        this.setState({
          beaches: this.state.allBeaches
        })  
      }
    })
  }
    
  render () {
    console.log('beach card',this.state.beachCard, 'close beach', this.closeBeach)
    return (
      <div className='beaches-page'>
        <header className="header">
        <h1 className='header-title'>Beachy Keen</h1>
        </header>
        <Filter filterByCounty={this.filterByCounty}
                beachCounties={this.state.beachCounties}/>
        <div className='beach-body'>
        {
          this.state.beaches.map((beach) => {
            return (
                <div onClick={this.beachVisibility}
                     className='beach-card'>
                     <h1 className='beach-name'>{beach.name}</h1> 
                     <h2 className='beach-county'>{beach.county}</h2>
                     <img className='beach-pics' src={beach.image}/>
                </div>
            )
          })
        }
        </div>
        <BeachesCard selectedBeach={this.state.beachCard} closeBeach={this.closeBeach} /> 
      </div>
    )
  }
}


export default Beaches;