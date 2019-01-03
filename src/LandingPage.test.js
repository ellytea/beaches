import React from 'react'
import LandingPage from './LandingPage'
import { shallow } from 'enzyme'

const renderBeachesMock = jest.fn();

describe ('LandingPage', () => {
  let wrapper = shallow(
    <LandingPage renderBeaches={renderBeachesMock} />
    )


  it('should change landingPage state to false when clicked', () => {
        wrapper.find('.landing-button').simulate('click');
        expect(wrapper.state('landingPage')).toEqual(false);
    })

})