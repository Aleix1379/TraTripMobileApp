import React from 'react'
import { Text, View } from 'react-native'
import useTheme from '../styles/useTheme'

const Home = () => {
  const theme = useTheme()
  const { colors } = theme
  return (
    <View style={{ flex: 1, backgroundColor: colors.BACKGROUND }}>
      <Text style={{ color: '#00ff00' }}>App content!!!</Text>
    </View>
  )
}

export default Home
