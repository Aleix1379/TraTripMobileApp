import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import HeaderHome from '../src/components/Header/HeaderHome'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const tree = renderer.create(<HeaderHome />)
  expect(tree).toMatchSnapshot()
})
