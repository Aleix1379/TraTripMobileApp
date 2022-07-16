import {
  Dimensions,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'
import React, { useState } from 'react'
import useTheme from '../styles/useTheme'
import { Trip } from '../types/trip'
import jsonTrips from '../../assets/data/trips.json'
import HorizontalProductList from '../components/HorizontalProductList'
import jsonTours from '../../assets/data/tours.json'
import { Tour } from '../types/tour'

interface SavedProps {
  navigation: any
}

const Saved: React.FC<SavedProps> = ({ navigation }) => {
  const theme = useTheme()
  const { colors } = theme
  const [trips] = useState<Array<Trip>>(jsonTrips)
  const [tours] = useState<Array<Tour>>(jsonTours)
  const [images] = useState<{ [key: string]: ImageSourcePropType }>({
    'tajmahal.png': require('../../assets/images/tajmahal.png'),
    'paris.png': require('../../assets/images/paris.png'),
    'signapore.png': require('../../assets/images/signapore.png')
  })

  const getItemSize = () => {
    return {
      width: Dimensions.get('window').width / 2.15,
      height: (Dimensions.get('window').width / 2.15) * 1.22
    }
  }

  return (
    <ScrollView style={[styles.saved, { backgroundColor: colors.BACKGROUND }]}>
      <Text style={[styles.title, { color: colors.GREY }]}>Your trips</Text>
      <HorizontalProductList
        testID={'trips'}
        onPress={(id: number) => navigation.navigate('TripDetails', { id })}
        items={trips.map(trip => ({
          id: trip.id,
          image: images[trip.image],
          title: trip.city + ', ' + trip.country,
          description: 'Starting at ' + trip.price
        }))}
        style={[styles.trips, { maxHeight: getItemSize().height }]}
        imageSize={{
          width: getItemSize().width,
          height: getItemSize().height
        }}
      />

      <Text style={[styles.title, { color: colors.GREY }]}>Your tours</Text>
      <HorizontalProductList
        testID={'tours'}
        onPress={(id: number) => navigation.navigate('TourDetails', { id })}
        items={tours.map(tour => ({
          id: tour.id,
          image: images[tour.image],
          title: tour.city,
          description: 'Starting at ' + tour.details.price
        }))}
        style={[
          styles.trips,
          {
            maxHeight: getItemSize().height
          }
        ]}
        imageSize={{
          width: getItemSize().width,
          height: getItemSize().height
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  saved: {
    flex: 1,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 30,
    marginTop: 20
  },
  trips: {
    marginTop: 10
  }
})

export default Saved
