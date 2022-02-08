import { StatusBar } from 'expo-status-bar';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions" 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function VeteMap() {
    const handleLocationPermission = async () => { 
    if (Platform.OS === 'android') {
        permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  
        if (
          permissionCheck === RESULTS.BLOCKED ||
          permissionCheck === RESULTS.DENIED
        ) {
          const permissionRequest = await request(
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          );
          permissionRequest === RESULTS.GRANTED
            ? console.warn('Location permission granted.')
            : console.warn('location permission denied.');
        }
      }
    }
    useEffect(() => {
        handleLocationPermission()
      }, [])
    return <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
            latitude: -34.901112,
            longitude: -56.164532,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
    />
}

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });