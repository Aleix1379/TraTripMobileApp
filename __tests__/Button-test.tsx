/**
 * @format
 */

import 'react-native'
import React from 'react'
import Button from '../src/components/Button'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Button label={'Save'} type={'contained'} />)
})

it('label is save', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'contained'} />
  )
  const label = wrapper.root.findByProps({ testID: testID })
  expect(label.props.label).toBe(text)
})

it('type is contained', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'contained'} />
  )
  const label = wrapper.root.findByProps({ testID: testID })
  expect(label.props.type).toBe('contained')
})

it('type is outline', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'outline'} />
  )
  const label = wrapper.root.findByProps({ testID: testID })
  expect(label.props.type).toBe('outline')
})

it('color is ACCENT', () => {
  const text = 'Book Now'
  const testID = 'button-book-now'
  const color = '#FF455B'

  const wrapper = renderer.create(
    <Button testID={testID} label={text} type={'contained'} color={color} />
  )
  const label = wrapper.root.findByProps({ testID: testID })
  expect(label.props.color).toBe(color)
})
