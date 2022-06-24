import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import useTheme from '../styles/useTheme'

interface BottomSheetProps {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children, style }) => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={[styles.info, { backgroundColor: colors.SHADOW }, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingHorizontal: 25,
    paddingTop: 20,
    marginTop: 'auto'
  }
})

export default BottomSheet
