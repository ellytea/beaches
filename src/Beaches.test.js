import React from 'react';
import Beaches from './Beaches.js';
import { mount, shallow } from 'enzyme';


describe('Beaches', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Beaches key= 'Beaches'/>
      )
})

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should change beachCard state to empty string when clicked', () => {
      wrapper.find('.beach-body').simulate('click');
      expect(wrapper.state('beachCard')).toEqual('');
  })

})

