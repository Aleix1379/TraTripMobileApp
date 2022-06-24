import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View
} from 'react-native'
import useTheme from '../styles/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import SelectItems from '../components/SelectItems'
import TripItemDetail from '../components/TripItemDetail'
import Button from '../components/Button'
import BottomSheet from '../components/BottomSheet'

interface TripDetailsProps {
  route: any
}

interface TripDetailsState {
  rating: {
    score: number
    votes: number
  }
  trip: {
    id: number
    image: ImageSourcePropType
    city: string
    country: string
    price: string
    rating: TripDetailsState['rating']
    information: {
      overview: string
      details: string
      reviews: string
      costs: string
    }
  }
}

const TripDetails: React.FC<TripDetailsProps> = ({ route }) => {
  const { id } = route.params
  const theme = useTheme()
  const { colors } = theme

  const [trips] = useState<Array<TripDetailsState['trip']>>([
    {
      id: 1,
      image: require('../../assets/images/tajmahal.png'),
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
      image: require('../../assets/images/paris.png'),
      city: 'Paris',
      country: 'France',
      price: '$1200',
      rating: {
        score: 4.9,
        votes: 2700
      },
      information: {
        overview:
          'Paris possesses a rich and attractive cultural scene with shows, activities and festivals.',
        details:
          'Paris is the capital of France and one of the most populous cities in Europe.',
        reviews: 'Paris is a great city to visit.',
        costs: 'The city is expensive.'
      }
    }
  ])

  const [trip, setTrip] = useState<TripDetailsState['trip'] | null>(null)

  const [tabs] = useState(['overview', 'details', 'reviews', 'costs'])
  const [tabSelected, setTabSelected] = useState('overview')

  useEffect(() => {
    const data = trips.find(item => item.id === id)
    if (data) {
      setTrip(data)
    }
  }, [])

  const formatVotes = (votes: number) => {
    if (votes >= 1000 && votes < 10000) {
      return '(' + votes / 1000 + 'K)'
    } else if (votes >= 10000 && votes < 100000) {
      return '(' + votes / 10000 + 'M)'
    } else {
      return '(' + votes + ')'
    }
  }

  return (
    trip && (
      <View
        style={[
          styles.tripDetails,
          {
            backgroundColor: colors.BACKGROUND
          }
        ]}>
        <Image style={styles.image} source={trip.image} />
        <BottomSheet style={{ paddingBottom: 20 }}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.TEXT }]}>
              {trip.city},{' '}
            </Text>
            <Text style={[styles.title, { color: colors.TEXT }]}>
              {trip.country}
            </Text>
            <Text
              style={[
                styles.title,
                { marginLeft: 'auto', color: colors.ACCENT, fontWeight: 'bold' }
              ]}>
              {trip.price}
            </Text>
          </View>
          <View style={styles.score}>
            <FontAwesomeIcon icon={faStar} color={'#FF9900'} size={20} />
            <Text style={{ marginHorizontal: 8 }}>{trip.rating.score}</Text>
            <Text>{formatVotes(trip.rating.votes)}</Text>
            <Text style={{ marginLeft: 'auto' }}>* Estimated Cost</Text>
          </View>

          <SelectItems
            style={{ marginBottom: 10, marginTop: 25 }}
            items={tabs}
            onItemChange={newItem => setTabSelected(newItem)}
          />

          {tabSelected === 'overview' && (
            <Text style={[styles.description, { color: colors.GREY }]}>
              {trip.information.overview}
            </Text>
          )}
          {tabSelected === 'details' && (
            <Text style={[styles.description, { color: colors.GREY }]}>
              {trip.information.details}
            </Text>
          )}
          {tabSelected === 'reviews' && (
            <Text style={[styles.description, { color: colors.GREY }]}>
              {trip.information.reviews}
            </Text>
          )}
          {tabSelected === 'costs' && (
            <Text style={[styles.description, { color: colors.GREY }]}>
              {trip.information.costs}
            </Text>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 'auto'
            }}>
            <TripItemDetail type={'time'} value={'5 days'} />
            <TripItemDetail type={'distance'} value={'625 KM'} />
            <TripItemDetail type={'weather'} value={'21ºC'} />
          </View>

          <View style={styles.controls}>
            <Button
              label={trip.price}
              type={'outline'}
              style={{ width: '35%' }}
              color={colors.ACCENT}
            />
            <Button
              label={'Book Now'}
              type={'contained'}
              style={{ width: '55%' }}
            />
          </View>
        </BottomSheet>
      </View>
    )
  )
}

const styles = StyleSheet.create({
  tripDetails: {
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
    position: 'absolute'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    marginTop: 10
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 5
  },
  description: {
    lineHeight: 22,
    marginVertical: 10,
    height: 50
  },
  controls: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default TripDetails
