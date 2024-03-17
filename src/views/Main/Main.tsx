import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Campfire from '../Campfire'
import Drag from '../Drag'
import Welcome from '../Welcome'
import { Turtles } from '../Turtles'

const MainNavigation = createStackNavigator()

const Main = () => {
  return (
    <NavigationContainer>
      <MainNavigation.Navigator
        initialRouteName="Begin"
        screenOptions={{ headerShown: false }}
      >
        <MainNavigation.Screen name="Begin" component={Welcome} />
        <MainNavigation.Screen name="Drag" component={Drag} />
        <MainNavigation.Screen name="Fire" component={Campfire} />
        <MainNavigation.Screen name="Turtles" component={Turtles} />
      </MainNavigation.Navigator>
    </NavigationContainer>
  )
}

export default Main
