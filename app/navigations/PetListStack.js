import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function PetListStack(){
    return (
        <Stack.Navigator>
           <Stack.Screen 
                name = 'my-pets'
                component = { Dashboard }
                options = {{ title: "Mis Mascotas" }}
            />
        </Stack.Navigator>
    )
}