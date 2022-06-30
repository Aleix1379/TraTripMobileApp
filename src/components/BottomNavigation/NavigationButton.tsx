import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
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

  const [upperAnimation] = useState(new Animated.Value(0))

  const startAnimation = () => {
    Animated.timing(upperAnimation, {
      useNativeDriver: true,
      toValue: isActive ? 1 : 0,
      duration: 350
    }).start()
  }

  const animatedStyles = {
    upper: {
      transform: [
        {
          translateX: upperAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 0]
          })
        }
      ]
    }
  }

  useEffect(() => {
    startAnimation()
  }, [isActive])

  return (
    <View style={[styles.bar, { backgroundColor: colors.BACKGROUND }]}>
      <View onTouchEnd={() => navigation.navigate(to)} style={[styles.item]}>
        <FontAwesomeIcon
          icon={icons[icon]}
          size={22}
          style={{ color: colors.TEXT, zIndex: 1 }}
        />

        <Animated.View
          style={[
            styles.background,
            {
              backgroundColor: isActive ? colors.ACCENT : 'transparent'
            },
            animatedStyles.upper
          ]}
        />
        <Text style={[styles.label]}>{label}</Text>
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
    borderRadius: 15,
    overflow: 'hidden'
  },
  button: {},
  label: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 12
  },
  background: {
    height: 38,
    width: '128%',
    borderRadius: 15,
    padding: 8,
    position: 'absolute',
    top: 0,
    left: 0
  }
})

export default NavButton
