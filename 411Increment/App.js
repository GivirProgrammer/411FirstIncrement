import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import WorkoutHistory from './Components/Workouthistory';

import { useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import LoginScreen from './Components/LoginScreen';

const Tab =createBottomTabNavigator();

export default function App() {


  
  return (
    
    <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workout History" component={WorkoutHistory} />
    </Tab.Navigator>
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
