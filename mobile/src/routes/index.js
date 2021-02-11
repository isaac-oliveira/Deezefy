import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../pages/LikeScreen'
import MusicScreen from '../pages/MusicScreen'
import PlayScreen from '../pages/PlayScreen'
import UpdateScreen from '../pages/UpdateScreen'
import useAuth from '../hooks/useAuth'
import Auth from './auth'

const Stack = createStackNavigator();

const Routes = () => {
    const { isLogged } = useAuth()

    if(!isLogged) 
        return <Auth />

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='MusicScreen' component={MusicScreen} />
            <Stack.Screen name='PlayScreen' component={PlayScreen} />
            <Stack.Screen name='UpdateScreen' component={UpdateScreen} />
        </Stack.Navigator>
    )
}

export default Routes