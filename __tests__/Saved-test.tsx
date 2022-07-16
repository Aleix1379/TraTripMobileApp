import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Saved from '../src/screens/Saved'
import { fireEvent, render } from '@testing-library/react-native'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn()
  })
}))

it('renders correctly', () => {
  const navigation = { navigate: jest.fn() }
  const tree = renderer.create(<Saved navigation={navigation} />)
  expect(tree).toMatchSnapshot()
})

it('test go to trip details', () => {
  const navigation = { navigate: jest.fn() }
  const { getByTestId } = render(<Saved navigation={navigation} />)
  const horizontalProductList = getByTestId('trips-horizontal-product-list-1')
  fireEvent.press(horizontalProductList)
  expect(navigation.navigate).toHaveBeenCalledWith('TripDetails', {
    id: 1
  })
})

it('test go to tour details', () => {
  const navigation = { navigate: jest.fn() }
  const { getByTestId } = render(<Saved navigation={navigation} />)
  const horizontalProductList = getByTestId('tours-horizontal-product-list-1')
  fireEvent.press(horizontalProductList)
  expect(navigation.navigate).toHaveBeenCalledWith('TourDetails', {
    id: 1
  })
})
