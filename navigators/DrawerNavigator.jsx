import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingsScreen from "../screens/SettingsScreen";
import TabNavigator from "./TabNavigator";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen
      name="HomeTabs"
      component={TabNavigator}
      options={{ title: "Home" }}
    />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);
export default DrawerNavigator;
