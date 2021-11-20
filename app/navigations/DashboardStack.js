import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function DashboardStack(){
    return (
        <Stack.Navigator>
           <Stack.Screen 
                name = 'dashboard'
                component = { Dashboard }
                options = {{ title: "Inicio" }}
            />
        </Stack.Navigator>
    )
}