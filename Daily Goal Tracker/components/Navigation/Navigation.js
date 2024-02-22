// Navigation.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LandingPage from "../pages/LandingPage";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Settings from "../pages/Settings";
import { Fontisto } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={LandingPage}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <FontAwesome name="home" size={24} color="black" />
            ),
            drawerLabelStyle: {
              color: "black",
              fontWeight: "bold",
              marginLeft: 5,
            },
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: () => (
              <Fontisto name="player-settings" size={24} color="black" />
            ),
            drawerLabelStyle: {
              color: "black",
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#E6E6EA",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
