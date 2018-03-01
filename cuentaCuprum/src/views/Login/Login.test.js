import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme'
import { Modal } from 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import Login from './Login'

Enzyme.configure({ adapter: new Adapter() })

describe ('Login component',() => {
    it('display component', () => {
        const wrapper = shallow(<Login />)

        expect(wrapper).toBeDefined()
    })
})



