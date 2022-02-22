import React from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Overlay, Input, Button } from 'react-native-elements';
import { Card } from 'react-native-shadow-cards';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const Dashboard = ({ navigation }) => {

  // const tat = createDrawerNavigator();

  const cards = [
    {
      name: 'Mascotas',
      redirect: 'petStack',
    },
    {
      name: 'Ficha Medica',
      redirect: 'medStack',
    },
    {
      name: 'jsa',
      redirect: '',
    },
    {
      name: 'talhaconcepts',
      redirect: '',
    },
    {
      name: 'andy vitale',
      redirect: '',
    },
    {
      name: 'katy friedson',
      redirect:
        '',
    },
  ];
  return (
    <View style={{ flexDirection: 'column', flex: 1}}>
      <ScrollView>
        {cards.map((item) => (
          <>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent : 'center'}}>
              <TouchableOpacity style={{ width: '40%', justifyContent: 'center', margin : 10, borderRadius : 2}} onPress={() => {
                console.log("hace click");
                navigation.navigate(item.redirect);
              }}>
                <Card cornerRadius={20} elevation={10} style={{  height: 150, width: '100%', borderWidth : 0.5  }}  >
                  <Text>{item.name}</Text>
                </Card>
              </TouchableOpacity >
              <TouchableOpacity style={{ width: '40%', justifyContent: 'center', margin : 10, borderRadius : 2 }} onPress={() => {
                console.log("hace click");
                navigation.navigate(item.redirect);
              }}>
                <Card  cornerRadius={20} elevation={10}  style={{height: 150, width: '100%', borderWidth : 0.5 }}  >
                  <Text>{item.name}</Text>
                </Card>
              </TouchableOpacity >
            </View>

          </>
        ))}
      </ScrollView>
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