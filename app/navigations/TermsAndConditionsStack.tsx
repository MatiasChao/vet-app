import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Conditions from '../components/account/Conditions';

const Stack = createStackNavigator();

export default function TermsAndConditionsStack() {

  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Términos y Condiciones" 
        component={Conditions} 
        options = {{ 
          title: "Términos y Condiciones",
          headerLeft: () => (
              <Button
                onPress={() => navigation.goBack()}
                type={'clear'}
                color="#fff"
                icon={
                  <Icon
                    name="arrow-left"
                    type="material-community"
                    color="black"
                    size={24}
                  />
                }
              />
          ),
      }}
      />

    </Stack.Navigator>
  );
}
