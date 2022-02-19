import React from 'react'
import { Text , View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import FichaMedica from '../components/forms/MedicalFile';

export const MedicalFile = ({navigation}) => {
   
      
    return (
        <View style = {{flexDirection : 'column', flex : 1, margin : 10}}>
        <FichaMedica/>
        </View>
    )   
    /*
       <Button
                onPress={() => navigation.navigate('Home'))}
                title="Login"
                style={[styles.loginButton]}
            />
    
    */ 
}