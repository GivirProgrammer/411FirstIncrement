import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import WorkoutHistory from './Components/Workouthistory';

import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import LoginScreen from './Components/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryPage from './Components/HistoryPage';
import CreateWorkOut from './Components/CreateWorkOut';
import InputPersonalInformation from './Components/InputPersonalInfo';


const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();
const NStack=createNativeStackNavigator();

const WorkoutHistoryStack = () => (
  <NStack.Navigator>
    <NStack.Screen name="WorkoutHistory" component={WorkoutHistory} />
    <NStack.Screen name="HistoryPage" component={HistoryPage} />
  </NStack.Navigator>
);

export default function App() {


  
  return (
    
  //   <NavigationContainer>
  //   <Tab.Navigator initialRouteName='Home'>
  //     <Tab.Screen name="Home" component={HomeScreen} />
  //     <Tab.Screen name="Workout History" component={WorkoutHistory} />
  //   </Tab.Navigator>
  // </NavigationContainer>
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
    <Stack.Screen name='Workout History' component={WorkoutHistory}></Stack.Screen>
    <Stack.Screen name='HistoryPage' component={HistoryPage}></Stack.Screen>
    <Stack.Screen name='PersonInfo' component={InputPersonalInformation}></Stack.Screen>
    <Stack.Screen name='CreateWorkOut' component={CreateWorkOut}></Stack.Screen>

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
