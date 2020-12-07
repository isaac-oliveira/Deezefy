import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../pages/LoginScreen'
import HomeScreen from '../pages/HomeScreen'
import PlayScreen from '../pages/PlayScreen'
import UpdateScreen from '../pages/UpdateScreen'
import useAuth from '../hooks/useAuth'

const Stack = createStackNavigator();

const Routes = () => {
    const { isLogged } = useAuth()

    if(!isLogged) 
        return <LoginScreen />

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='PlayScreen' component={PlayScreen} />
            <Stack.Screen name='UpdateScreen' component={UpdateScreen} />
        </Stack.Navigator>
    )
}

export default Routes