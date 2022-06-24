import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import useTheme from '../../styles/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeftLong, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'

const ICON_SIZE = 30

const HeaderDetail: React.FC = () => {
  const navigation = useNavigation()
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={[styles.header]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeftLong} color={colors.TEXT} size={20} />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: colors.SHADOW,
          height: ICON_SIZE,
          width: ICON_SIZE,
          borderRadius: ICON_SIZE / 2,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <FontAwesomeIcon icon={faHeart} color={colors.ACCENT} size={14} />
      </View>
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
  },
  searchBar: {
    flex: 1,
    marginRight: 20
  }
})

export default HeaderDetail
