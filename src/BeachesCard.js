import React, { Component } from 'react';


class BeachesCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    const beachProps = this.props.selectedBeach ? Object.keys(this.props.selectedBeach) : []
    if (!this.props.selectedBeach) {
      return ( <div className='none'></div> );
    } else {
    return (
      <div className='popup'>
        <button className='pop-btn' onClick={this.props.closeBeach}>X close</button>
        <img className='popup-img' src={this.props.selectedBeach.image}/>
        <p>{this.props.selectedBeach.name}</p>
        <p>{this.props.selectedBeach.county}</p>
        <ul>Recommended Activities:
           {
            this.props.selectedBeach.activities.map((activity) => {
              return <li>{activity}</li>
            })
           }
         </ul>
         <ul>This beach has:
           {
            beachProps.map((prop) => {
               if (this.props.selectedBeach[prop] === true) {
                 return <li>{prop}</li>
               }
            })
           }
         </ul>
      </div>
    )
    }
  }
  
    

}


export default BeachesCard;
