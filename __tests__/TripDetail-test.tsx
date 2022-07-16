import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import TripDetails from '../src/screens/TripDetails'
import { fireEvent, render } from '@testing-library/react-native'

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: () => ''
}))

jest.mock('../assets/data/trips.json', () => [
  {
    id: 1,
    image: 'tajmahal.png',
    city: 'Tajmahal',
    country: 'India',
    price: '$2000',
    rating: {
      score: 4.2,
      votes: 1500
    },
    information: {
      overview:
        'India is a country in South Asia. It is the seventh-largest country by area.',
      details:
        'Tajmahal is a historical and administrative center in India. It is located in the city of Agra, Uttar Pradesh, India.',
      reviews:
        'My experience was amazing! I was able to see the Taj Mahal from the top of the hill!',
      costs: 'Tajmal is free to visit'
    }
  },
  {
    id: 2,
    image: 'paris.png',
    city: 'Paris',
    country: 'France',
    price: '$1200',
    rating: {
      score: 3.9,
      votes: 14120
    },
    information: {
      overview:
        'Paris possesses a rich and attractive cultural scene with shows, activities and festivals.',
      details:
        'Paris is the capital of France and one of the most populous cities in Europe.',
      reviews: 'Paris is a great city to visit.',
      costs: 'The city is expensive.'
    }
  },
  {
    id: 3,
    image: 'barcelona.png',
    city: 'Barcelona',
    country: 'Spain',
    price: '$1360',
    rating: {
      score: 4.9,
      votes: 135309
    },
    information: {
      overview: 'Barcelona is a city in Spain.',
      details:
        'It is the capital of Catalonia and the second largest city in Spain.',
      reviews: 'I love Barcelona!',
      costs: 'The city is cheap.'
    }
  }
])

it('renders correctly', () => {
  const route = { params: { id: 1 } }
  const tree = renderer.create(<TripDetails route={route} />)
  expect(tree).toMatchSnapshot()
})

it('test with trip detail id 1', () => {
  const testId = 'trip-details'
  const route = { params: { id: 1 } }
  const { getByTestId } = render(<TripDetails testID={testId} route={route} />)
  const selectItems = getByTestId(`${testId}-select-items`)
  const selectItem = getByTestId(`${testId}-select-items-1`)
  fireEvent.press(selectItem)
  expect(selectItems.parent?.parent?.props.value).toBe('details')
})

it('test with trip detail id 2', () => {
  const testId = 'trip-details'
  const route = { params: { id: 2 } }
  const { getByTestId } = render(<TripDetails testID={testId} route={route} />)
  const selectItems = getByTestId(`${testId}-select-items`)
  const selectItem = getByTestId(`${testId}-select-items-2`)
  fireEvent.press(selectItem)
  expect(selectItems.parent?.parent?.props.value).toBe('reviews')
})

it('test with trip detail id 3', () => {
  const testId = 'trip-details'
  const route = { params: { id: 3 } }
  const { getByTestId } = render(<TripDetails testID={testId} route={route} />)
  const selectItems = getByTestId(`${testId}-select-items`)
  const selectItem = getByTestId(`${testId}-select-items-3`)
  fireEvent.press(selectItem)
  expect(selectItems.parent?.parent?.props.value).toBe('costs')
})

it('test without data', () => {
  const testId = 'trip-details'
  const route = { params: { id: 4 } }
  render(<TripDetails testID={testId} route={route} />)
})
