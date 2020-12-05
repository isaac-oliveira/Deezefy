import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { Platform, SafeAreaView, StatusBar, StyleSheet, UIManager } from 'react-native'
import { color } from './src/themes'
import AuthProvider from './src/providers/AuthProvider'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor={color.roxo} />
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.roxo
  }
})

export default App