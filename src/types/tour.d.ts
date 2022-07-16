interface Activity {
  id: number
  title: string
  location: string
  duration: string
  date: string
  image: string
}

interface Details {
  price: string
  duration: string
  activities: Activity[]
}

export interface Tour {
  id: number
  city: string
  image: string
  score: number
  details: Details
}
