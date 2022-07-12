import React from 'react'
import { StyleProp, StyleSheet, TextInput, TextStyle, View } from 'react-native'
import useTheme from '../styles/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ICON_SIZE = 30

interface SearchBarProps {
  style?: StyleProp<TextStyle> | undefined
  title: string
  testID?: string | undefined
  onTextChange?: (text: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  style,
  title,
  onTextChange,
  testID
}) => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={[style, styles.searchBar, { backgroundColor: colors.SHADOW }]}>
      <TextInput
        testID={`${testID}-input`}
        style={[styles.input, { color: colors.GREY }]}
        placeholder={title}
        onChangeText={onTextChange}
      />
      <View style={[styles.icon, { backgroundColor: colors.ACCENT }]}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          color={colors.TEXT}
          size={15}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 5
  },
  input: {
    paddingRight: 45
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ICON_SIZE / 2,
    marginLeft: 'auto',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  }
})

export default SearchBar
