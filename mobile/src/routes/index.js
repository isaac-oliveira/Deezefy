import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../pages/LoginScreen'

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default Routes