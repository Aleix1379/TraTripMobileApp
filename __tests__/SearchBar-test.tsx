import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import SearchBar from '../src/components/SearchBar'
import { fireEvent, render } from '@testing-library/react-native'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const testID = 'search-bar'
  const title = 'Search'
  const onChangeText = jest.fn()
  const tree = renderer.create(
    <SearchBar testID={testID} title={title} onTextChange={onChangeText} />
  )
  expect(tree).toMatchSnapshot()
})

it('check title is the same as passed', () => {
  const testID = 'search-bar'
  const title = 'Search'
  const onChangeText = jest.fn()
  const tree = renderer.create(
    <SearchBar testID={testID} title={title} onTextChange={onChangeText} />
  )
  expect(tree.root.findByProps({ testID }).props.title).toBe(title)
})

it('check onChangeText is called with Finland', () => {
  const testID = 'search-bar'
  const title = 'Search'
  const onChangeText = jest.fn()
  const { getByTestId } = render(
    <SearchBar testID={testID} title={title} onTextChange={onChangeText} />
  )
  const input = getByTestId('search-bar-input')
  fireEvent.changeText(input, 'Finland')
  expect(onChangeText).toHaveBeenCalledWith('Finland')
})
