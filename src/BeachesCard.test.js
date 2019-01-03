import React from 'react';
import { shallow } from 'enzyme';
import BeachesCard from './BeachesCard.js';

const beach = { "name": "Montaña de Oro State Beach",
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
  };

const closeMock = jest.fn();

describe ('BeachesCard', () => {
  let wrapper = shallow(
    <BeachesCard selectedBeach = {beach}
                 closeBeach = {closeMock} />
    )

  it('should make a card from the beach info', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke closeBeach when clicked', () => {
      wrapper.find('.pop-btn').simulate('click');
      expect(closeMock).toBeCalled();
  })

})