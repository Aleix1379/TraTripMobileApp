import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigationState } from '@react-navigation/native'
import NavigationButton from './NavigationButton'

interface BottomNavigationProps {}

const INITIAL_SCREEN = 'Home'

const NavigationBar: React.FC<BottomNavigationProps> = () => {
  const state = useNavigationState(state => state)
  const [currentScreen, setCurrentScreen] = useState(INITIAL_SCREEN)

  useEffect(() => {
    if (state) {
      const currentRoute = state.routes[state.routes.length - 1].name
      setCurrentScreen(currentRoute)
    } else {
      setCurrentScreen(INITIAL_SCREEN)
    }
  }, [state])

  return (
    <View style={{ flexDirection: 'row' }}>
      <NavigationButton
        label={'Home'}
        to={'Home'}
        icon={'home'}
        isActive={currentScreen === 'Home'}
      />
      <NavigationButton
        label={'Explore'}
        to={'Explore'}
        icon={'location'}
        isActive={currentScreen === 'Explore'}
      />
      <NavigationButton
        label={'News'}
        to={'News'}
        icon={'notification'}
        isActive={currentScreen === 'News'}
      />
      <NavigationButton
        label={'Saved'}
        to={'Saved'}
        icon={'heart'}
        isActive={currentScreen === 'Saved'}
      />
    </View>
  )
}

export default NavigationBar
