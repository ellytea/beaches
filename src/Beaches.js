import React, { Component } from 'react';

class Beaches extends Component {
  constructor(props) {
    super();
    
  }



  render () {
    return (
      <div>
      {
        this.props.beaches.map((beach) => {
          return (
            <img src={beach.image} />
          )
        })
      }
      </div>
    )
  }
}


export default Beaches;