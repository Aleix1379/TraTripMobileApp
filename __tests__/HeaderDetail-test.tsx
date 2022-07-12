import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import HeaderDetail from '../src/components/Header/HeaderDetail'
import { fireEvent, render } from '@testing-library/react-native'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn()
  })
}))

it('renders correctly', () => {
  const tree = renderer.create(<HeaderDetail />)
  expect(tree).toMatchSnapshot()
})

it('Test navigation go back is called correctly', () => {
  const testID = 'header-detail'
  const { getByTestId } = render(<HeaderDetail testID={testID} />)
  const button = getByTestId(`${testID}-button`)
  fireEvent.press(button)
})
