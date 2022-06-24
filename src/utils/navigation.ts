export const isDetailPage = (name: string): boolean => {
  const pages = ['TripDetails']
  return pages.includes(name)
}
