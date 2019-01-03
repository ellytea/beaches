import React from 'react';
import Beaches from './Beaches.js';
import { mount, shallow } from 'enzyme';

const beaches = [
  { "name": "Montaña de Oro State Beach",
    "county": "San Luis Obispo County",
    "image": "https://i.imgur.com/VdqbEDr.jpg" 
  },
  { "name": "Cayucos State Beach",
    "county": "San Luis Obispo County",
    "image": "https://i.imgur.com/u7gAUPB.png" 
  }];

  const beach = { "name": "Montaña de Oro State Beach",
    "county": "San Luis Obispo County",
    "image": "https://i.imgur.com/VdqbEDr.jpg" 
  };

describe('Beaches', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Beaches key= 'Beaches'/>
      )
    wrapper.setState({
      beaches: beaches
    })
})

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

})

