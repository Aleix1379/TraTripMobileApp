import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import HorizontalProductList from '../src/components/HorizontalProductList'
import { CatalogItem } from '../src/styles/catalog-item'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

it('renders correctly', () => {
  const testID = 'list-id'
  const items: Array<CatalogItem> = [
    {
      id: 1,
      title: 'Product 1',
      image: require('../assets/images/tajmahal.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]
  const tree = renderer.create(
    <HorizontalProductList testID={testID} items={items} />
  )
  expect(tree).toMatchSnapshot()
})

it('renders correctly with 3 products', () => {
  const testID = 'list-id'
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
    <HorizontalProductList testID={testID} items={items} />
  )
  expect(tree).toMatchSnapshot()
})

// test with custom image size
it('renders correctly with custom image size', () => {
  const testID = 'list-id'
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
      testID={testID}
      items={items}
      imageSize={{ width: 100, height: 100 }}
    />
  )
  expect(tree).toMatchSnapshot()
})

it('renders correctly with onPress', () => {
  const testID = 'list-id'
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
  const tree = renderer.create(
    <HorizontalProductList testID={testID} items={items} onPress={onPress} />
  )
  tree.root
    .findByProps({ testID })
    .findByProps({ testID: 'horizontal-product-row-' + items[0].id })
    .props.onTouchEnd()

  expect(onPress).toHaveBeenCalledWith(items[0].id)
})

it('renders correctly with custom style props', () => {
  const testID = 'list-id'
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
      testID={testID}
      items={items}
      style={{ backgroundColor: 'red' }}
    />
  )
  const element = tree.root.findByProps({ testID: testID })
  expect(element.props.style.backgroundColor).toBe('red')
})
