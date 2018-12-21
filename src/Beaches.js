import React, { Component } from 'react';
import BeachesCard from './BeachesCard.js';
// import { beachCounties, beaches } from './data.js'


class Beaches extends Component {
  constructor() {
    super();
    this.state = {
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
      return beach.name === name;
    })
    this.setState({
      beachCard: selectedBeach
    })
  console.log(selectedBeach)
  }


  render () {
    return (
      <div className='beaches-page'>
        <div className='beach-body'>
        {
          this.state.beaches.map((beach) => {
            return (
                <div onClick={this.beachVisibility}
                     className='beach-card'>
                     <h1>{beach.name}</h1> 
                     <img className='beach-pics' src={beach.image}/>
                </div>
            )
          })
        }
        </div>
        <BeachesCard selectedBeach={this.state.beachCard} /> 
      </div>
    )
  }
}


export default Beaches;