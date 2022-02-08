import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import Register from '../screens/account/Register'
import Account from '../screens/account/Account'
import Test from '../components/Test'

const Stack = createStackNavigator();

export default function DrawerItemsStack() {

  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="test" 
        component={Test} 
        options = {{ 
          title: "Ayuda",
          headerLeft: () => (
              <Button
                onPress={() => navigation.goBack()}
                type={'clear'}
                // color="#fff"
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
