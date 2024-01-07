import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';



import LoginScreen from "./LoginScreen";
import { Button } from 'react-native'
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";



export default function HomeScreen() {
  const navigation = useNavigation();

  const goToWorkout = () => {
    navigation.navigate("Workout History");
  }
  return (
    <View style={{ flex: 1, margin: "auto", padding: 60 }}>

      <TouchableOpacity><Image source={require('../assets/favicon.png')} style={styles.container}></Image></TouchableOpacity>
      <Text style={styles.text}>Profile</Text>
      <View style={styles.buttonContainer}>
        <Button color={"purple"} onPress={goToWorkout} title="Go to workout History ->"></Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button color={"purple"} onPress={goToWorkout} title="Go to workout History ->"></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    width: 50,
    height: 50,
    borderColor: "black",
    marginLeft: 110,

  },
  text: {
    marginLeft: 110,
    marginTop: 0,


  },
  buttonContainer:{
    marginTop:50
  }

})