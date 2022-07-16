import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import TourDetails from '../src/screens/TourDetails'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const route = { params: { id: 1 } }
  const tree = renderer.create(<TourDetails route={route} />)
  expect(tree).toMatchSnapshot()
})

it('test without tours', () => {
  const route = { params: { id: 1 } }
  const tree = renderer.create(<TourDetails route={route} />)
  expect(tree).toMatchSnapshot()
})
