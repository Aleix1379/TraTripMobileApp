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
import jsonTrips from '../../assets/data/trips.json'
import { Trip } from '../types/trip'

interface TripDetailsProps {
  route: any
  testID?: string | undefined
}

const TripDetails: React.FC<TripDetailsProps> = ({ route, testID }) => {
  const { id } = route.params
  const theme = useTheme()
  const { colors } = theme

  const [trips] = useState<Array<Trip>>(jsonTrips)
  const [trip, setTrip] = useState<Trip | null>(null)

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

  const [images] = useState<{ [key: string]: ImageSourcePropType }>({
    'tajmahal.png': require('../../assets/images/tajmahal.png'),
    'paris.png': require('../../assets/images/paris.png')
  })

  return (
    trip && (
      <View
        style={[
          styles.tripDetails,
          {
            backgroundColor: colors.BACKGROUND
          }
        ]}>
        <Image style={styles.image} source={images[trip.image]} />
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
            testID={`${testID}-select-items`}
            value={tabSelected}
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
