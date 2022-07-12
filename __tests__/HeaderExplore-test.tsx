import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import HeaderExplore from '../src/components/Header/HeaderExplore'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const tree = renderer.create(<HeaderExplore title={'My app'} />)
  expect(tree).toMatchSnapshot()
})
