import React from 'react';
import BeachesCard from './BeachesCard.js';
import { shallow } from 'enzyme';

const closeBeachMock = jest.fn();

describe('BeachesCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BeachesCard closeBeach={closeBeachMock} />
      )
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })


})