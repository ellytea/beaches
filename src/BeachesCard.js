import React, { Component } from 'react';


class BeachesCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className='popup'> 
        <p>{this.props.selectedBeach.name}</p>
        <p>{this.props.selectedBeach.county}</p>
      </div>
    )
  }
  
    

}


export default BeachesCard;
