import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PetList } from '../screens/PetList';

const Stack = createNativeStackNavigator();

export default function PetListStack(){
    return (
        <Stack.Navigator>
           <Stack.Screen 
                name = 'my-pets'
                component = { PetList }
                options = {{ title: "Mis Mascotas" }}
            />
        </Stack.Navigator>
    )
}