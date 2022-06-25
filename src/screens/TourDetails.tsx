import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'
import useTheme from '../styles/useTheme'
import BottomSheet from '../components/BottomSheet'
import { Tour } from '../types/Tour'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Score from '../components/Score'

interface TourDetailsProps {
  route: any
}

const TourDetails: React.FC<TourDetailsProps> = ({ route }) => {
  const { id } = route.params
  const theme = useTheme()
  const { colors } = theme

  const [tours] = useState<Array<Tour>>([
    {
      id: 1,
      city: 'Singapore City',
      image: require('../../assets/images/signapore.png'),
      score: 4,
      details: {
        price: '$2000',
        duration: '7 days',
        activities: [
          {
            id: 1,
            title: 'Marina Bay Sands',
            location: 'Resort and Hotel',
            duration: '2 days',
            date: '2021-03-15',
            image: require('../../assets/images/marina-bay-sands.png')
          },
          {
            id: 2,
            title: 'Gardens by the Bay',
            location: 'Supertree Grove',
            duration: '1 day',
            date: '2021-03-17',
            image: require('../../assets/images/gardens-by-the-bay.png')
          }
        ]
      }
    }
  ])

  const [selectedTour, setSelectedTour] = useState(tours[0])

  useEffect(() => {
    const data = tours.find(tour => tour.id === id)
    if (data) {
      setSelectedTour(data)
    }
  }, [])

  const formatDate = (date: string) => {
    const newDate = new Date(date)
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    return `${newDate.getDate()} ${
      monthNames[newDate.getMonth()]
    } ${newDate.getFullYear()}`
  }

  return (
    <View style={[styles.tourDetails, { backgroundColor: colors.BACKGROUND }]}>
      <Image style={styles.image} source={selectedTour.image} />
      <View
        style={{
          marginLeft: 18,
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 25,
          alignItems: 'flex-start'
        }}>
        <Text
          style={{
            fontSize: 16,
            color: colors.GREY,
            backgroundColor: 'rgba(34,34,34,0.85)',
            paddingHorizontal: 8,
            paddingVertical: 3
          }}>
          Trip To
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            backgroundColor: 'rgba(34,34,34,0.85)',
            paddingHorizontal: 8,
            paddingVertical: 3
          }}>
          {selectedTour.city}
        </Text>
        <View
          style={{
            backgroundColor: 'rgba(34,34,34,0.85)',
            paddingHorizontal: 8,
            paddingBottom: 8,
            paddingTop: 15
          }}>
          <Score score={selectedTour.score} />
        </View>
      </View>
      <BottomSheet>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.TEXT }]}>
            Tour Details
          </Text>
          <Text style={[styles.price, { color: colors.ACCENT }]}>
            {selectedTour.details.price}
          </Text>
        </View>

        <View style={styles.description}>
          <Text style={{ color: colors.GREY }}>
            Duration - {selectedTour.details.duration}
          </Text>
          <Text style={{ color: colors.GREY }}>* Estimated cost</Text>
        </View>

        <ScrollView style={styles.activities}>
          {selectedTour.details.activities.map((activity, index) => (
            <View style={styles.activity} key={activity.id}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={[
                    styles.dotOutside,
                    {
                      backgroundColor: index === 0 ? colors.ACCENT : colors.GREY
                    }
                  ]}>
                  <View
                    style={[
                      styles.dotInside,
                      { backgroundColor: colors.SHADOW }
                    ]}
                  />
                </View>
                <Text style={{ marginLeft: 12 }}>
                  {formatDate(activity.date)}
                </Text>
              </View>
              <View style={styles.content}>
                <View
                  style={[styles.separator, { borderLeftColor: colors.GREY }]}
                />
                <Image source={activity.image} style={styles.activityImage} />
                <View style={styles.activityDetail}>
                  <Text style={[styles.activityTitle, { color: colors.TEXT }]}>
                    {activity.title}
                  </Text>
                  <Text
                    style={[styles.activityLocation, { color: colors.GREY }]}>
                    {activity.location}
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesomeIcon
                      icon={faClock}
                      size={15}
                      color={colors.ACCENT}
                    />
                    <Text
                      style={[
                        styles.activityDuration,
                        { color: colors.ACCENT }
                      ]}>
                      {activity.duration}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View
          style={[
            styles.plusButton,
            {
              backgroundColor: colors.BACKGROUND,
              shadowColor: colors.BACKGROUND
            }
          ]}>
          <Text style={{ color: colors.ACCENT, fontSize: 30 }}>+</Text>
        </View>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  tourDetails: {
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
    position: 'absolute'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 30
  },
  price: {
    fontSize: 30
  },
  description: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  activities: {
    marginTop: 30,
    height: 300
  },
  activity: {},
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  activityDetail: {
    marginLeft: 18,
    paddingVertical: 25
  },
  activityImage: {
    width: 90,
    height: 110,
    borderRadius: 20,
    resizeMode: 'cover'
  },
  activityTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  activityLocation: {
    marginTop: 8,
    marginBottom: 18
  },
  activityDuration: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 12
  },
  separator: {
    height: '100%',
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    marginRight: 35,
    left: 12
  },
  dotOutside: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3
  },
  dotInside: {
    width: 10,
    height: 10,
    borderRadius: 5
  },
  plusButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
})

export default TourDetails
