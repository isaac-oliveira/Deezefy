import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { StatusBar } from 'react-native'
import { color } from './src/themes'
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={color.roxo} />
      <Routes/>
    </NavigationContainer>
  )
}

export default App