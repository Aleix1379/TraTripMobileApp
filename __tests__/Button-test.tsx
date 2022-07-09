import 'react-native'
import React from 'react'
import Button from '../src/components/Button'
import renderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/react-native'

it('renders correctly', () => {
  renderer.create(<Button label={'Save'} type={'contained'} />)
})

it('label is save', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'contained'} />
  )
  const button = wrapper.root.findByProps({ testID: testID })
  expect(button.props.label).toBe(text)
})

it('type is contained', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'contained'} />
  )
  const button = wrapper.root.findByProps({ testID: testID })
  expect(button.props.type).toBe('contained')
})

it('type is outline', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'outline'} />
  )
  const button = wrapper.root.findByProps({ testID: testID })
  expect(button.props.type).toBe('outline')
})

it('color is ACCENT', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'
  const color = '#FF455B'

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'contained'} color={color} />
  )
  const button = wrapper.root.findByProps({ testID: testID })
  expect(button.props.color).toBe(color)
})

it('onPress is called', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'
  const onPress = jest.fn()

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'contained'} onPress={onPress} />
  )
  const button = wrapper.root.findByProps({ testID: testID })
  fireEvent.press(button)
  expect(onPress).toHaveBeenCalled()
})

it('onPress is not passed', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'
  const onPress = jest.fn()

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'contained'} />
  )
  const button = wrapper.root.findByProps({ testID: testID })
  fireEvent.press(button)
  expect(onPress).not.toHaveBeenCalled()
})
