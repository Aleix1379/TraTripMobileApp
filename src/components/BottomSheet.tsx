import React from 'react'
import { StyleSheet, View } from 'react-native'
import useTheme from '../styles/useTheme'

interface BottomSheetProps {
  children: React.ReactNode
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children }) => {
  const theme = useTheme()
  const { colors } = theme

  return (
    <View style={[styles.info, { backgroundColor: colors.SHADOW }]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginTop: 'auto'
  }
})

export default BottomSheet
