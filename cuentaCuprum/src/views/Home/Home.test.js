import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({ adapter: new Adapter() })

it('display component', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper).toBeDefined()
})