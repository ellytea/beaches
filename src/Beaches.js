import React, { Component } from 'react';
import { beachCounties, beaches } from './data.js'


class Beaches extends Component {
  constructor() {
    super();
    this.state = {
      beaches: beaches
    }
  }

  render () {
    return (
      <div className='beaches-page'>

        <ul>
        {
          this.state.beaches.map((beach) => {
            return (
              <li>{beach.name}</li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}


export default Beaches;