import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/Screens/GetStarted/GetStarted';
import UserLogin from './src/Screens/UserLogin/UserLogin';
import VendorLogin from './src/Screens/VendorLogin/VendorLogin';
import UserRegistration from './src/Screens/UserRegistration/UserRegistration';
import VendorRegistration from './src/Screens/VendorRegistration/VendorRegistration';
import Dashboard from './src/Screens/UserDashboard/Dashboard';


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={GetStarted}/>
        <Stack.Screen name="User Login" component={UserLogin}/>
        <Stack.Screen name="Vendor Login" component={VendorLogin}/>
        <Stack.Screen name="User Registration" component={UserRegistration}/>
        <Stack.Screen name="Vendor Registration" component={VendorRegistration}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});