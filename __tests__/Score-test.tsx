import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Score from '../src/components/Score'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const tree = renderer.create(<Score score={3} />)
  expect(tree).toMatchSnapshot()
})
