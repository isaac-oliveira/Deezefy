import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../pages/LoginScreen'
import HomeScreen from '../pages/HomeScreen'

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default Routes