import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../pages/Home';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{
        headerShown: false
      }}    
    >
        <Stack.Screen 
        name='homeNav' 
        component={Home}
        options={{
            title: 'Inicio'
        }}
        />
    </Stack.Navigator>
  )
}