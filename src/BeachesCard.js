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
        <img className='popup-img' src={this.props.selectedBeach.image}/>
        <h1 className='popup-name' >{this.props.selectedBeach.name}</h1>
        <p className='popup-county'>{this.props.selectedBeach.county}</p>
        <ul className='popup-activ'>Activities:
           {
            this.props.selectedBeach.activities.map((activity) => {
              return <li>{activity}</li>
            })
           }
         </ul>
         <ul className='popup-amen'>Amenities:
           {
            beachProps.map((prop) => {
               if (this.props.selectedBeach[prop] === true) {
                 return <li>{prop}</li>
               }
            })
           }
        </ul>
        <button className='pop-btn' onClick={this.props.closeBeach}>X</button>
      </div>
    )
    }
  }
  
    

}


export default BeachesCard;
