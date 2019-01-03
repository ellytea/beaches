import React from 'react';
import Beaches from './Beaches.js';
import { mount, shallow } from 'enzyme';

const beaches = [
  { "name": "Montaña de Oro State Beach",
    "county": "San Luis Obispo County",
    "image": "https://i.imgur.com/VdqbEDr.jpg" 
  }];

const beach = { "name": "Montaña de Oro State Beach",
  "county": "San Luis Obispo County",
  "image": "https://i.imgur.com/VdqbEDr.jpg" 
};

const beachCounties = [
  {
      "name": "San Luis Obispo County",
      "beaches": [ "Montaña de Oro State Beach", "Cayucos State Beach", "Pismo State Beach", "William Randolph Hearst Memorial State Beach" ]
  }];

describe('Beaches', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Beaches key= 'Beaches'/>
      )
    wrapper.setState({
      beaches: beaches,
      allBeaches: beaches,
      beachCounties: beachCounties,
      beachCard: beach
    })
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should set beachCard state to a beach', () => {
    wrapper.find('.beach-card').simulate('click', { target: {innerText: 'MONTAÑA DE ORO STATE BEACH'} })
    expect(wrapper.state('beachCard')).toEqual(beach);
  })

})

