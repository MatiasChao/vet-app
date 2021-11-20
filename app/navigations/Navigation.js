import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountStack from './AccountStack'
import DashboardStack from './DashboardStack'

import Login from '../screens/account/Login';
import { Dashboard } from '../screens/Dashboard';

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home" component={Dashboard} />
                {/* <Stack.Screen 
                    name = "accountStack" 
                    component = { AccountStack }  
                    options = {{ title: 'Mi Cuenta' }} 
                />
                <Stack.Screen 
                    name = "dashboardStack" 
                    component = { DashboardStack }  
                    options = {{ title: 'Inicio' }} 
                /> */}
                {/* <Tab.Screen
                    name = "petListStack" 
                    component = { PetListStack } 
                    options = {{ title: 'Mis Mascotas' }} 
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "dashboardStack":
            iconName = "home"
            break;
        case "accountStack":
            iconName = "account"
            break;
        case "petListStack":
            iconName = "paw"
            break;
        default:
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}