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
      .catch(error => console.log('first fetch', error))


    fetch('https://whateverly-datasets.herokuapp.com/api/v1/beachCounties')
      .then(response => response.json())
      .then(data => {
        this.setState({
          beachCounties: data.beachCounties,
        })
      })
      .catch(error => console.log('second fetch', error))
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

  closeBeach = () => {
    this.setState({
      beachCard: ''
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
    return (
      <div className='beaches-page'>
        <header className='header'>
        <h1 className='header-title'>Beachy Keen</h1>
        </header>
        <h2 className='header-subhead'>Explore Southern California's Impeccable Coastline</h2>
        <section className='beach-image'>
          <div className='stacked-image borderbox'>
            <img src='https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2Fimage%2F2016%2F08%2Fmain%2Fpfeiffer-beach-california-607948645.jpg%3Fitok%3DwSIExkKn&w=1600&q=70' width="500" height="400" />
          </div>
          <p className='arrow'>&#x25BC;</p>
        </section>
        <section className='filter-section'>
          <h1 className='filter-headline'>Filter Your Search</h1>
          <Filter filterByCounty={this.filterByCounty}
                  beachCounties={this.state.beachCounties}/>
        </section>
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