import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import BottomSheet from '../src/components/BottomSheet'
import { Text } from 'react-native'

it('renders correctly', () => {
  const tree = renderer.create(
    <BottomSheet>
      <Text>Testing</Text>
    </BottomSheet>
  )
  expect(tree).toMatchSnapshot()
})

it('renders the correct text', () => {
  const tree = renderer.create(
    <BottomSheet>
      <Text>Testing</Text>
    </BottomSheet>
  )
  expect(tree.root.findByType(Text).props.children).toBe('Testing')
})

it('renders with custom styles', () => {
  const tree = renderer.create(
    <BottomSheet style={{ backgroundColor: 'green' }}>
      <Text>Testing</Text>
    </BottomSheet>
  )
  expect(tree.root.findByType(BottomSheet).props.style.backgroundColor).toBe(
    'green'
  )
})
