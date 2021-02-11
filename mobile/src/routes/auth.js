import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'
import RegisterArtistScreen from '../pages/RegisterArtistScreen'
import RegisterListenerScreen from '../pages/RegisterListenerScreen'
import useAuth from '../hooks/useAuth'

const Stack = createStackNavigator();

const Routes = () => {

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
            <Stack.Screen name='RegisterArtistScreen' component={RegisterArtistScreen} />
            <Stack.Screen name='RegisterListenerScreen' component={RegisterListenerScreen} />
        </Stack.Navigator>
    )
}

export default Routes