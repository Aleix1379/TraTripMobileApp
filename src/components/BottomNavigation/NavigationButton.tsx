import { View, Text, StyleSheet } from 'react-native'
import { Heart, Home, Location, Notification } from 'react-native-iconly'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import useTheme from '../../styles/useTheme'

type homeScreenProp = StackNavigationProp<any>

interface NavButtonProps {
  label: string
  to: string
  icon: 'home' | 'location' | 'notification' | 'heart'
  isActive: boolean
}

const NavButton: React.FC<NavButtonProps> = ({ label, to, icon, isActive }) => {
  const navigation = useNavigation<homeScreenProp>()
  const theme = useTheme()
  const { colors } = theme

  const icons = {
    home: (
      <Home
        color="#fff"
        size={'medium'}
        primaryColor={colors.TEXT}
        filled={true}
      />
    ),
    location: (
      <Location
        color="#fff"
        size={'medium'}
        primaryColor={colors.TEXT}
        filled={true}
      />
    ),
    notification: (
      <Notification
        color="#fff"
        size={'medium'}
        primaryColor={colors.TEXT}
        filled={true}
      />
    ),
    heart: (
      <Heart
        color="#fff"
        size={'medium'}
        primaryColor={colors.TEXT}
        filled={true}
      />
    )
  }

  return (
    <View
      onTouchEnd={() => navigation.navigate(to)}
      style={[styles.bar, { backgroundColor: colors.BACKGROUND }]}>
      <View
        style={[
          styles.item,
          {
            backgroundColor: isActive ? colors.ACCENT : 'transparent'
          }
        ]}>
        {icons[icon]}
        {isActive && <Text style={styles.label}>{label}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 15
  },
  button: {},
  label: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 12
  }
})

export default NavButton
