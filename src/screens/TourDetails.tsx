import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface TourDetailsProps {}

const TourDetails: React.FC<TourDetailsProps> = () => {
  return (
    <View style={styles.tourDetails}>
      <Text>TourDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tourDetails: {
    flex: 1
  }
})

export default TourDetails
