import React, { useState } from 'react'
import { ImageSourcePropType, ScrollView, StyleSheet, Text } from 'react-native'
import useTheme from '../styles/useTheme'
import SearchBar from '../components/SearchBar'
import SelectItems from '../components/SelectItems'
import ProductSelector from '../components/ProductSelector'
import { Product } from '../types/product'
import HorizontalProductList from '../components/HorizontalProductList'
import { Trip } from '../types/trip'
import jsonTrips from '../../assets/data/trips.json'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type homeScreenProp = StackNavigationProp<any>

interface HomeState {
  popularCategories: Array<Product>
}

const Home = () => {
  const navigation = useNavigation<homeScreenProp>()
  const theme = useTheme()
  const { colors } = theme
  const [categories] = useState<Array<string>>([
    'All',
    'America',
    'Europe',
    'Asia',
    'Oceania'
  ])
  const [popularCategories] = useState<HomeState['popularCategories']>([
    {
      id: 1,
      image: require('../../assets/images/trips.png'),
      name: 'Trips'
    },
    {
      id: 2,
      image: require('../../assets/images/hotel.png'),
      name: 'Hotel'
    },
    {
      id: 3,
      image: require('../../assets/images/transport.png'),
      name: 'Transport'
    },
    {
      id: 4,
      image: require('../../assets/images/events.png'),
      name: 'Events'
    }
  ])
  const [images] = useState<{ [key: string]: ImageSourcePropType }>({
    'tajmahal.png': require('../../assets/images/tajmahal.png'),
    'paris.png': require('../../assets/images/paris.png')
  })
  const [trips] = useState<Array<Trip>>(jsonTrips)

  const loadTripsByCategory = (newCategory: string) => {
    console.info('newCategory:', newCategory)
  }

  const selectCategory = (product: Product) => {
    console.info('product:', product)
  }

  return (
    <ScrollView style={[styles.home, { backgroundColor: colors.BACKGROUND }]}>
      <Text style={[styles.title, { color: colors.GREY }]}>Discover</Text>

      <Text style={[styles.description, { color: colors.GREY }]}>
        Explore the best places in world!
      </Text>

      <SearchBar
        style={styles.searchBar}
        title={'Search your trip'}
        onTextChange={text => console.log(text)}
      />

      <SelectItems
        items={categories}
        onItemChange={loadTripsByCategory}
        style={{ marginTop: 40 }}
      />

      <HorizontalProductList
        onPress={(id: number) => navigation.navigate('TripDetails', { id })}
        items={trips.map(trip => ({
          id: trip.id,
          image: images[trip.image],
          title: trip.city + ', ' + trip.country,
          description: 'Starting at ' + trip.price
        }))}
        style={styles.trips}
      />

      <Text style={[styles.popularCategoryTitle, { color: colors.GREY }]}>
        Popular Categories
      </Text>
      <ProductSelector
        style={styles.popularCategories}
        items={popularCategories}
        onProductSelected={selectCategory}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  home: { flex: 1, paddingHorizontal: 15 },
  title: {
    fontSize: 30,
    marginVertical: 5
  },
  description: {},
  searchBar: {
    marginTop: 40
  },
  trips: {
    marginTop: 20
  },
  popularCategoryTitle: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20
  },
  popularCategories: {
    marginBottom: 15
  }
})

export default Home
