import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faClock,
  faLocationDot,
  faSun
} from '@fortawesome/free-solid-svg-icons'
import useTheme from '../styles/useTheme'

interface TripItemDetailProps {
  type: 'time' | 'distance' | 'weather'
  value: string
}

const TripItemDetail: React.FC<TripItemDetailProps> = ({ type, value }) => {
  const theme = useTheme()
  const { colors } = theme
  const items = [
    {
      type: 'time',
      label: 'Duration',
      icon: faClock,
      color: '#009BFF'
    },
    {
      type: 'distance',
      label: 'Distance',
      icon: faLocationDot,
      color: '#FF576B'
    },
    {
      type: 'weather',
      label: 'Sunny',
      icon: faSun,
      color: '#FF9900'
    }
  ]

  const item = items.find(it => it.type === type)

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {item && (
          <FontAwesomeIcon icon={item.icon} color={item.color} size={18} />
        )}
        <Text style={{ marginLeft: 8, fontWeight: 'bold', fontSize: 18 }}>
          {value}
        </Text>
      </View>
      <Text
        style={{
          marginTop: 10,
          color: colors.GREY,
          fontSize: 15,
          textAlign: 'center'
        }}>
        {item?.label}
      </Text>
    </View>
  )
}

export default TripItemDetail
