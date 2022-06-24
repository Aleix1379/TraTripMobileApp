import { ImageSourcePropType } from 'react-native'

interface Activity {
  id: number
  title: string
  location: string
  duration: string
  date: string
  image: ImageSourcePropType
}

interface Details {
  price: string
  duration: string
  activities: Activity[]
}

export interface Tour {
  id: number
  city: string
  image: number
  details: Details
}
