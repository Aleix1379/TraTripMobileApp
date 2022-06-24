import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import useTheme from '../styles/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ICON_SIZE = 26

const Header: React.FC = () => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={[styles.header, { backgroundColor: colors.BACKGROUND }]}>
      <View
        style={{
          backgroundColor: colors.ACCENT,
          height: ICON_SIZE,
          width: ICON_SIZE,
          borderRadius: ICON_SIZE / 2,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <FontAwesomeIcon icon={faPaperPlane} color={colors.TEXT} size={14} />
      </View>
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
