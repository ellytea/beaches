import React, { Component } from 'react';

class BeachCard extends Component {
  constructor(props) {
    super()
    this.state = {
      beach: {}
    };
  }


  render() {
    const beachProps = Object.keys(this.props.beach)
    return (
      <div>
        <a onClick={this.props.beachVisibility} href='#'>x</a>
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

export default BeachCard;