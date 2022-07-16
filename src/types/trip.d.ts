export interface Rating {
  score: number
  votes: number
}

export interface Trip {
  id: number
  image: string
  city: string
  country: string
  price: string
  rating: Rating
  information: {
    overview: string
    details: string
    reviews: string
    costs: string
  }
}
