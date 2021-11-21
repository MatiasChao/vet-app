import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountStack from './AccountStack'
import DashboardStack from './DashboardStack'

import Login from '../screens/account/Login';
import { Dashboard } from '../screens/Dashboard';
import PetListStack from './PetListStack';

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = "Home"
                screenOptions = { ({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    inactiveTintColor: '#646464',
                    activeTintColor: '#00a680'
                }) }
            >
                <Tab.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }}
                />
                <Tab.Screen 
                    name="Home" 
                    component={Dashboard} 
                />
                {/* <Tab.Screen 
                    name="Test" 
                    component={Dashboard} 
                    options = {{ title: 'Mi Test' }} 
                    /> */}
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
                <Tab.Screen
                    name = "petListStack" 
                    component = { PetListStack } 
                    options = {{ title: 'Mis Mascotas' }} 
                />
            </Tab.Navigator>
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