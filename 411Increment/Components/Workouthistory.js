import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WorkoutHistory() {
    const daysInMonth = 31; // Replace with the actual number of days in the current month
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Days of the week

    const renderDaysOfWeek = () => {
        return weekdays.map((day, index) => (
            <View key={index} style={styles.weekDay}>
                <Text style={styles.weekDayText}>{day}</Text>
            </View>
        ));
    };

    const renderDaysOfMonth = () => {
        let days = [];
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(
                <View key={i} style={styles.day}>
                    <Text style={styles.dayText}>{i}</Text>
                </View>
            );
        }
        return days;
    };

    return (
        <View style={styles.calendar}>
            <View style={styles.daysOfWeek}>{renderDaysOfWeek()}</View>
            <View style={styles.daysOfMonth}>{renderDaysOfMonth()}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    calendar: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        // Other styles as needed
      },
      daysOfWeek: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
        // Other styles as needed
      },
      weekDay: {
        width: 30,
        alignItems: 'center',
        // Other styles as needed
      },
      weekDayText: {
        fontWeight: 'bold',
        // Other styles as needed
      },
      daysOfMonth: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // Other styles as needed
      },
      day: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        // Other day styles
      },
      dayText: {
        // Style day text
      },
    // Add more styles as needed
});
