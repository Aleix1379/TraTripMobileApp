import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useTheme from '../styles/useTheme'

const Header = () => {
  const theme = useTheme()
  const { colors } = theme
  return (
    <View style={[styles.header, { backgroundColor: colors.BACKGROUND }]}>
      <Text>Header!!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default Header
