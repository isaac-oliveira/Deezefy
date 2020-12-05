import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../pages/LoginScreen'
import HomeScreen from '../pages/HomeScreen'
import PlayScreen from '../pages/PlayScreen'
import UpdateScreen from '../pages/UpdateScreen'

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='PlayScreen' component={PlayScreen} />
            <Stack.Screen name='UpdateScreen' component={UpdateScreen} />
        </Stack.Navigator>
    )
}

export default Routes