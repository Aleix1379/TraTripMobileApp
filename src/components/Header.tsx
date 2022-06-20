import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import useTheme from '../styles/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={[styles.header, { backgroundColor: colors.BACKGROUND }]}>
      <FontAwesomeIcon icon={faBars} color={colors.TEXT} size={20} />
      <Image
        source={require('../../assets/images/avatar.png')}
        style={styles.avatar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  avatar: {
    width: 30,
    height: 30
  }
})

export default Header
