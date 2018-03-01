import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

Enzyme.configure({ adapter: new Adapter() })

it('display component', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toBeDefined()
})