import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import useTheme from '../../styles/useTheme'
import SearchBar from '../SearchBar'

interface SavedProps {
  title: string
}

const HeaderExplore: React.FC<SavedProps> = ({ title }) => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={[styles.header, { backgroundColor: colors.BACKGROUND }]}>
      <SearchBar style={styles.searchBar} title={title} />
      <Image
        source={require('../../../assets/images/avatar.png')}
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

export default HeaderExplore
