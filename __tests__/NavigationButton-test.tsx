import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import NavigationButton from '../src/components/BottomNavigation/NavigationButton'
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
  const testID = 'navigation-button'
  const label = 'Home'
  const to = 'Home'
  const icon = 'home'
  const isActive = true
  const tree = renderer.create(
    <NavigationButton
      testID={testID}
      label={label}
      to={to}
      icon={icon}
      isActive={isActive}
    />
  )
  expect(tree).toMatchSnapshot()
})

it('Test is active is false', () => {
  const testID = 'navigation-button'
  const label = 'Home'
  const to = 'Home'
  const icon = 'home'
  const isActive = false
  const tree = renderer.create(
    <NavigationButton
      testID={testID}
      label={label}
      to={to}
      icon={icon}
      isActive={isActive}
    />
  )
  expect(tree).toMatchSnapshot()
})

it('Test navigation to Home is called correctly', () => {
  const testID = 'navigation-home'
  const label = 'Home'
  const to = 'Home'
  const icon = 'home'
  const isActive = true
  const { getByTestId } = render(
    <NavigationButton
      testID={testID}
      label={label}
      to={to}
      icon={icon}
      isActive={isActive}
    />
  )
  const button = getByTestId(testID + '-button')
  fireEvent.press(button)
})
