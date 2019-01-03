import React from 'react';
import Filter from './Filter.js';
import { mount, shallow } from 'enzyme';

const filterByCountyMock = jest.fn()

const beachCounties = [
  {
      "name": "San Luis Obispo County",
      "beaches": [ "Montaña de Oro State Beach", "Cayucos State Beach", "Pismo State Beach", "William Randolph Hearst Memorial State Beach" ]
  }];

describe('Filter', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Filter filterByCounty={filterByCountyMock}
              beachCounties={beachCounties} />
      )
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should invoke filterByCounty function', () => {
    wrapper.find('.filter').simulate('change', { target: {value: "San Luis Obispo County"} })
    expect(filterByCountyMock).toBeCalled();
  })

})