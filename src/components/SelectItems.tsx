import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import useTheme from '../styles/useTheme'

interface SelectItemsProps {
  style?: StyleProp<TextStyle> | undefined
  items: Array<string>
  value: string
  onItemChange: (newItem: string) => void
  testID?: string | undefined
}

const SelectItems: React.FC<SelectItemsProps> = ({
  style,
  items,
  value,
  onItemChange,
  testID
}) => {
  const theme = useTheme()
  const { colors } = theme
  const isCategoryActive = (item: string) => item === value

  const firstLetterUpperCase = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <View testID={testID} style={[styles.items, style]}>
      {items.map((item, index) => (
        <TouchableOpacity
          testID={`${testID}-${index}`}
          key={index}
          onPress={() => onItemChange(item)}>
          <View style={styles.item}>
            <Text
              style={{
                fontSize: 18,
                color: isCategoryActive(item) ? colors.ACCENT : colors.GREY
              }}>
              {firstLetterUpperCase(item)}
            </Text>
            {isCategoryActive(item) && (
              <FontAwesomeIcon
                icon={faCircle}
                size={6}
                style={{ marginTop: 5, color: colors.ACCENT }}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    alignItems: 'center'
  }
})

export default SelectItems
