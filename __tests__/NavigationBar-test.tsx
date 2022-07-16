import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import NavigationBar from '../src/components/BottomNavigation/NavigationBar'
import { fireEvent, render } from '@testing-library/react-native'
import NavigationButton from '../src/components/BottomNavigation/NavigationButton'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn()
  }),
  useNavigationState: () => ({
    index: 0,
    routes: [
      {
        name: 'Home',
        key: 'Home'
      },
      {
        name: 'Explore',
        key: 'Explore'
      }
    ]
  })
}))

it('renders correctly', () => {
  const tree = renderer.create(<NavigationBar />)
  expect(tree).toMatchSnapshot()
})

it('Test navigation to Home is called correctly', () => {
  const testID = 'navigation-home'
  const label = 'Explore'
  const to = 'Explore'
  const icon = 'location'
  const isActive = true
  const { getByTestId } = render(
    <NavigationBar>
      <NavigationButton
        testID={testID}
        label={label}
        to={to}
        icon={icon}
        isActive={isActive}
      />
    </NavigationBar>
  )
  const button = getByTestId('nav-home-button')
  fireEvent.press(button)
})
