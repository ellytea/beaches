import React, { Component } from 'react';

class Beaches extends Component {
  constructor(props) {
    super();
    
  }



  render () {
    return (
      <ul>
      {
        this.props.beaches.map((beach) => {
          return (
            <li>{beach.name}</li>
          )
        })
      }
      </ul>
    )
  }
}


export default Beaches;