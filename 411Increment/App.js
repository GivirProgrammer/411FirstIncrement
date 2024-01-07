import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import WorkoutHistory from './Components/Workouthistory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import HistoryPage from './Components/HistoryPage';
import LoginScreen from './Components/LoginScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const WorkoutHistoryStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="WorkoutHistory" component={WorkoutHistory} />
    <Stack.Screen name="HistoryPage" component={HistoryPage} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Screen name='Login' component={LoginScreen}> */}
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Workout History" component={WorkoutHistoryStack}/>
          <Tab.Screen name='Login' component={LoginScreen}></Tab.Screen>
        </Tab.Navigator>
      {/* </Stack.Screen> */}

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
