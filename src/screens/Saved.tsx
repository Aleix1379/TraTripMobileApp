import { Text, View } from 'react-native'
import React from 'react'
import useTheme from '../styles/useTheme'

const Saved = () => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={{ flex: 1, backgroundColor: colors.BACKGROUND }}>
      <Text style={{ color: '#ff0000' }}>second screen</Text>
    </View>
  )
}

export default Saved
