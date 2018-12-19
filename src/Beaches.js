import React, { Component } from 'react';
// import { beachCounties, beaches } from './data.js'


class Beaches extends Component {
  constructor() {
    super();
    this.state = {
      beaches: [],
      beachCounties: []
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

  render () {
    return (
      <div className='beaches-page'>

        <ul>
        {
          this.state.beaches.map((beach) => {
            return (
              <div className='beach-grid'>
                <ul>{beach.name}</ul>
                <img src={beach.image}/>
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