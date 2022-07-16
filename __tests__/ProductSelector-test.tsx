import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Product } from '../src/types/product'
import ProductSelector from '../src/components/ProductSelector'
import { fireEvent, render } from '@testing-library/react-native'

it('renders correctly', () => {
  const items: Array<Product> = [
    {
      id: 1,
      name: 'Product 1',
      image: require('../assets/images/tajmahal.png')
    }
  ]
  const onProductSelected = jest.fn()
  const tree = renderer.create(
    <ProductSelector
      value={items[0]}
      items={items}
      onProductSelected={onProductSelected}
    />
  )
  expect(tree).toMatchSnapshot()
})

it('renders correctly with onProductSelected', () => {
  const items: Array<Product> = [
    {
      id: 1,
      name: 'Product 1',
      image: require('../assets/images/tajmahal.png')
    },
    {
      id: 2,
      name: 'Product 2',
      image: require('../assets/images/tajmahal.png')
    }
  ]
  const onProductSelected = jest.fn()
  const { getByTestId } = render(
    <ProductSelector
      value={items[0]}
      items={items}
      onProductSelected={onProductSelected}
    />
  )
  fireEvent.press(getByTestId(`select-products-${items[0].id}`))
  expect(onProductSelected).toHaveBeenCalledWith(items[0])
})

it('renders correctly with custom style props', () => {
  const testID = 'select-products'
  const items: Array<Product> = [
    {
      id: 1,
      name: 'Product 1',
      image: require('../assets/images/tajmahal.png')
    }
  ]
  const onProductSelected = jest.fn()
  const tree = renderer.create(
    <ProductSelector
      value={items[0]}
      items={items}
      onProductSelected={onProductSelected}
      style={{ backgroundColor: 'red' }}
    />
  )
  const element = tree.root.findByProps({ testID: testID })
  expect(element.parent?.props.style.backgroundColor).toBe('red')
})
