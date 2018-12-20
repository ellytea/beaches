import React, { Component } from 'react';
import BeachCard from './BeachCard.js'

class Beaches extends Component {
  constructor() {
    super();
    this.state = {
      beaches: [],
      beachCounties: [],
      cardVisible: false
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

  beachVisibility = () => {
      this.setState({
        cardVisible: !this.state.cardVisible
      })
  }

  render () {
    return (
      <div className='beaches-page'>
        <ul>
        {
          this.state.beaches.map((beach) => {
            return (
              <div className='beach-grid'>
                <div className='beach-card'>
                  <a onClick={this.beachVisibility} href='#'>{beach.name}</a>
                  <img className='beach-pics' src={beach.image}/>
                  {this.state.cardVisible && <BeachCard beach={beach} beachVisibility={this.beachVisibility} />}
                </div>
              </div>
            )
          })
        }
        </ul>
      </div>
    )
  }
}


export default Beaches;