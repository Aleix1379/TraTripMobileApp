import React from 'react'
import Header from '../components/Header'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Explore from '../screens/Explore'
import NavigationBar from '../components/BottomNavigation/NavigationBar'
import { SafeAreaView } from 'react-native'
import ThemeProvider from '../styles/ThemeProvider'
import Notifications from '../screens/Notifications'
import Saved from '../screens/Saved'
import useTheme from '../styles/useTheme'
import TripDetails from '../screens/TripDetails'
import TourDetails from '../screens/TourDetails'

const Stack = createStackNavigator()

const App = () => {
  const theme = useTheme()
  const { colors } = theme

  const navigatorOptions = {
    cardStyle: { backgroundColor: 'transparent' },
    cardStyleInterpolator: ({ current: { progress } }) => ({
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp'
        })
      }
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.BACKGROUND }}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={navigatorOptions}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ header: () => <Header showIcon={true} /> }}
            />
            <Stack.Screen
              name="Explore"
              component={Explore}
              options={{ header: () => <Header showSearch={true} /> }}
            />
            <Stack.Screen
              name="News"
              component={Notifications}
              options={{ header: () => <Header /> }}
            />
            <Stack.Screen
              name="Saved"
              component={Saved}
              options={{ header: () => <Header /> }}
            />
            <Stack.Screen
              name="TripDetails"
              component={TripDetails}
              options={{
                title: '',
                headerTransparent: true,
                headerTintColor: colors.TEXT
              }}
            />
            <Stack.Screen
              name="TourDetails"
              component={TourDetails}
              options={{
                title: '',
                headerTransparent: true,
                headerTintColor: colors.TEXT
              }}
            />
          </Stack.Navigator>
          <NavigationBar />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  )
}

export default App
