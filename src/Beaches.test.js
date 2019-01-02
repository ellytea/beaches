import React from 'react';
import Beaches from './Beaches.js';
import { mount } from 'enzyme';

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

const beach = [{ "name": "Oxnard Beach Park",
    "county": "Ventura County",
    "water-rating": null,
    "pier": false,
    "pet-friendly": true,
    "food-services": false,
    "facilities": true,
    "camping": false,
    "activities": ["Volleyball", "Swimming", "Surfing", "Sunbathing", "Biking", "Grilling", "Basketball", "Playground"],
    "hours": "N/A",
    "fire-pits": false,
    "image":"https://i.imgur.com/uziPYW4.jpg"
  }];

describe('Beaches', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Beaches key= {beaches}/>
      )
})

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should display beach card when clicked', () => {
      wrapper.find('.beach-card').simulate('click', { target: {innerText: "Oxnard Beach Park"} });
      expect(wrapper.state('beachCard')).toEqual(beach);
  })

  it('should change beachCard state to undefined when clicked', () => {
      wrapper.find('.pop-btn').simulate('click');
      expect(wrapper.state('beachCard')).toEqual(undefined);
  })

  it('should change beaches state to filteredbeaches', () => {
      wrapper.find('.filter-names').simulate('change', { target: {value: "Ventura County"} });
      expect(wrapper.state('beaches')).toEqual(beach);
  })

  it('should change beaches state to all beaches', () => {
      wrapper.find('.filter-names').simulate('change', { target: {value: "all-counties"} });
      expect(wrapper.state('beaches')).toEqual(beaches);
  })

})

