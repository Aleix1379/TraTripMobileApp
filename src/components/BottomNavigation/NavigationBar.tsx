import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigationState } from '@react-navigation/native'
import NavigationButton from './NavigationButton'
import { isDetailPage } from '../../utils/navigation'

interface BottomNavigationProps {}

const INITIAL_SCREEN = 'Home'

const NavigationBar: React.FC<BottomNavigationProps> = () => {
  const navigationState = useNavigationState(state => state)
  const [currentScreen, setCurrentScreen] = useState(INITIAL_SCREEN)
  const [isInDetailPage, setIsInDetailPage] = useState(false)

  useEffect(() => {
    if (navigationState) {
      const currentRoute =
        navigationState.routes[navigationState.routes.length - 1].name
      setCurrentScreen(currentRoute)
      setIsInDetailPage(isDetailPage(currentRoute))
    } else {
      setCurrentScreen(INITIAL_SCREEN)
    }
  }, [navigationState])

  return (
    !isInDetailPage && (
      <View style={{ flexDirection: 'row' }}>
        <NavigationButton
          testID={'nav-home'}
          label={'Home'}
          to={'Home'}
          icon={'home'}
          isActive={currentScreen === 'Home'}
        />
        <NavigationButton
          testID={'nav-location'}
          label={'Explore'}
          to={'Explore'}
          icon={'location'}
          isActive={currentScreen === 'Explore'}
        />
        <NavigationButton
          testID={'nav-notification'}
          label={'News'}
          to={'News'}
          icon={'notification'}
          isActive={currentScreen === 'News'}
        />
        <NavigationButton
          testID={'nav-heart'}
          label={'Saved'}
          to={'Saved'}
          icon={'heart'}
          isActive={currentScreen === 'Saved'}
        />
      </View>
    )
  )
}

export default NavigationBar
