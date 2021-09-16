
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import NavigatorParameters from 'models/navigators'

import Home from '@screens/home'
import Detail from '@screens/detail'

const Stack = createStackNavigator<NavigatorParameters>()

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions = {{
        headerShown: true
      }}
    >
      <Stack.Screen
        name = 'Home'
        component = {Home}
      />

      <Stack.Screen
        name = 'Detail'
        component = {Detail}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
