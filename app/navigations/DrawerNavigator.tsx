import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  const auth = getAuth();
  const navigation = useNavigation();

  const logout = async () => {
    signOut(auth).then(() => {
      navigation.dispatch(DrawerActions.closeDrawer()),
      console.log("CERRAR SESION")
    }).catch((error) => {
      console.log("EROR AL CERRAR SESION, ", error)
    });
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItem label="Cerrar sesión" onPress={() => logout()} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Cerrar sesión"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      {/* <Drawer.Screen name="Centro de Ayuda" component={DrawerItemsStack} /> */}
      {/* <Drawer.Screen name="Términos y Condiciones" component={TermsAndConditionsStack} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
