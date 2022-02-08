import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./app/navigations/DrawerNavigator";
import TabNavigator from "./app/navigations/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
