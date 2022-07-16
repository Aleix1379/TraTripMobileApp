import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import SelectItems from '../src/components/SelectItems'
import { fireEvent, render } from '@testing-library/react-native'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const items = ['category1', 'category2', 'category3']
  const onItemChange = jest.fn()
  const tree = renderer.create(
    <SelectItems
      value={items[0]}
      items={items}
      onItemChange={onItemChange}
      style={{ backgroundColor: 'red' }}
    />
  )
  expect(tree).toMatchSnapshot()
})

it('renders correctly with no items', () => {
  const tree = renderer.create(
    <SelectItems value={[]} items={[]} onItemChange={() => {}} />
  )
  expect(tree).toMatchSnapshot()
})

it('check if onItemChange is called', () => {
  const items = ['category1', 'category2', 'category3']
  const onItemChange = jest.fn()
  const testID = 'select-items'
  const { getByTestId } = render(
    <SelectItems
      value={items[0]}
      testID={testID}
      items={items}
      onItemChange={onItemChange}
    />
  )
  const item = getByTestId('select-items-1')
  fireEvent.press(item)
  expect(onItemChange).toHaveBeenCalledWith(items[1])
})
