import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../src/screens/Home'
import { fireEvent, render } from '@testing-library/react-native'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const navigation = { navigate: jest.fn() }
  const tree = renderer.create(<Home navigation={navigation} />)
  expect(tree).toMatchSnapshot()
})

it('Test SearchBar is updated correctly', () => {
  const navigation = { navigate: jest.fn() }
  const testID = 'home'
  const { getByTestId } = render(
    <Home testID={testID} navigation={navigation} />
  )
  const searchBar = getByTestId('search-bar-input')
  fireEvent.changeText(searchBar, 'Estonia')
  expect(searchBar.props.value).toBe('Estonia')
})

it('Test HorizontalProductList is pressed correctly', () => {
  const navigation = { navigate: jest.fn() }
  const testID = 'home'
  const { getByTestId } = render(
    <Home testID={testID} navigation={navigation} />
  )
  const horizontalProductList = getByTestId('home-horizontal-product-list-1')
  fireEvent.press(horizontalProductList)
  expect(navigation.navigate).toHaveBeenCalledWith('TripDetails', {
    id: 1
  })
})

it('Test SelectItem value changes after press', () => {
  const navigation = { navigate: jest.fn() }
  const testID = 'home'
  const { getByTestId } = render(
    <Home testID={testID} navigation={navigation} />
  )
  const selectItems = getByTestId('select-category')
  const button = getByTestId('select-category-2')
  fireEvent.press(button)
  expect(selectItems.parent?.parent?.props.value).toBe('Europe')
})

it('Test ProductSelector value changes after press', () => {
  const navigation = { navigate: jest.fn() }
  const testID = 'home'
  const { getByTestId } = render(
    <Home testID={testID} navigation={navigation} />
  )
  const selectItems = getByTestId('select-products')
  const button = getByTestId('select-products-2')
  fireEvent.press(button)
  expect(selectItems.parent?.parent?.props.value).toStrictEqual({
    id: 2,
    image: { testUri: '../../../assets/images/hotel.png' },
    name: 'Hotel'
  })
})
