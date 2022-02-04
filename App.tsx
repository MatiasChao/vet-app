import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native';
import VeteMap from './components/VeteMap';
export default function App() {

  return (
    <View style={styles.container}>
      <Text>Empezando a crear esa APP</Text>
      <View style={styles.mapConatiner}>
        {/* <VeteMap /> */}
      </View>
      {/* </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapConatiner: {
    width: '100%',
    height: '80%',
  }
});
