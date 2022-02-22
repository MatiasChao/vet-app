import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MedicalFile } from '../screens/MedicalFile';

const Stack = createNativeStackNavigator();

export default function PetListStack(){
    return (
        <Stack.Navigator>
           <Stack.Screen 
                name = 'medical-file'
                component = { MedicalFile }
                options = {{ title: "Ficha Médica" }}
            />
        </Stack.Navigator>
    )
}