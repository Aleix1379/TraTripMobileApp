import React, { useState } from 'react'
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import useTheme from '../styles/useTheme'
import SearchBar from '../components/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import SelectItems from '../components/SelectItems'

const POPULAR_IMAGE_SIZE = 60

type homeScreenProp = StackNavigationProp<any>

interface HomeState {
  popularCategory: {
    name: string
    image: ImageSourcePropType
  }
  popularCategories: Array<HomeState['popularCategory']>
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
      image: require('../../assets/images/trips.png'),
      name: 'Trips'
    },
    {
      image: require('../../assets/images/hotel.png'),
      name: 'Hotel'
    },
    {
      image: require('../../assets/images/transport.png'),
      name: 'Transport'
    },
    {
      image: require('../../assets/images/events.png'),
      name: 'Events'
    }
  ])
  const [trips] = useState([
    {
      id: 1,
      image: require('../../assets/images/tajmahal.png'),
      city: 'Tajmahal',
      country: 'India',
      price: '$2000'
    },
    {
      id: 2,
      image: require('../../assets/images/paris.png'),
      city: 'Paris',
      country: 'France',
      price: '$1200'
    }
  ])

  const getTripImageSize = () => {
    return {
      with: Dimensions.get('window').width * 0.65,
      height: Dimensions.get('window').width * 0.65 * 1.22
    }
  }

  const loadTripsByCategory = (newCategory: string) => {
    console.info('loadTripsByCategory:', newCategory)
  }

  return (
    <ScrollView style={[styles.home, { backgroundColor: colors.BACKGROUND }]}>
      <Text style={[styles.title, { color: colors.GREY }]}>Discover</Text>

      <Text style={[styles.description, { color: colors.GREY }]}>
        Explore the best places in world!
      </Text>

      <SearchBar style={styles.searchBar} />

      <SelectItems
        items={categories}
        onItemChange={loadTripsByCategory}
        style={{ marginTop: 40 }}
      />

      <ScrollView horizontal={true} style={styles.trips}>
        {trips.map((trip, index) => (
          <View
            key={trip.id}
            onTouchEnd={() =>
              navigation.navigate('TripDetails', { id: trip.id })
            }>
            <View
              style={[
                styles.tripOverlay,
                {
                  width: getTripImageSize().with,
                  height: getTripImageSize().height
                }
              ]}
            />
            <Image
              source={trip.image}
              style={[
                styles.tripImage,
                {
                  marginRight: index < trips.length - 1 ? 25 : 0,
                  width: getTripImageSize().with,
                  height: getTripImageSize().height
                }
              ]}
            />
            <View
              style={[styles.tripDetails, { width: getTripImageSize().with }]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}>
                <View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={[
                        styles.tripText,
                        { color: colors.TEXT, marginRight: 8 }
                      ]}>
                      {trip.city},
                    </Text>
                    <Text style={[styles.tripText, { color: colors.TEXT }]}>
                      {trip.country}
                    </Text>
                  </View>
                  <Text style={[styles.tripText, { marginTop: 2 }]}>
                    Starting at {trip.price}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: '#ddd',
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    size={16}
                    color={colors.ACCENT}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={[styles.popularCategoryTitle, { color: colors.GREY }]}>
        Popular Categories
      </Text>
      <View style={styles.popularCategories}>
        {popularCategories.map((popularCategory, index) => (
          <View style={styles.popularCategory} key={index}>
            <Image source={popularCategory.image} style={styles.popularImage} />
            <Text>{popularCategory.name}</Text>
          </View>
        ))}
      </View>
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
    marginTop: 20,
    flexDirection: 'row'
  },
  tripImage: {
    flex: 1,
    borderRadius: 30,
    resizeMode: 'cover'
  },
  tripOverlay: {
    backgroundColor: 'rgba(33, 33, 33, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 30,
    zIndex: 100
  },
  tripDetails: {
    position: 'absolute',
    left: 0,
    bottom: 8,
    zIndex: 1000
  },
  tripText: {
    fontSize: 16
  },
  popularCategoryTitle: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20
  },
  popularCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  popularCategory: {
    alignItems: 'center'
  },
  popularImage: {
    width: POPULAR_IMAGE_SIZE,
    height: POPULAR_IMAGE_SIZE,
    marginBottom: 10
  }
})

export default Home
