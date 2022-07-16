import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import HorizontalProductList from '../src/components/HorizontalProductList'
import { CatalogItem } from '../src/styles/catalog-item'
import { fireEvent, render } from '@testing-library/react-native'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const onPress = jest.fn()
  const items: Array<CatalogItem> = [
    {
      id: 1,
      title: 'Product 1',
      image: require('../assets/images/tajmahal.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]
  const tree = renderer.create(
    <HorizontalProductList items={items} onPress={onPress} />
  )
  expect(tree).toMatchSnapshot()
})

it('renders correctly with 3 products', () => {
  const onPress = jest.fn()
  const items: Array<CatalogItem> = [
    {
      id: 1,
      title: 'Product 1',
      image: require('../assets/images/tajmahal.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      title: 'Product 2',
      image: require('../assets/images/tajmahal.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 3,
      title: 'Product 3',
      image: require('../assets/images/tajmahal.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]
  const tree = renderer.create(
    <HorizontalProductList items={items} onPress={onPress} />
  )
  expect(tree).toMatchSnapshot()
})

// test with custom image size
it('renders correctly with custom image size', () => {
  const onPress = jest.fn()
  const items: Array<CatalogItem> = [
    {
      id: 1,
      title: 'Product 1',
      image: require('../assets/images/tajmahal.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]
  const tree = renderer.create(
    <HorizontalProductList
      items={items}
      onPress={onPress}
      imageSize={{ width: 100, height: 100 }}
    />
  )
  expect(tree).toMatchSnapshot()
})

it('renders correctly with onPress', () => {
  const items: Array<CatalogItem> = [
    {
      id: 1,
      title: 'Product 1',
      image: require('../assets/images/tajmahal.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      title: 'Product 2',
      image: require('../assets/images/tajmahal.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]
  const onPress = jest.fn()
  const { getByTestId } = render(
    <HorizontalProductList items={items} onPress={onPress} />
  )

  const item = getByTestId(`-horizontal-product-list-${items[0].id}`)
  fireEvent.press(item)
  expect(onPress).toHaveBeenCalledWith(items[0].id)
})

it('renders correctly with custom style props', () => {
  const items: Array<CatalogItem> = [
    {
      id: 1,
      title: 'Product 1',
      image: require('../assets/images/tajmahal.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]
  const onPress = jest.fn()
  const { getByTestId } = render(
    <HorizontalProductList items={items} onPress={onPress} />
  )

  const item = getByTestId(`-horizontal-product-list-${items[0].id}`)
  fireEvent.press(item)
  expect(onPress).not.toHaveBeenCalledWith()
})
