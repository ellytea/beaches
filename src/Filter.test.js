import React from 'react';
import Filter from './Filter.js';
import { shallow } from 'enzyme';



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