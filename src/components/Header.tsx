import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import useTheme from '../styles/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'

const ICON_SIZE = 26

interface HeaderProps {
  showSearch?: boolean
  showIcon?: boolean
}

const Header: React.FC<HeaderProps> = ({
  showSearch = false,
  showIcon = false
}) => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={[styles.header, { backgroundColor: colors.BACKGROUND }]}>
      {showIcon && (
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
      )}
      {showSearch && <SearchBar style={styles.searchBar} />}
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
    paddingHorizontal: 15,
    paddingVertical: 35
  },
  avatar: {
    width: 30,
    height: 30
  },
  searchBar: {
    flex: 1,
    marginRight: 20
  }
})

export default Header
