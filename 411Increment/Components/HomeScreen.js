import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



import LoginScreen from "./LoginScreen";



export default function HomeScreen(){
    const [showLogin, setShowLogin] = useState(false);


    
    const handleLogin = () => {
        setShowLogin(true);
    };
      
    const handleSignUp = () => {
      // Handle sign-up functionality
    };
      
    return (
      <View style={styles.container}>
        {!showLogin? (
        <>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        </>
        ): (
            <LoginScreen/>
        )}
      </View>
    );
      

}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#333', // Dark background color
      padding: 15,
      borderRadius: 8,
      width: '45%', // Adjust as needed
    },
    signUpButton: {
      backgroundColor: '#555', // Darker background color for Sign Up button
    },
    buttonText: {
      color: 'white', // Text color
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });