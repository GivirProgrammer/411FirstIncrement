import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { firebase } from '../config';

export default function WorkoutHistory() {
  const navigation = useNavigation();

  const [exercises, setExercises] = useState([]);

  


  const markedDates = useMemo(() => {
    const activities = [{
      completed: 8,
      date: "2024-02-05",
      exerciseTypes: [{name:"Push up",completed:true},{name:"Pull up",completed:true},{name:"Push up",completed:false}],
      goal: 10
    }, {
      completed: 7,
      date: "2024-02-06",
      exerciseTypes: ["Push up", "Pull up", "cardio"],
      goal: 10
    }, {
      completed: 10,
      date: "2024-02-07",
      exerciseTypes: ["Push up", "Pull up", "cardio"],
      goal: 10
    }]
    const updatedMarkedDates = {};

    activities.forEach((element) => {
      updatedMarkedDates[element.date] = { customStyles: { container: { backgroundColor: element.goal==element.completed ? "green" : "red", elevation: 2 }, text: { color: "white" } } };
    });

    return updatedMarkedDates;
  }, []); // Empty dependency array ensures this logic runs only once

  const onDayPress = (day) => {
    // Here you can navigate to the corresponding date page using the selected day
    navigation.navigate('HistoryPage', { selectedDate: day.dateString });
  };


  return (
    <Calendar
      style={{ borderRadius: 20, marginTop: 100, marginLeft: 30, marginRight: 30 }}
      markingType={"custom"}
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

