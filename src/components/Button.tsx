import React from 'react'
import { Text, StyleProp, TextStyle, View } from 'react-native'
import useTheme from '../styles/useTheme'
import { LinearGradient } from 'react-native-svg/lib/typescript'

interface ButtonProps {
  label: string
  type: 'outline' | 'contained'
  style?: StyleProp<TextStyle> | undefined
  color?: string
}

const Button: React.FC<ButtonProps> = ({ label, type, style, color }) => {
  const theme = useTheme()
  const { colors } = theme
  if (!color) {
    color = colors.TEXT
  }

  return (
    <View
      style={[
        style,
        {
          backgroundColor: type === 'contained' ? colors.ACCENT : 'transparent',
          borderColor: colors.ACCENT,
          borderWidth: 1,
          borderRadius: 25,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }
      ]}>
      <Text style={{ fontWeight: 'bold', color: color, fontSize: 16 }}>
        {label}
      </Text>
    </View>
  )
}

export default Button
