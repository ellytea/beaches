import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage'
import { shallow } from 'enzyme'

const renderBeachesMock = jest.fn();

describe ('LandingPage', () => {
  let wrapper = shallow(
    <LandingPage renderBeaches={renderBeachesMock} />
    )


  it('should change beachCard state to empty string when clicked', () => {
        wrapper.find('.landing-button').simulate('click');
        expect(wrapper.state('landingPage')).toEqual(false);
    })

})