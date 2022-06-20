import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import useTheme from '../../styles/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faHome,
  faCompass,
  faBell,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

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
    home: faHome,
    location: faCompass,
    notification: faBell,
    heart: faHeart
  }

  return (
    <View style={[styles.bar, { backgroundColor: colors.BACKGROUND }]}>
      <View
        onTouchEnd={() => navigation.navigate(to)}
        style={[
          styles.item,
          {
            backgroundColor: isActive ? colors.ACCENT : 'transparent'
          }
        ]}>
        <FontAwesomeIcon
          icon={icons[icon]}
          size={22}
          style={{ color: colors.TEXT }}
        />
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
