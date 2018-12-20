import React, { Component } from 'react';
import BeachPopup from './BeachPopup.js'

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

  beachVisibility = (e, name) => {
    let index;
    let beaches = this.state.beaches
    return beaches.find((beach, i) => {
     if (beach.name === name) {
        index = i
      } 
      beaches[index].isVisible = true
      this.setState({
        beaches: beaches
      }) 
    })
  } 

  // beachVisibility = (e, name) => {
  //   if (e.target.innerText === name)
  //     this.setState({
  //       cardVisible: !this.state.cardVisible
  //     })
  // }

  render () {
    return (
      <div className='beaches-page'>
        <div className='beach-grid'>
        {
          this.state.beaches.map((beach) => {
            return (
                  <div key={beach.name}
                        className='beach-card'>
                        <p onClick={e => this.beachVisibility(e, beach.name)}>{beach.name}</p>
                    <img className='beach-pics' src={beach.image}/>
                    {beach.isVisible && <BeachPopup beachVisibility={this.beachVisibility}
                                                   beach={beach} />}
                  </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}


export default Beaches;