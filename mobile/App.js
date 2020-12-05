import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { Platform, StatusBar, UIManager } from 'react-native'
import { color } from './src/themes'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor={color.roxo} />
      <Routes/>
    </NavigationContainer>
  )
}

export default App