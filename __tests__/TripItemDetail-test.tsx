import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import TripItemDetail from '../src/components/TripItemDetail'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const tree = renderer.create(<TripItemDetail type="time" value="1 hour" />)
  expect(tree).toMatchSnapshot()
})
