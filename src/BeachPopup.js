import React, { Component } from 'react';

class BeachPopup extends Component {
  constructor(props) {
    super()
  }


  render() {
    const beachProps = Object.keys(this.props.beach)
    return (
      <div>
        <a onClick={e => this.props.beachVisibility(e)} href='#'>x</a>
        <p>{this.props.beach.name}</p>
        <p>{this.props.beach.county}</p>
        <ul>
          {
            this.props.beach.activities.map((activity) => {
              return <li>{activity}</li>
          })}
        </ul>
        <ul>This beach has:
          {
            beachProps.map((prop) => {
              if (this.props.beach[prop] === true) {
                return <li>{prop}</li>
              }
            })
          }
        </ul>
      </div>
    )
  }
}

export default BeachPopup;