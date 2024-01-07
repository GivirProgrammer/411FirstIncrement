// ExercisePlannerComponent.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button,StyleSheet,Image } from 'react-native';


const CreateWorkOut = ({ route }) => {
  
    const { user_info } = route.params;
    const [workoutPlan, setWorkoutPlan] = useState(null);
  var bmr = 0;
  useEffect(() => {
    
    const calculateDailyCaloricIntake = () => {
       
      if (user_info.gender === 0){
        bmr = 66.5 + (13.75 * user_info.weight) + (5.003 * user_info.height) - (6.75 * user_info.age);
      } else if (user_info.gender === 1){
        bmr =  655.1 + (9.563 * user_info.weight) + (1.850 * user_info.height) - (4.676 * user_info.age);
      }
      
      daily_caloric_intake = bmr * user_info.exerciseLevel;
      console.log(daily_caloric_intake);
      return daily_caloric_intake;
    };

    const generateWorkoutPlan = () => {
      const dailyCaloricIntake = calculateDailyCaloricIntake();
      
      // Determine exercise sets and repetitions based on user's fitness level
      const fitnessLevelMultiplier = {
        beginner: { sets: 3, reps: 8 },
        intermediate: { sets: 4, reps: 10 },
        advanced: { sets: 5, reps: 12 },
      };
      
      console.log(user_info)
      const workoutDetails = fitnessLevelMultiplier[user_info.fitnessLevel];
      
      

      // Set the workout plan in the state
      setWorkoutPlan({
        workoutDetails,
        dailyCaloricIntake,
      });
    };

    generateWorkoutPlan();
  }, [user_info]);

  if (!workoutPlan) {
    return <Text>Loading...</Text>;
  }

  const { workoutDetails, dailyCaloricIntake } = workoutPlan;

  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Text style={styles.setsRepsText}>{workoutDetails.sets} Sets</Text>
        <Text style={styles.setsRepsText}>{workoutDetails.reps} Reps</Text>
      </View>

      <View style={styles.middleContent}>
        <Text style={styles.workoutName}>{user_info.fitnessLevel} Workout</Text>
        <Text style={styles.workoutName}>Calori Intake: {dailyCaloricIntake.toFixed(2)} calories</Text>
      </View>

      <View style={styles.rightContent}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/Squats.png')} style={styles.image} />
          <Text style={styles.imageName}>Squats</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/pullUp.jpg')} style={styles.image} />
          <Text style={styles.imageName}>Pull-ups</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/pushUp.jpg')} style={styles.image} />
          <Text style={styles.imageName}>Push-ups</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      margin: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
    },
    leftContent: {
      alignItems: 'flex-start',
    },
    middleContent: {
      flex: 1,
      alignItems: 'center',
    },
    rightContent: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    setsRepsText: {
      fontSize: 16,
      marginBottom: 8,
    },
    workoutName: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    imageContainer: {
      alignItems: 'center',
      marginHorizontal: 8,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginBottom: 4,
    },
    imageName: {
      fontSize: 12,
    },
  });

export default CreateWorkOut;

