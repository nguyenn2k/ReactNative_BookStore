import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Import screen:
import { BookDetail } from './src/screens'
import Tabs from './src/navigation/tabs'
//Library:
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent"
  }
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
      {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs}/>
      {/* Screens */}
        <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})