import React from 'react';
import Beaches from './Beaches.js';
import { shallow } from 'enzyme';

const beaches = [{ "name": "Montaña de Oro State Beach",
    "county": "San Luis Obispo County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": false,
    "food-services": false,
    "facilities": true,
    "camping": true,
    "activities": ["Hiking", "Biking", "Surfing", "Horseback Riding", "Tidepooling", "Fishing", "Snorkeling", "Nature Viewing", "Wildlife Viewing", "Photography"],
    "hours": "6AM-10PM",
    "fire-pits": false,
    "image": "https://i.imgur.com/VdqbEDr.jpg" 

  },
  { "name": "Cayucos State Beach",
    "county": "San Luis Obispo County",
    "water-rating": 5,
    "pier": true,
    "pet-friendly": true,
    "food-services": true,
    "facilities": true,
    "camping": false,
    "activities": ["Fishing", "Swimming", "Surfing", "Boating", "Tidepooling"],
    "hours": "N/A",
    "fire-pits": false,
    "image": "https://i.imgur.com/u7gAUPB.png" 
  }];

describe('Beaches', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Beaches 
      key = {beaches}/>
      )
  })

it('should match the snapshot with all data passed in',() => {
  expect(wrapper).toMatchSnapshot();
})

})

