import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/home'
import React from 'react'
import Navbar from '../../components/navbar'

const Stack = createNativeStackNavigator()
const screenOption = {
  headerShown: false,
}


export const Customer = () => {
  return (
    <View style={styles.body}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={screenOption} name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <Navbar isPendingOrder={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    width: '100%', 
    height: '100%'
  }
})
