import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Drag from "../Drag";
import Welcome from "../Welcome";

const MainNavigation = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <MainNavigation.Navigator headerMode="none" initialRouteName="Begin">
        <MainNavigation.Screen name="Begin" component={Welcome} />
        <MainNavigation.Screen name="Drag" component={Drag} />
      </MainNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Main;
