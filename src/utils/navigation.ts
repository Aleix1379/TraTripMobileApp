export const isDetailPage = (name: string): boolean => {
  const pages = ['TripDetails', 'TourDetails']
  return pages.includes(name)
}
