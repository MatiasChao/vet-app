import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from '../screens/account/Account'
import Login from '../screens/account/Login';
import Register from '../screens/account/Register';
import TypeUser from '../screens/account/TypeUser';

const Stack = createNativeStackNavigator();

export default function AccountStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'account'
                component = { Account }
                options = {{ title: 'VetApp'}}
            /> 
            <Stack.Screen
                name = 'login'
                component = { Login }
                options = {{ title: 'Login'}}
            />
            <Stack.Screen
                name = 'register'
                component = { Register }
                // options = {{ title: }}
            />
            <Stack.Screen
                name = 'type-user'
                component = { TypeUser }
                options = {{ title: "Registrarme" }}
            />
        </Stack.Navigator>
    )
}